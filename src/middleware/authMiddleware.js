import jwt from "jsonwebtoken";
import { config } from "../config";

// Generate token for testing purpose
jwt?.sign(
  { username: "admin" },
  config?.tokenSecret,
  {
    expiresIn: 60 * 60, // 1 hour
  },
  (err, token) => {
    console?.log(err);
    console?.log(token);
  }
);

const authMiddleware = (req, res, next) => {
  const authHeader = String(req?.headers["authorization"] || "");
  console?.log({ authHeader });
  const token = authHeader?.split(" ")[1];

  if (!token) {
    res?.status(401)?.render("index", { title: "401" });
    return;
  }

  jwt?.verify(token, config?.tokenSecret, (err, payload) => {
    console?.log(err);
    console?.log(payload);
    if (err) {
      res?.status(403)?.render("index", { title: "403" });
    } else {
      req.username = payload?.username;
      next();
    }
  });
};

export { authMiddleware };
