import { Request } from "express";

function getTokenFromRequestHeader(req: Request) {
  const token = req.headers["x-access-token"] || req.headers["authorization"];
  if (typeof token === "string") return token;

  return undefined;
}
export { getTokenFromRequestHeader };
