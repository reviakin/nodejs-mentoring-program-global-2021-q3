import { IUserInstance, IUser } from "../types";

const userMapper = (userInstance: IUserInstance): IUser => ({
  id: userInstance.id,
  login: userInstance.login,
  password: userInstance.password,
  isDeleted: userInstance.isDeleted,
  age: userInstance.age,
});

export { userMapper };
