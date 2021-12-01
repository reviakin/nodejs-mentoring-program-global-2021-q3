import { DataTypes, UUIDV4 } from "sequelize";
import { connection as dbConnection } from "../../db";
import { IUserInstance } from "./interfaces";

const UserModel = dbConnection.define<IUserInstance>("User", {
  id: {
    type: DataTypes.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: UUIDV4,
    unique: true,
  },
  login: { type: DataTypes.STRING, allowNull: false, unique: true },
  password: { type: DataTypes.STRING, allowNull: false },
  age: { type: DataTypes.NUMBER, allowNull: false },
  isDeleted: { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false },
});

export { UserModel };
