import { Router } from "express";
import { requestHandlers } from "./user.controllers";

const {
  getUserRequestHandler,
  createUserRequestHandler,
  updateUserRequestHandler,
  removeUserRequestHandler,
  getAutoSuggestUserRequestHandler,
} = requestHandlers;
const userRouter = Router();

userRouter.get("/:id", getUserRequestHandler);

userRouter.post("/", createUserRequestHandler);
userRouter.put("/", updateUserRequestHandler);
userRouter.delete("/:id", removeUserRequestHandler);
userRouter.get("/:id", getAutoSuggestUserRequestHandler);
