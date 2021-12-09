const config = require("./package.json").projectConfig;

module.exports = {
  mongoConfig: {
    connectionUrl: config.mongoConnectionUrl,
    database: "uils_db",
    collections: {
      USERS: "users",
    },
  },
  serverConfig: {
    ip: config.serverIp,
    port: config.serverPort,
  },
  tokenSecret: "uils_secret",
};
