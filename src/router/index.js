const Router = require("@koa/router");

const settingApi = require("./setting");
const imageApi = require("./image");

const router = new Router();
router.use("/setting", settingApi.routes());
router.use("/image", imageApi.routes());

module.exports = router;
