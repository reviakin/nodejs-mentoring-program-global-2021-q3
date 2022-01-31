import { NextFunction, Request, Response } from "express";
import {
  JsonWebTokenError,
  NotBeforeError,
  TokenExpiredError,
} from "jsonwebtoken";
import { getTokenFromRequestHeader } from "../../utils";
import { Authorization, Forbidden } from "../errors";
import { tokenService } from "../services";

export function checkToken(req: Request, _: Response, next: NextFunction) {
  const token = getTokenFromRequestHeader(req);

  if (!token) {
    throw new Authorization("token is required");
  }

  try {
    tokenService.verifyToken(token);
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
