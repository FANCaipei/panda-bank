const { getCollection } = require("../basicClient");

const CollectionName = "custom_chain_config";

const AddCustomChainConfig = async (uid, chainId, chainConfig) => {
    const collection = await getCollection(CollectionName);

    const chainRecord = await collection.findOne({
        uid: uid,
        chainId: chainId,
    });

    if (chainRecord) {
        return "Chain already exist";
    }

    await collection.insertOne({
        uid: uid,
        chainId: chainId,
        chainConfig: chainConfig,
    });

    return null;
};

const GetCustomChains = async uid => {
    const collection = await getCollection(CollectionName);

    const result = await collection
        .find({
            uid: uid,
        })
        .toArray();

    return result;
};

const DeleteCustomChain = async (uid, chainId) => {
    const collection = await getCollection(CollectionName);

    try {
        await collection.findOneAndDelete({
            uid: uid,
            chainId: chainId,
        });
        return null;
    } catch {
        return "Delete failed";
    }
};

module.exports = { AddCustomChainConfig, GetCustomChains, DeleteCustomChain };
