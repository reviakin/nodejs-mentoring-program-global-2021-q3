import * as Joi from "joi";

type UserType = {
  id: string;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
};

interface IUsers {
  [id: string]: UserType;
}

const createUserSchema = Joi.object().keys({
  id: Joi.string().optional(),
  login: Joi.string().required(),
  password: Joi.string().alphanum().required(),
  age: Joi.number().min(4).max(130).required(),
  isDeleted: Joi.boolean().optional(),
});

const updateUserSchema = Joi.object().keys({
  user: {
    id: Joi.string().optional(),
    login: Joi.string().required(),
    password: Joi.string().alphanum().required(),
    age: Joi.number().min(4).max(130).required(),
    isDeleted: Joi.boolean().optional(),
  },
  id: Joi.string().required(),
});

export { UserType, IUsers, createUserSchema, updateUserSchema };
