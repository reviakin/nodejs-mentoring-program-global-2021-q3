import { Express, json } from "express";
import { logRequest } from ".";

const setupMiddlewares = (app: Express) => {
  app.use(json());
  app.use(logRequest);
};

export { setupMiddlewares };
