import { validate } from "../../../utils";
import { createUserSchema, updateUserSchema } from "./user.schema";
import { RequestHandler } from "express";

const updateUserValidation: RequestHandler = (req, res, next) => {
  const { error } = validate(req.body.data, updateUserSchema);
  if (!error) {
    return next();
  }

  return res.status(400).json({ data: error });
};

const createUserValidation: RequestHandler = (req, res, next) => {
  const { error } = validate(req.body.data, createUserSchema);
  if (!error) {
    return next();
  }

  return res.status(400).json({ data: error });
};

export { updateUserValidation, createUserValidation };
