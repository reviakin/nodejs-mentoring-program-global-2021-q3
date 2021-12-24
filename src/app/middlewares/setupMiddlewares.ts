import { Express, json } from "express";

const setupMiddlewares = (app: Express) => {
  app.use(json());
};

export { setupMiddlewares };
