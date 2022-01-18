import { sign } from "jsonwebtoken";
import { JWT_SECRET } from "../config";

function getToken(payload: string | object | Buffer) {
  return sign(payload, JWT_SECRET);
}

export { getToken };
