import { IUserDto } from "../dto";
import { IUserInstance } from "../models/user/interfaces";

const userMapper = (userInstance: IUserInstance): IUserDto => ({
  id: userInstance.id,
  login: userInstance.login,
  password: userInstance.password,
  isDeleted: userInstance.isDeleted,
  age: userInstance.age,
});

export { userMapper };
