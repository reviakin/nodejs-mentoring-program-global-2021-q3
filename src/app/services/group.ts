import { IGroupRepository } from "../repositories";
import { IGroupDtoWithUsers, IPreGroupDto } from "../dto";
import { IGroupService } from "./interfaces";
import { IUserGroupRepository } from "../repositories/interfaces/userGroup";

class GroupService implements IGroupService {
  #groupRepositories: IGroupRepository;
  #userGroupRepository: IUserGroupRepository;
  constructor(
    groupRepository: IGroupRepository,
    userGroupRepository: IUserGroupRepository
  ) {
    this.#groupRepositories = groupRepository;
    this.#userGroupRepository = userGroupRepository;
  }

  createOne = (user: IPreGroupDto) => {
    return this.#groupRepositories.createOne(user);
  };

  getOneById = (id: string) => {
    return this.#groupRepositories.getOneById(id);
  };

  getMany = () => {
    return this.#groupRepositories.getMany();
  };

  updateOneById = (id: string, updates: Partial<IPreGroupDto>) => {
    return this.#groupRepositories.updateOneById(id, updates);
  };

  deleteOneById = (id: string) => {
    return this.#groupRepositories.deleteOneById(id);
  };

  addUsersToGroup = (groupId: string, userIds: string[]) => {
    return this.#userGroupRepository.addUsersToGroup(groupId, userIds);
  };
}

export { GroupService };
