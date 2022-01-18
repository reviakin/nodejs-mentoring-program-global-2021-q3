import { NextFunction, Request } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { IPreUserDto, IUserDto } from "../dto/user";
import { IUserService } from "../services";
import { IRequest, IResponse } from "./interfaces";
import { createLogger } from "../../utils";
import { Logger } from "winston";
import { logError } from "../../utils";

class UserController {
  #userService: IUserService;
  #logger: Logger;
  #logError: (method: string, request: Request, error: unknown) => void;

  constructor(service: IUserService) {
    this.#userService = service;
    this.#logger = createLogger("USER CONTROLLER");
    this.#logError = (method: string, request: Request, error: unknown) =>
      logError(this.#logger, method, request, error);
  }

  login = async (
    req: IRequest<{ username: string; password: string }>,
    res: IResponse,
    next: NextFunction
  ) => {
    try {
      const token = await this.#userService.login(
        req.body.username,
        req.body.password
      );

      res.send(token);
    } catch (error) {
      this.#logError(this.login.name, req, error);
      next(error);
    }
  };

  getOneById = async (
    req: IRequest<unknown, IUserDto | undefined, ParamsDictionary>,
    res: IResponse<IUserDto | undefined>,
    next: NextFunction
  ) => {
    try {
      const user = await this.#userService.getOneById(req.params.id);
      res.send(user);
    } catch (error) {
      this.#logError(this.getOneById.name, req, error);
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
      this.#logError(this.createOne.name, req, error);
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
      this.#logError(this.updateOneById.name, req, error);
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
      this.#logError(this.deleteOneById.name, req, error);
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
      this.#logError(this.getSuggestions.name, req, error);
      next(error);
    }
  };
}

export { UserController };
