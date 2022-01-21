import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
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
    throw new Forbidden("invalid token");
  }

  next();
}
