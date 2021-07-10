import express from "express";
import path from "path";
import process from "process";
import { config } from "./config";
import { db } from "./db";
import { infoMiddleware } from "./middleware/infoMiddleware";
import { personAPIRouter } from "./routes/personAPI";
import { homeRouter } from "./routes/home";

const app = express();
const port = config?.port;

// Configuration
app.disable("x-powered-by");
app?.use(express?.json());
app?.use(express?.urlencoded({ extended: true }));
app?.use("/static", express?.static(path?.resolve(__dirname, "static")));

// Setup views
app?.set("view engine", "pug");
app?.set("views", path?.resolve(__dirname, "views"));

// Middleware
app?.use(infoMiddleware);

// Routers
app?.use("/api/person", personAPIRouter);
app?.use("/", homeRouter);

const server = app?.listen(port, () => {
  console?.log(`App listening on port ${port}...`);
});

// Clean all connections on shutdown
const shutDown = () => {
  console?.log("\n");
  console?.log("Shutting down...");
  try {
    db?.close();
    server?.close();
  } catch (err) {
    console?.log(err);
  } finally {
    console?.log("Exiting process.");
    process?.exit(0);
  }
};

process?.on("SIGINT", shutDown);
process?.on("SIGTERM", shutDown);
