import { Router } from "express";

const homeRouter = Router();

homeRouter?.get("/", (_, res) => {
  res?.render("index", { title: "Home" });
});

homeRouter?.use((_, res) => {
  res?.status(404)?.render("404", { title: "404" });
});

export { homeRouter };
