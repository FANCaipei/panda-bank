const config = require("../config.json");
const log4js = require("log4js");

log4js.configure({
  appenders: { server: { type: "file", filename: "server.log" } },
  categories: { default: { appenders: ["server"], level: config.logLevel } },
});
const Logger = log4js.getLogger();
Logger.level = config.logLevel;

module.exports = Logger;
