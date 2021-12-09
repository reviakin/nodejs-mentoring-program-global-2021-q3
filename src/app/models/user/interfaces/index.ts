import { Model, Optional } from "sequelize";
import { IUserDto } from "../../../dto/user";

interface IUserCreationModel extends Optional<IUserDto, "id" | "isDeleted"> {}

interface IUserInstance extends Model<IUserDto, IUserCreationModel>, IUserDto {}

interface IUserMapper {
  (instance: IUserInstance): IUserDto;
}

export { IUserMapper, IUserInstance, IUserCreationModel };
