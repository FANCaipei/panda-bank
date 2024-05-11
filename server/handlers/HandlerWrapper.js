const Logger = require("../utils/logger");

const HandlerWrapper = (handlerFn, needAuth=false) => {
    return async (req, res) => {
        try {
            if(needAuth && req.user == null){
                res.status(401).send(generateErrMsg(4001, "Unauthed"));
                return;
            }
            await handlerFn(req, res);
        } catch (err) {
            Logger.error(err);
            res.status(500).send(err);
        }
    };
};

module.exports = HandlerWrapper;
