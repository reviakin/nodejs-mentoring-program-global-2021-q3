import { Router } from "express";
import {
  validateCreateUserBody,
  validateIdInParams,
  validateParamsForSuggestions,
  validateUpdateUserBody,
} from "../validators";
import { UserController } from "../controllers";
import { UserService } from "../services";
import { UserRepository } from "../repositories";
import { UserModel } from "../models";
import { userMapper } from "../mappers";

const userController = new UserController(
  new UserService(new UserRepository(UserModel, userMapper))
);

const BASE_ROUTE_PATH = "/users";

const userRouter = Router()
  // get a list
  .get("list", [validateParamsForSuggestions], userController.getSuggestions)
  // get a user
  .get("/:id", [validateIdInParams], userController.getOneById)
  // create a user
  .post("/", [validateCreateUserBody], userController.createOne)
  // update a user
  .put(
    "/:id",
    [validateIdInParams, validateUpdateUserBody],
    userController.updateOneById
  )
  // delete a user
  .delete("/:id", [validateIdInParams], userController.deleteOneById);

export { userRouter, BASE_ROUTE_PATH };
