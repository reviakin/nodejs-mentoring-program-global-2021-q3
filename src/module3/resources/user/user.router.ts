import { Router } from "express";
import { UserRequestHandlers } from "./user.requestHandlers";
import {
  createUserValidation,
  updateUserValidation,
} from "./user.validationMiddleware";

const userRouter = Router();

userRouter.get("/list", UserRequestHandlers.getAutoSuggestUsers);
userRouter.get("/:id", UserRequestHandlers.getUser);
userRouter.post("/", createUserValidation, UserRequestHandlers.createUser);
userRouter.put("/", updateUserValidation, UserRequestHandlers.updateUser);
userRouter.delete("/:id", UserRequestHandlers.removeUser);

export { userRouter };
