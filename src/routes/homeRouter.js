import { Router } from "express";

const homeRouter = Router();

homeRouter?.get("/", (_, res) => {
  res?.render("index", { title: "Home" });
});

homeRouter?.use((_, res) => {
  res?.status(404)?.send("404!");
});

export { homeRouter };
