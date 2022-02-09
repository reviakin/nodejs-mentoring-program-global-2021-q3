import { RequestHandler } from "express";
import * as Joi from "joi";
import { validate } from "../../utils";

const permissions = {
  READ: "READ",
  WRITE: "WRITE",
  DELETE: "DELETE",
  SHARE: "SHARE",
  UPLOAD_FILES: "UPLOAD_FILES",
};

const groupPermissionsSchema = Joi.array()
  .required()
  .items(
    ...Object.values(permissions).map((permissionValue) =>
      Joi.string().label(permissionValue)
    )
  );

const createGroupSchema = Joi.object().keys({
  name: Joi.string().required(),
  permissions: groupPermissionsSchema,
});

const updateGroupSchema = Joi.object().keys({
  login: Joi.string().required(),
  permissions: groupPermissionsSchema,
});

const addUsersToGroupSchema = Joi.object().keys({
  userIds: Joi.array().required(),
});

const validateUpdateGroupBody: RequestHandler = (req, res, next) => {
  const { error } = validate(req.body, updateGroupSchema);

  if (!error) {
    return next();
  }

  return res.status(400).json(error);
};

const validateCreateGroupBody: RequestHandler = (req, res, next) => {
  const { error } = validate(req.body, createGroupSchema);
  if (!error) {
    return next();
  }

  return res.status(400).json({ data: error });
};

const validateAddUsersToGroup: RequestHandler = (req, res, next) => {
  const { error } = validate(req.body, addUsersToGroupSchema);
  if (!error) {
    return next();
  }

  return res.status(400).json({ data: error });
};

export {
  validateCreateGroupBody,
  validateUpdateGroupBody,
  validateAddUsersToGroup,
  permissions,
};
