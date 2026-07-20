import fs from "node:fs";
import path from "node:path";

import cors from "cors";
import express from "express";
import type { ErrorRequestHandler } from "express";

import router from "./router";

const app = express();

const clientOrigins = [
  process.env.CLIENT_URL,
  "http://localhost:3000",
  "http://127.0.0.1:3000",
  "http://10.5.0.2:3000",
  "http://192.168.1.153:3000",
].filter(Boolean) as string[];

if (clientOrigins.length > 0) {
  app.use(cors({ origin: clientOrigins }));
}

app.use(router);

const publicFolderPath = path.join(__dirname, "../../server/public");

if (fs.existsSync(publicFolderPath)) {
  app.use(express.static(publicFolderPath));
}

const clientBuildPath = path.join(__dirname, "../../client/dist");

if (fs.existsSync(clientBuildPath)) {
  app.use(express.static(clientBuildPath));
  app.get("*", (_, res) => {
    res.sendFile("index.html", { root: clientBuildPath });
  });
}

const logErrors: ErrorRequestHandler = (err, req, res, next) => {
  console.error(err);
  console.error("on req:", req.method, req.path);
  next(err);
};

app.use(logErrors);

export default app;
