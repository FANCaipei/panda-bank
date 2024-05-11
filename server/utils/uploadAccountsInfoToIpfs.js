const fs = require("fs");
const path = require("path");
const { v4: uuidv4 } = require("uuid");
const IpfsManager = require("./ipfsManager");
const Logger = require("./logger");

const deleteFile = filePath => {
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
};

const uploadAccountsInfoToIpfs = async (hashedName, encryptedContent) => {
    try {
        const contentObj = {
            name: hashedName,
            accounts: encryptedContent,
            version: 1,
        };

        const contentJson = JSON.stringify(contentObj);

        const filePath = path.resolve(__dirname, `../tempFiles/temp-${uuidv4().replace("/", "-")}.json`);

        fs.writeFileSync(filePath, contentJson);

        const resp = await IpfsManager.uploadFile(fs.createReadStream(filePath));
        deleteFile(filePath);
        return resp?.data?.cid;
    } catch (err) {
        Logger.error(err);
        return null;
    }
};

module.exports = uploadAccountsInfoToIpfs;
