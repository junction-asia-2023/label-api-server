const Koa = require("koa");

const { cors } = require("./middleware");
const router = require("./router");

const app = new Koa();

app.use(cors).use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log("label server is listening to port 3000");
});
