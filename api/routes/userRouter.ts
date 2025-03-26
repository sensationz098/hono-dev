import { Hono } from "hono";

export const UserRouter = new Hono();

UserRouter.post("/create", (c) => {
  console.log(c.body);
  return c.json({ message: "Hello user!" });
});
