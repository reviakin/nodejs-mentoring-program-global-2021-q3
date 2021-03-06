import { IPreUserDto } from "../dto/user";
import { Authorization } from "../errors";
import { IUserRepository } from "../repositories/interfaces";
import { IUserService } from "./interfaces";
import { tokenService } from "./token";

class UserService implements IUserService {
  private userRepositories: IUserRepository;
  private tokenService = tokenService;

  constructor(repositories: IUserRepository) {
    this.userRepositories = repositories;
  }
  login = async (username: string, password: string) => {
    const user = await this.userRepositories.getUserByLoginAndPassword(
      username,
      password
    );

    if (user) {
      const token = this.tokenService.makeToken({
        login: user.login,
        age: user.age,
        id: user.id,
      });

      return token;
    } else {
      throw new Authorization("invalid username or password");
    }
  };

  createOne = (user: IPreUserDto) => {
    return this.userRepositories.createOne(user);
  };

  getOneById = (id: string) => {
    return this.userRepositories.getOneById(id);
  };

  getSuggestions = (substring: string, limit: number) => {
    return this.userRepositories.getSuggestions(substring, limit);
  };

  updateOneById = (id: string, updates: Partial<IPreUserDto>) => {
    return this.userRepositories.updateOneById(id, updates);
  };
  deleteOneById = (id: string) => {
    return this.userRepositories.deleteOneById(id);
  };
}

export { UserService };
