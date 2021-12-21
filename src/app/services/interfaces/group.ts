import { IGroupDto, IGroupDtoWithUsers, IPreGroupDto } from "../../dto";

interface IGroupService {
  getOneById: (id: string) => Promise<IGroupDto | undefined>;
  createOne: (user: IPreGroupDto) => Promise<IGroupDto>;
  deleteOneById: (id: string) => Promise<IGroupDto | undefined>;
  updateOneById: (
    id: string,
    updates: Partial<IPreGroupDto>
  ) => Promise<IGroupDto | undefined>;
  getMany: () => Promise<Array<IGroupDto>>;
  addUsersToGroup: (
    groupId: string,
    userIds: Array<string>
  ) => Promise<IGroupDtoWithUsers | undefined>;
}

export { IGroupService };
