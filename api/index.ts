import { Hono } from "hono";
import { handle } from "hono/vercel";

import { UserRouter } from "./routes/userRouter";

export const config = {
  runtime: "edge",
};

export const app = new Hono().basePath("/api");

app.route("/user", UserRouter);

app.get("/", (c) => {
  return c.json({ message: "Hello Hono!" });
});

app.post("/create", (c) => {
  return c.json({ message: "Hello post request" });
});

export default handle(app);
