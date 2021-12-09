import { IUserMapper } from "./interfaces";

const userMapper: IUserMapper = (userInstance) => ({
  id: userInstance.id,
  login: userInstance.login,
  password: userInstance.password,
  isDeleted: userInstance.isDeleted,
  age: userInstance.age,
});

export { userMapper };
