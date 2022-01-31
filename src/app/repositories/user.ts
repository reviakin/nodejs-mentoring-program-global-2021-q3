import { ModelCtor, Op } from "sequelize";
import { IPreUserDto, IUserDto } from "../dto/user";
import { IUserMapper, IUserInstance } from "../models/user/interfaces";
import { IUserRepository } from "./interfaces";

class UserRepository implements IUserRepository {
  private userModel: ModelCtor<IUserInstance>;
  private userMapper: IUserMapper;
  constructor(model: ModelCtor<IUserInstance>, mapper: IUserMapper) {
    this.userModel = model;
    this.userMapper = mapper;
  }
  getUserByLoginAndPassword: (
    login: string,
    password: string
  ) => Promise<IUserDto | undefined> = (login, password) =>
    this.userModel
      .findOne({ where: { login, password } })
      .then((user) => (user ? this.userMapper(user) : undefined));

  getOneById = (id: string) =>
    this.userModel
      .findByPk(id)
      .then((user) => (user ? this.userMapper(user) : undefined));

  createOne = (user: IPreUserDto) =>
    this.userModel.create(user).then(this.userMapper);
  deleteOneById = (id: string) =>
    this.userModel.findByPk(id).then((user) => {
      if (user) {
        user.destroy();
        return this.userMapper(user);
      }
      return undefined;
    });

  updateOneById = (id: string, updates: Partial<IPreUserDto>) =>
    this.userModel.findByPk(id).then((user) => {
      if (user) {
        user.update(updates);
        return this.userMapper(user);
      }
      return undefined;
    });

  getSuggestions = (substring: string, limit: number) =>
    this.userModel
      .findAll({
        where: { login: { [Op.substring]: substring } },
        limit,
      })
      .then((users) => users.map(this.userMapper));
}

export { UserRepository };
