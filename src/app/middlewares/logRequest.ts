import { NextFunction, Request, Response } from "express";
import { createLogger } from "../../utils";

const logger = createLogger("REST");
const methodsWithBody = new Set(["POST", "PUT", "PATCH"]);

function logRequest(req: Request, res: Response, next: NextFunction) {
  logger.info("API CALL", {
    url: req.path,
    method: req.method,
    arguments: methodsWithBody.has(req.method) ? req.body : req.query,
  });

  next();
}

export { logRequest };
