const cors = require("@koa/cors");

const corsMiddleware = cors({ origin: "*" });

module.exports = corsMiddleware;
