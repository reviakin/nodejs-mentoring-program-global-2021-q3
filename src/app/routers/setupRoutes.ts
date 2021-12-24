import {
  BASE_GROUP_ROUTE_PATH,
  BASE_USER_ROUTE_PATH,
  groupRouter,
  userRouter,
} from ".";
import { Express } from "express";

const setupRoutes = (app: Express) => {
  app.use(BASE_USER_ROUTE_PATH, userRouter);
  app.use(BASE_GROUP_ROUTE_PATH, groupRouter);
};

export { setupRoutes };
