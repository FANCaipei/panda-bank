const config = require("../config.json");
const jwt = require("jsonwebtoken");
const generateErrMsg = require("../utils/generateErrMsg");
const { FindUser } = require("../utils/mongoDb/handlers/UserManager");
const { UpdateLoginAward } = require("../utils/mongoDb/handlers/AwardsManager");

const LoginHandler = async (req, res) => {
    const hashedUsername = req?.body?.hashedUsername;
    if (!hashedUsername) {
        res.status(400).send(generateErrMsg(4000, "Params error"));
    } else {
        const correspondUser = await FindUser(hashedUsername);
        if (correspondUser?.accountsInfo) {
            const token = jwt.sign(
                {
                    id: hashedUsername,
                    encryptedAccount: correspondUser?.accountsInfo,
                    ipfsCid: correspondUser?.ipfs,
                    ipfsCidUpdated: correspondUser?.ipfsCidUpdated,
                    invitedBy: correspondUser?.invitedBy,
                },
                config.jwtSecret,
                {
                    expiresIn: config.tokenExpired,
                }
            );

            UpdateLoginAward(hashedUsername, correspondUser?.invitedBy);

            res.send({
                jwt: token,
                profiles: correspondUser?.accountsInfo,
                ipfsCid: correspondUser?.ipfs,
                ipfsUpdated: correspondUser?.ipfsCidUpdated,
            });
        } else {
            res.status(400).send(generateErrMsg(4000, "Username or password error"));
        }
    }
};

module.exports = LoginHandler;
