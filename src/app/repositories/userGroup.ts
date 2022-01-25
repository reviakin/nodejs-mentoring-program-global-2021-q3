import { ModelCtor } from "sequelize/dist";
import { connection as dbConnections } from "../db";
import { IUserGroupInstance } from "../models/userGroup/interfaces";
import { UserGroupModel } from "../models";

class UserGroupRepository {
  private userGroupModel: ModelCtor<IUserGroupInstance>;
  constructor() {
    this.userGroupModel = UserGroupModel;
  }

  addUsersToGroup = async (groupId: string, usersIds: Array<string>) => {
    const transaction = await dbConnections.transaction();

    const createdGroups = await UserGroupModel.bulkCreate(
      usersIds.map((userId) => ({ userId, groupId })),
      {
        returning: true,
      }
    );
    await transaction.commit();
    return createdGroups;
  };
}

export { UserGroupRepository };
