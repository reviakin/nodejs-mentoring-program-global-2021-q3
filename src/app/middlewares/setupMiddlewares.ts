import { Express, json } from "express";
import helmet from "helmet";

import { logRequest } from ".";
import { handleError } from "./errorHandler";

const setupMiddlewares = (app: Express) => {
  app.use(json());
  app.use(logRequest);
  app.use(helmet());
  app.use(handleError);
};

export { setupMiddlewares };
