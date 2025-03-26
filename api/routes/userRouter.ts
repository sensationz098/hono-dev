import { Hono } from "hono";

export const UserRouter = new Hono();

UserRouter.post("/create", (c) => {
  return c.json({ message: "Hello user!" });
});
