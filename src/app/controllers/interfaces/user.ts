import { IPreUserDto, IUserDto } from "../../dto/user";
import { IErrorResponse } from "../../errors/interfaces";
import { IRequest } from "./request";
import { ParamsDictionary } from "express-serve-static-core";

interface IUserController {
  createOne: IRequest<ParamsDictionary, IUserDto | IErrorResponse, IPreUserDto>;
  updateOneById: IRequest<
    ParamsDictionary,
    IUserDto | undefined,
    Partial<IPreUserDto>
  >;
  deleteOneById: IRequest<ParamsDictionary, IUserDto | undefined, IPreUserDto>;
  getOneById: IRequest<unknown, IUserDto | undefined, ParamsDictionary>;
  getSuggestions: IRequest<ParamsDictionary, Array<IUserDto>, IPreUserDto>;
}

export { IUserController };
