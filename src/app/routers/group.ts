import { Router } from "express";
import {
  validateIdInParams,
  validateCreateGroupBody,
  validateUpdateGroupBody,
} from "../validators";
import { GroupController } from "../controllers";
import { GroupService } from "../services";
import { GroupRepository, UserGroupRepository } from "../repositories";
import { GroupModel, groupMapper } from "../models";
import { validateAddUsersToGroup } from "../validators/group";

const groupController = new GroupController(
  new GroupService(
    new GroupRepository(GroupModel, groupMapper),
    new UserGroupRepository()
  )
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
  .delete("/:id", validateIdInParams, groupController.deleteOneById)
  .post(
    "/add_users/:id",
    validateIdInParams,
    validateAddUsersToGroup,
    groupController.addUsersToGroup
  );

export { groupRouter, BASE_ROUTE_PATH as BASE_GROUP_ROUTE_PATH };
