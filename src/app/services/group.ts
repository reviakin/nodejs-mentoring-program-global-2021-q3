import { IGroupRepository } from "../repositories";
import { IPreGroupDto } from "../dto";
import { IGroupService } from "./interfaces";

class GroupService implements IGroupService {
  #groupRepositories: IGroupRepository;
  constructor(repositories: IGroupRepository) {
    this.#groupRepositories = repositories;
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
}

export { GroupService };
