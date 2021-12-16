import * as Joi from "joi";
import { RequestHandler } from "express";
import { validate } from "../../utils";

const validateIdInParams: RequestHandler = (req, res, next) => {
  const { error } = validate(req.params.id, Joi.string().required());
  if (!error) {
    return next();
  }
  return res.status(400).json(error);
};

export { validateIdInParams };
