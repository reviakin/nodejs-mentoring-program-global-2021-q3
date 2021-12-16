import { NextFunction, Request, Response } from "express";

interface IGroupController {
  createOne: (req: Request, res: Response, next: NextFunction) => void;
  getMany: (req: Request, res: Response, next: NextFunction) => void;
  getOneById: (req: Request, res: Response, next: NextFunction) => void;
  updateOneById: (req: Request, res: Response, next: NextFunction) => void;
  deleteOneById: (req: Request, res: Response, next: NextFunction) => void;
}

export { IGroupController };
