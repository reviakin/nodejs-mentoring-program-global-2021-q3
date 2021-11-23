import express from "express";
import { PORT, HOSTNAME, PROTOCOL } from "../config";
import { userRouter } from "./resources/user/user.router";

const service = express();

service.use(express.json());
service.use("/user", userRouter);

function start() {
  try {
    service.listen(PORT, HOSTNAME, function () {
      console.log(`server was stated at ${PROTOCOL}://${HOSTNAME}:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}

export { start };
