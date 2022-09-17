import Koa from "koa";
import cors from "@koa/cors";
import router from "./routes/router.js";
import * as path from "path";
import render from "koa-ejs";

import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = new Koa();
const port = 3011;

app.use(cors({ origin: "*" }));

app.use(async (ctx, next) => {
  await next();
  const rt = ctx.response.get("X-Response-Time");
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
});

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set("X-Response-Time", `${ms}ms`);
});

render(app, {
  root: path.join(__dirname, "public"),
  layout: "layout",
  viewExt: "html",
  cache: false,
  debug: false,
});

router.get("/", async (ctx) => {
  await ctx.render("index");
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
