import {
  createLogger as winstonCreateLogger,
  format,
  transports,
} from "winston";
import { winston } from "../config";

function createLogger(serviceName: string) {
  const logger = winstonCreateLogger({
    defaultMeta: { service: serviceName },
    format: format.combine(
      format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      format.json()
    ),
    transports: [
      new transports.File({ filename: winston.COMBINE_LOG_FILE }),
      new transports.File({
        filename: winston.ERROR_LOG_FILE,
        level: "error",
      }),
    ],
  });

  return logger;
}

export { createLogger };
