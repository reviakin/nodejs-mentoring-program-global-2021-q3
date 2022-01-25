import { NextFunction, Request, Response } from "express";
import {
  JsonWebTokenError,
  NotBeforeError,
  TokenExpiredError,
  verify,
} from "jsonwebtoken";
import { JWT_SECRET } from "../../config";
import { getTokenFromRequestHeader } from "../../utils";
import { Authorization, Forbidden } from "../errors";

export function checkToken(req: Request, _: Response, next: NextFunction) {
  const token = getTokenFromRequestHeader(req);

  if (!token) {
    throw new Authorization("token is required");
  }

  try {
    verify(token, JWT_SECRET);
  } catch (error) {
    let message = "invalid token";

    if (
      error instanceof TokenExpiredError ||
      error instanceof NotBeforeError ||
      error instanceof JsonWebTokenError
    ) {
      message = error.message;
    }

    throw new Forbidden(message);
  }

  next();
}
