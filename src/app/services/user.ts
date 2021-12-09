import { IPreUserDto } from "../dto/user";
import { IUserRepository } from "../repositories/interfaces";
import { IUserService } from "./interfaces";

class UserService implements IUserService {
  #userRepositories: IUserRepository;
  constructor(repositories: IUserRepository) {
    this.#userRepositories = repositories;
  }

  createOne = (user: IPreUserDto) => {
    return this.#userRepositories.createOne(user);
  };

  getOneById = (id: string) => {
    return this.#userRepositories.getOneById(id);
  };

  getSuggestions = (substring: string, limit: number) => {
    return this.#userRepositories.getSuggestions(substring, limit);
  };

  updateOneById = (id: string, updates: Partial<IPreUserDto>) => {
    return this.#userRepositories.updateOneById(id, updates);
  };
  deleteOneById = (id: string) => {
    return this.#userRepositories.deleteOneById(id);
  };
}

export { UserService };
