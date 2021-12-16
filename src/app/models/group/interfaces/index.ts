import { Model, Optional } from "sequelize";
import { IGroupDto } from "../../../dto";

interface IGroupCreationModel extends Optional<IGroupDto, "id"> {}

interface IGroupInstance
  extends Model<IGroupDto, IGroupCreationModel>,
    IGroupDto {}

interface IGroupMapper {
  (instance: IGroupInstance): IGroupDto;
}

export { IGroupCreationModel, IGroupInstance, IGroupMapper };
