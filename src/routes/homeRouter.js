import { Router } from "express";

const homeRouter = Router();

homeRouter?.get("/", (_, res) => {
  res?.send("Home.");
});

homeRouter?.use((_, res) => {
  res?.status(404)?.send("404!");
});

export { homeRouter };
