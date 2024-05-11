const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const config = require("./config.json");
const Logger = require("./utils/logger");
const LoginHandler = require("./handlers/LoginHandler");
const SignUpHandler = require("./handlers/SignUpHandler");
const HandlerWrapper = require("./handlers/HandlerWrapper");
const TestHandler = require("./handlers/TestHandler");

const app = express();
const port = 8686;

app.use(cors()); // TODO: config the cors
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

/**
 *  jwt token resolve middleware
 */
app.use((req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) {
        req.user = null;
        // return res.sendStatus(401);
    } else {
        jwt.verify(token, config.jwtSecret, (err, user) => {
            if (err) {
                // Logger.error(err);
                req.user = null;
                // return res.sendStatus(403)
            }

            req.user = user;
        });
    }
    next();
});

/**
 * error log middleware
 */
app.use((err, req, res, next) => {
    if (err) {
        Logger.error(err);
    }
    next();
});

app.post("/api/v1/login", HandlerWrapper(LoginHandler, false));
app.post("/api/v1/signUp", HandlerWrapper(SignUpHandler, false));
app.get("/api/v1/test", HandlerWrapper(TestHandler, false));

app.listen(port, () => {
    console.log(`App started, listening on port ${port}`);
});
