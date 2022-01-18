import { IPreUserDto, IUserDto } from "../../dto";

interface IUserService {
  getOneById: (id: string) => Promise<IUserDto | undefined>;
  createOne: (user: IPreUserDto) => Promise<IUserDto>;
  deleteOneById: (id: string) => Promise<IUserDto | undefined>;
  updateOneById: (
    id: string,
    updates: Partial<IPreUserDto>
  ) => Promise<IUserDto | undefined>;
  getSuggestions: (login: string, limit: number) => Promise<Array<IUserDto>>;
  login: (username: string, password: string) => Promise<string>;
}

export { IUserService };
