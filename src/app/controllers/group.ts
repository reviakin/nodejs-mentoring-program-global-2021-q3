import { NextFunction, Request, Response } from "express";
import { Logger } from "winston";
import { createLogger, logError } from "../../utils";
import { IGroupService } from "../services";
import { IGroupController } from "./interfaces";

class GroupController implements IGroupController {
  private groupService: IGroupService;
  private logger: Logger;
  private logError: (method: string, request: Request, error: unknown) => void;

  constructor(service: IGroupService) {
    this.groupService = service;
    this.logger = createLogger("GROUP CONTROLLER");
    this.logError = (method: string, request: Request, error: unknown) =>
      logError(this.logger, method, request, error);
  }

  getOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const group = await this.groupService.getOneById(req.params.id);
      res.send(group);
    } catch (error) {
      this.logError(this.getOneById.name, req, error);
      next(error);
    }
  };

  createOne = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const group = await this.groupService.createOne(req.body);
      return res.send(group).status(201);
    } catch (error) {
      this.logError(this.createOne.name, req, error);
      next(error);
    }
  };
  updateOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const group = await this.groupService.updateOneById(
        req.params.id,
        req.body
      );
      return res.send(group);
    } catch (error) {
      this.logError(this.updateOneById.name, req, error);
      next(error);
    }
  };
  deleteOneById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const group = await this.groupService.deleteOneById(req.params.id);
      return res.send(group);
    } catch (error) {
      this.logError(this.deleteOneById.name, req, error);
      next(error);
    }
  };
  getMany = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const groups = await this.groupService.getMany();
      res.send(groups);
    } catch (error) {
      this.logError(this.getMany.name, req, error);
      next(error);
    }
  };
  addUsersToGroup = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const group = await this.groupService.addUsersToGroup(
        req.params.id,
        req.body.userIds
      );
      res.send(group);
    } catch (error) {
      this.logError(this.addUsersToGroup.name, req, error);
      next(error);
    }
  };
}

export { GroupController };
