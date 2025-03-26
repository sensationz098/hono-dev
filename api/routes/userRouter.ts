import { Hono } from "hono";

export const UserRouter = new Hono();

UserRouter.post("/create", async (c) => {
  const data = await c.req.json();

  console.log(data, "Hello");
  return c.json({ message: "Hello user!", data: `${data}` });
});
