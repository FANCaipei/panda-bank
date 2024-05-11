const config = require("../config.json");
const jwt = require("jsonwebtoken");
const generateErrMsg = require("../utils/generateErrMsg");
const { AddUser, IncrementInviteCount } = require("../utils/mongoDb/handlers/UserManager");
const uploadAccountsInfoToIpfs = require("../utils/uploadAccountsInfoToIpfs");

const isValidHusername = hUsername => {
    const reg = /^[a-f0-9]{64}$/gi;
    return hUsername && reg.test(hUsername);
};

const isValidEncryptedContent = content => {
    const reg = /[A-Za-z0-9+\/=]/;
    return content && reg.test(content);
};

const SignUpHandler = async (req, res) => {
    const hashedUsername = req?.body?.hashedUsername;
    const encryptedAccounts = req?.body?.accounts;
    const inviteCode = req?.body?.inviteCode;

    if (!isValidHusername(hashedUsername) || !isValidEncryptedContent(encryptedAccounts)) {
        res.status(400).send(generateErrMsg(4000, "Params error"));
        return;
    }

    const ipfsCid = await uploadAccountsInfoToIpfs(hashedUsername, encryptedAccounts);

    if (ipfsCid) {
        await AddUser(hashedUsername, encryptedAccounts, ipfsCid, inviteCode);
        const token = jwt.sign(
            {
                id: hashedUsername,
                encryptedAccount: encryptedAccounts,
                ipfsCid: ipfsCid,
                ipfsCidUpdated: true,
                invitedBy: correspondUser?.invitedBy,
            },
            config.jwtSecret,
            {
                expiresIn: config.tokenExpired,
            }
        );
        // update refferal user inviteCount
        if (inviteCode) {
            await IncrementInviteCount(inviteCode);
        }
        res.send({
            jwt: token,
            profiles: encryptedAccounts,
            ipfsCid: ipfsCid,
            ipfsUpdated: true,
        });
    } else {
        res.status(400).send(generateErrMsg(4000, "Upload ipfs failed, please try again later"));
    }
};

module.exports = SignUpHandler;
