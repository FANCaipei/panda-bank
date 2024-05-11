const { getCollection } = require("../basicClient");

/**
 *
 * @param {*} hashedName
 * @param {*} chainId
 * @param {*} tokenConfig ex: {
 *   contract: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
 *   symbol: "USDC",
 *   name: "USD Coin",
 *   iconUrl: "https://etherscan.io/token/images/centre-usdc_28.png",
 *   decimals: 6,
 * }
 */
const SaveERC20Config = async (hashedName, chainId, accountAddr, tokenConfig) => {
    if (!tokenConfig?.contract || !tokenConfig?.name) {
        return "Config not valid, contract and name is required";
    }

    const collection = await getCollection("erc20_config");

    const tokenRecord = await collection.findOne({
        uid: hashedName,
        chainId: chainId,
        contract: tokenConfig?.contract,
        accountAddr: accountAddr,
    });

    if (tokenRecord) {
        return "Token already exist";
    }

    await collection.insertOne({
        uid: hashedName,
        accountAddr: accountAddr,
        chainId: chainId,
        contract: tokenConfig.contract,
        symbol: tokenConfig?.symbol,
        name: tokenConfig?.name,
        iconUrl: tokenConfig?.iconUrl,
        decimals: tokenConfig?.decimals,
    });

    return null;
};

const GetUserERC20Config = async (hashedName, chainId, accountAddr) => {
    const collection = await getCollection("erc20_config");

    const result = await collection
        .find({
            uid: hashedName,
            chainId: chainId,
            accountAddr: accountAddr,
        })
        .toArray();

    return result;
};

module.exports = { SaveERC20Config, GetUserERC20Config };
