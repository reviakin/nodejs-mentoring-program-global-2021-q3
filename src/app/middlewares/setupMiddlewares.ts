import { Express, json } from "express";
import helmet from "helmet";

import { logRequest } from ".";

const setupMiddlewares = (app: Express) => {
  app.use(json());
  app.use(logRequest);
  app.use(helmet());
};

export { setupMiddlewares };
