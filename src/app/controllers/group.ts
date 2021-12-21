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
      const group = await this.#groupService.getOneById(req.params.id);
      res.send(group);
    } catch (error) {
      next(error);
    }
  };

  createOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const group = await this.#groupService.createOne(req.body);
      return res.send(group);
    } catch (error) {
      next(error);
    }
  };
  updateOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const group = await this.#groupService.updateOneById(
        req.params.id,
        req.body
      );
      return res.send(group);
    } catch (error) {
      next(error);
    }
  };
  deleteOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const group = await this.#groupService.deleteOneById(req.params.id);
      return res.send(group);
    } catch (error) {
      next(error);
    }
  };
  getMany = async (_: Request, res: Response, next: NextFunction) => {
    try {
      const groups = await this.#groupService.getMany();
      res.send(groups);
    } catch (error) {
      next(error);
    }
  };
  addUsersToGroup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const group = await this.#groupService.addUsersToGroup(
        req.params.id,
        req.body.userIds
      );
      res.send(group);
    } catch (error) {
      next(error);
    }
  };
}

export { GroupController };
