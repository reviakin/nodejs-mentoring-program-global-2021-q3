import express from "express";
import { PORT, HOSTNAME, PROTOCOL } from "../config";

import { userRouter, BASE_ROUTE_PATH } from "./routers/user";
import { connection as dbConnection } from "./db";

const service = express();

service.use(express.json());
service.use(BASE_ROUTE_PATH, userRouter);

function start() {
  try {
    service.listen(PORT, HOSTNAME, function () {
      console.log(`server was stated at ${PROTOCOL}://${HOSTNAME}:${PORT}`);
    });

    dbConnection
      .authenticate()
      .then(() => console.log("successfully connected to db"))
      .catch((error) => console.log("error on db connect", error));
  } catch (error) {
    console.error(error);
  }
}

export { start };
