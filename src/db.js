import path from "path";
import process from "process";
import sqlite3 from "sqlite3";

const DB_PATH = path?.resolve(__dirname, "..", "db", "data.db");

const db = new sqlite3.Database(DB_PATH, (err) => {
  if (err) {
    console?.log("Database connection unsuccessful.");
    console?.log(err);
    process?.kill(process?.pid, "SIGINT");
  }
});

export { db };
