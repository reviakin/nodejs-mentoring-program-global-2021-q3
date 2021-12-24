import express from "express";

import { PORT, HOSTNAME, PROTOCOL } from "../config";
import { setupRoutes } from "./routers";
import { setupModels } from "./db";
import { setupMiddlewares } from "./middlewares";

async function start() {
  try {
    const service = express();
    await setupModels();
    setupRoutes(service);
    setupMiddlewares(service);
    service.listen(PORT, HOSTNAME, function () {
      console.log(`server was stated at ${PROTOCOL}://${HOSTNAME}:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

export { start };
