interface IUserDto {
  id: string;
  login: string;
  password: string;
  age: number;
  isDeleted: boolean;
}

type IPreUserDto = Omit<IUserDto, "id">;

export { IPreUserDto, IUserDto };
