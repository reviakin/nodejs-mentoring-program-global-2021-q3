interface IUserGroupRepository {
  addUsersToGroup: (groupId: string, userIds: Array<string>) => Promise<any>;
}

export { IUserGroupRepository };
