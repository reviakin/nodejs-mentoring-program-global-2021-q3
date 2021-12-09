import express from "express";
import { PORT, HOSTNAME, PROTOCOL } from "../config";

import { userRouter, BASE_ROUTE_PATH as USER_PATH } from "./routers/user";
import { setupModels } from "./db";

const service = express();

service.use(express.json());
service.use(USER_PATH, userRouter);

async function start() {
  try {
    await setupModels();
    service.listen(PORT, HOSTNAME, function () {
      console.log(`server was stated at ${PROTOCOL}://${HOSTNAME}:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

export { start };
