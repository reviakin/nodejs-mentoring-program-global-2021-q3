import { PreUserDto, UserDto } from "../../dto";

interface IUserRepository {
  getOneById: (id: string) => Promise<UserDto | undefined>;
  createOne: (user: PreUserDto) => Promise<UserDto>;
  deleteOneById: (id: string) => Promise<UserDto | undefined>;
  updateOneById: (
    id: string,
    updates: PreUserDto
  ) => Promise<UserDto | undefined>;
  getSuggestions: (login: string, limit: number) => Promise<Array<UserDto>>;
}

export { IUserRepository };
