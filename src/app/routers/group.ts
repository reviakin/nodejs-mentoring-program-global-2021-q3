import { Router } from "express";
import {
  validateIdInParams,
  validateCreateGroupBody,
  validateUpdateGroupBody,
} from "../validators";
import { GroupController } from "../controllers";
import { GroupService } from "../services";
import { GroupRepository } from "../repositories";
import { GroupModel } from "../models";
import { groupMapper } from "../models/group";

const groupController = new GroupController(
  new GroupService(new GroupRepository(GroupModel, groupMapper))
);

const BASE_ROUTE_PATH = "/groups";

const groupRouter = Router()
  .get("/:id", validateIdInParams, groupController.getOneById)
  .get("/", groupController.getMany)
  .post(
    "/:id",
    validateIdInParams,
    validateCreateGroupBody,
    groupController.createOne
  )
  .put(
    "/:id",
    validateIdInParams,
    validateUpdateGroupBody,
    groupController.updateOneById
  )
  .delete("/:id", validateIdInParams, groupController.deleteOneById);

export { groupRouter, BASE_ROUTE_PATH as BASE_GROUP_ROUTE_PATH };
