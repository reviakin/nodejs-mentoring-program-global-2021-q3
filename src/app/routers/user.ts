import { Router } from "express";
import {
  validateCreateUserBody,
  validateIdInParams,
  validateLoginUserParams,
  validateParamsForSuggestions,
  validateUpdateUserBody,
} from "../validators";
import { UserController } from "../controllers";
import { UserService } from "../services";
import { UserRepository } from "../repositories";
import { UserModel } from "../models";
import { userMapper } from "../mappers";
import { checkToken } from "../middlewares";

const userController = new UserController(
  new UserService(new UserRepository(UserModel, userMapper))
);

const BASE_ROUTE_PATH = "/users";

const userRouter = Router()
  // get a list
  .get(
    "list",
    checkToken,
    validateParamsForSuggestions,
    userController.getSuggestions
  )
  // get a user
  .get("/:id", checkToken, validateIdInParams, userController.getOneById)
  // create a user
  .post("/", checkToken, validateCreateUserBody, userController.createOne)
  // update a user
  .put(
    "/:id",
    checkToken,
    validateIdInParams,
    validateUpdateUserBody,
    userController.updateOneById
  )
  // delete a user
  .delete("/:id", checkToken, validateIdInParams, userController.deleteOneById)
  .post("/login", validateLoginUserParams, userController.login);

export { userRouter, BASE_ROUTE_PATH as BASE_USER_ROUTE_PATH };
