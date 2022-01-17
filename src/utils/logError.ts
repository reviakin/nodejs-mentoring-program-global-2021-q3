import { Request } from "express";
import { Logger } from "winston";

function logError(
  logger: Logger,
  method: string,
  { body, query, params, headers }: Request,
  error: unknown
) {
  logger.error("ERROR", {
    method,
    arguments: { params, query, body, headers },
    error: (error as Error).message,
  });
}

export { logError };
