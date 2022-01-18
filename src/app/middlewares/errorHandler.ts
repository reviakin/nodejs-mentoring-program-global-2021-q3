import { Request, Response, NextFunction } from "express";
import { createLogger, getErrorStatusCode } from "../../utils";
import { IErrorResponse } from "../errors";

const logger = createLogger("UNHANDLED ERROR");

function handleError(
  error: Error,
  _: Request,
  res: Response,
  next: NextFunction
) {
  const statusCode = getErrorStatusCode(error);
  const { message, name } = error;

  const output: IErrorResponse = {
    statusCode,
    message,
    name,
  };

  logger.error(output);

  res.status(statusCode).json(output);
  next(error);
}

export { handleError };
