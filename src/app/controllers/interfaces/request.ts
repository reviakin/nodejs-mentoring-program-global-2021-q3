import { Request as ExpressRequest } from "express";
import { ParamsDictionary } from "express-serve-static-core";

type IRequest<
  RequestBody = unknown,
  ResponseBody = unknown,
  Params = ParamsDictionary
> = ExpressRequest<Params, ResponseBody, RequestBody>;

export { IRequest };
