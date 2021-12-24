import * as Joi from "joi";
import { RequestHandler } from "express";
import passwordComplexity from "joi-password-complexity";

import { validate } from "../../utils";

const passwordConfig = {
  min: 2,
  max: 20,
  numeric: 1,
  lowerCase: 1,
};

const createUserSchema = Joi.object().keys({
  login: Joi.string().required(),
  password: passwordComplexity(passwordConfig).required(),
  age: Joi.number().min(4).max(130).required(),
});

const updateUserSchema = Joi.object().keys({
  login: Joi.string(),
  password: passwordComplexity(passwordConfig),
  age: Joi.number().min(4).max(130),
});

const getSuggestionsSchema = Joi.object().keys({
  limit: Joi.number().min(1).required(),
  login: Joi.string().required(),
});

const validateParamsForSuggestions: RequestHandler = (req, res, next) => {
  const { error } = validate(
    {
      limit: Number(req.params.limit),
      login: req.params.login,
    },
    getSuggestionsSchema
  );
  if (!error) {
    return next();
  }
  return res.status(400).json(error);
};

const validateUpdateUserBody: RequestHandler = (req, res, next) => {
  const { error } = validate(req.body, updateUserSchema);

  if (!error) {
    return next();
  }

  return res.status(400).json(error);
};

const validateCreateUserBody: RequestHandler = (req, res, next) => {
  const { error } = validate(req.body, createUserSchema);
  if (!error) {
    return next();
  }

  return res.status(400).json({ data: error });
};

export {
  validateCreateUserBody,
  validateUpdateUserBody,
  validateParamsForSuggestions,
  validateIdInParams,
};
