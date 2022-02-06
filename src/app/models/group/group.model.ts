import { DataTypes, UUIDV4 } from "sequelize";
import { connection as dbConnection } from "../../db";
import { IGroupInstance } from "./interfaces";

const GroupModel = dbConnection.define<IGroupInstance>("Group", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: UUIDV4,
    unique: true,
  },
  name: { type: DataTypes.STRING, allowNull: false, unique: true },
  permissions: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    allowNull: false,
    defaultValue: [],
  },
});

export { GroupModel };
