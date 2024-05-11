const { getCollection } = require("../basicClient");
const referralCodes = require("referral-codes");

const AddUser = async (hashedName, encryptedAccounts, ipfsCid, inviteCode = null) => {
    const existUser = await FindUser(hashedName);
    const invitedByUserId = inviteCode ? await GetUserIdByRefferalCode(inviteCode) : null;

    if (existUser != null) {
        throw {
            error: "User already exist",
        };
    } else {
        const collection = await getCollection("users");
        return collection.insertOne({
            hashedName: hashedName,
            accountsInfo: encryptedAccounts,
            ipfs: ipfsCid,
            ipfsCidUpdated: true,
            referralCode: referralCodes.generate({
                length: 8,
                count: 1,
            })[0],
            invitedBy: invitedByUserId,
        });
    }
};

const FindUser = async hashedName => {
    const collection = await getCollection("users");

    const correspondUser = await collection.findOne({ hashedName: hashedName });
    return correspondUser;
};

const GetUserIdByRefferalCode = async inviteCode => {
    const collection = await getCollection("users");

    const correspondUser = await collection.findOne({ referralCode: inviteCode });
    return correspondUser?.hashedName;
};

const IncrementInviteCount = async inviteCode => {
    const collection = await getCollection("users");

    await collection.findOneAndUpdate({ referralCode: inviteCode }, { $inc: { inviteCount: 1 } });
};

const UpdateAccounts = async (hashedName, encryptedAccounts, ipfsCid) => {
    const collection = await getCollection("users");

    const correspondUser = collection.findOneAndUpdate(
        {
            hashedName: hashedName,
        },
        {
            $set: {
                accountsInfo: encryptedAccounts,
                ipfs: ipfsCid,
                ipfsCidUpdated: true,
            },
        }
    );

    return correspondUser;
};

const SetIpfsUpdatedFalse = async hashedName => {
    const collection = await getCollection("users");

    return collection.findOneAndUpdate(
        {
            hashedName: hashedName,
        },
        {
            $set: { ipfsCidUpdated: false },
        }
    );
};

module.exports = { AddUser, FindUser, UpdateAccounts, SetIpfsUpdatedFalse, IncrementInviteCount };
