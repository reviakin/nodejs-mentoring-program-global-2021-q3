import { NextFunction, Request, Response } from "express";
import { IGroupService } from "../services";
import { IGroupController } from "./interfaces";

class GroupController implements IGroupController {
  #groupService: IGroupService;

  constructor(service: IGroupService) {
    this.#groupService = service;
  }

  getOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.#groupService.getOneById(req.params.id);
      res.send(user);
    } catch (error) {
      next(error);
    }
  };

  createOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.#groupService.createOne(req.body);
      return res.send(user);
    } catch (error) {
      next(error);
    }
  };
  updateOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.#groupService.updateOneById(
        req.params.id,
        req.body
      );
      return res.send(user);
    } catch (error) {
      next(error);
    }
  };
  deleteOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = await this.#groupService.deleteOneById(req.params.id);
      return res.send(user);
    } catch (error) {
      next(error);
    }
  };
  getMany = async (_: Request, res: Response, next: NextFunction) => {
    try {
      const users = await this.#groupService.getMany();
      res.send(users);
    } catch (error) {
      next(error);
    }
  };
}

export { GroupController };
