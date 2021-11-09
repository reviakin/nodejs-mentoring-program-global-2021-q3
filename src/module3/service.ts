import express from "express";
import { PORT, HOSTNAME, PROTOCOL } from "../config";

const service = express();

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
