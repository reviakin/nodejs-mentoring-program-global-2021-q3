import { DataTypes } from "sequelize/dist";
import { GroupModel } from "..";
import { UserModel } from "..";
import { connection as dbConnection } from "../../db";

const UserGroupModel = dbConnection.define("UserGroup", {
  userId: {
    type: DataTypes.UUID,
    references: {
      model: UserModel,
      key: "id",
    },
    onDelete: "CASCADE",
    allowNull: false,
  },
  groupId: {
    type: DataTypes.UUID,
    references: {
      model: GroupModel,
      key: "id",
    },
    onDelete: "CASCADE",
    allowNull: false,
  },
});

GroupModel.belongsToMany(UserModel, { through: UserGroupModel });
UserModel.belongsToMany(GroupModel, { through: UserGroupModel });

export { UserGroupModel };
