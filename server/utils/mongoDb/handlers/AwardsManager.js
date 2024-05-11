const { getCollection } = require("../basicClient");

const UpdateLoginAward = async (uid, referralUid) => {
    if (!uid) {
        return;
    }
    const loginAwardPoints = 10;
    const referralAwardRatio = 0.1;
    const collection = await getCollection("award_points");

    const updateReferralAwards = async () => {
        if (!referralUid) {
            return;
        }
        const record = await collection.findOne({ uid: referralUid });
        if (!record) {
            // create
            collection.insertOne({
                uid: referralUid,
                awardsTobeCollected: [
                    {
                        points: loginAwardPoints * referralAwardRatio,
                        expiredTime: Date.now() + 60 * 60 * 24 * 1000,
                        type: "referral-login",
                    },
                ],
            });
        } else {
            // update
            collection.updateOne(
                { uid: referralUid },
                {
                    $push: {
                        awardsTobeCollected: {
                            points: loginAwardPoints * referralAwardRatio,
                            expiredTime: Date.now() + 60 * 60 * 24 * 1000,
                            type: "referral-login",
                        },
                    },
                }
            );
        }
    };

    // update awards
    const awardRecord = await collection.findOne({ uid: uid });
    if (!awardRecord) {
        // create
        collection.insertOne({
            uid: uid,
            nextLoginAwardTime: Date.now() + 60 * 60 * 24 * 1000,
            awardsTobeCollected: [
                { points: loginAwardPoints, expiredTime: Date.now() + 60 * 60 * 24 * 1000, type: "login" },
            ],
        });
        updateReferralAwards();
    } else if (awardRecord.nextLoginAwardTime < Date.now()) {
        // update
        collection.updateOne(
            { uid: uid },
            {
                $set: {
                    nextLoginAwardTime: Date.now() + 60 * 60 * 24 * 1000,
                },
                $push: {
                    awardsTobeCollected: {
                        points: loginAwardPoints,
                        expiredTime: Date.now() + 60 * 60 * 24 * 1000,
                        type: "login",
                    },
                },
            }
        );
        updateReferralAwards();
    }
};

const GetCollectablePoints = async uid => {
    if (!uid) {
        return 0;
    }
    const collection = await getCollection("award_points");
    const record = await collection.findOne({ uid: uid });
    if (!record?.awardsTobeCollected?.length) {
        return 0;
    }

    let sum = 0;
    record.awardsTobeCollected.forEach(item => {
        if (item.expiredTime >= Date.now()) {
            sum += item.points ?? 0;
        }
    });
    return sum;
};

const CollectPoints = async uid => {
    if (!uid) {
        return;
    }
    const collection = await getCollection("award_points");
    const record = await collection.findOne({ uid: uid });
    if (!record?.awardsTobeCollected?.length) {
        return;
    }

    let sum = 0;
    record.awardsTobeCollected.forEach(item => {
        if (item.expiredTime >= Date.now()) {
            sum += item.points ?? 0;
        }
    });

    return await collection.findOneAndUpdate(
        { uid: uid },
        { $inc: { collectedPoints: sum }, $set: { awardsTobeCollected: [] } }
    );
};

module.exports = { UpdateLoginAward, GetCollectablePoints, CollectPoints };
