import express from "express";
import path from "path";
import { config } from "./config";
import { infoMiddleware } from "./middleware/infoMiddleware";
import { apiRouter } from "./routes/apiRouter";
import { homeRouter } from "./routes/homeRouter";

const app = express();
const port = config?.port;

// Configuration
app.disable("x-powered-by");
app?.use(express?.json());
app?.use(express?.urlencoded({ extended: true }));
app?.use("/static", express?.static(path?.resolve(__dirname, "static")));

// Middleware
app?.use(infoMiddleware);

// Routers
app?.use("/api", apiRouter);
app?.use("/", homeRouter);

app?.listen(port, () => {
  console?.log(`App listening on port ${port}...`);
});
