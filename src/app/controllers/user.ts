import { NextFunction } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { IPreUserDto, IUserDto } from "../dto/user";
import { IUserService } from "../services";
import { IRequest, IResponse, IUserController } from "./interfaces";

class UserController implements IUserController {
  #userService: IUserService;
  constructor(service: IUserService) {
    this.#userService = service;
  }

  getOneById = async (
    req: IRequest<unknown, IUserDto | undefined, ParamsDictionary>,
    res: IResponse<IUserDto | undefined>,
    next: NextFunction
  ) => {
    try {
      const user = await this.#userService.getOneById(req.params.id);
      res.send(user);
    } catch (error) {
      next(error);
    }
  };
  createOne = async (
    req: IRequest<IPreUserDto, IUserDto | undefined, ParamsDictionary>,
    res: IResponse<IUserDto | undefined>,
    next: NextFunction
  ) => {
    try {
      const user = await this.#userService.createOne(req.body);
      return res.send(user);
    } catch (error) {
      next(error);
    }
  };
  updateOneById = async (
    req: IRequest<Partial<IPreUserDto>, IUserDto | undefined, ParamsDictionary>,
    res: IResponse<IUserDto | undefined>,
    next: NextFunction
  ) => {
    try {
      const user = await this.#userService.updateOneById(
        req.params.id,
        req.body
      );
      return res.send(user);
    } catch (error) {
      next(error);
    }
  };
  deleteOneById = async (
    req: IRequest<unknown, IUserDto | undefined, ParamsDictionary>,
    res: IResponse<IUserDto | undefined>,
    next: NextFunction
  ) => {
    try {
      const user = await this.#userService.deleteOneById(req.params.id);
      return res.send(user);
    } catch (error) {
      next(error);
    }
  };
  getSuggestions = async (
    req: IRequest<unknown, Array<IUserDto>, ParamsDictionary>,
    res: IResponse<Array<IUserDto>>,
    next: NextFunction
  ) => {
    try {
      const users = await this.#userService.getSuggestions(
        req.params.login,
        Number(req.params.limit)
      );
      res.send(users);
    } catch (error) {
      next(error);
    }
  };
}

export { UserController };
