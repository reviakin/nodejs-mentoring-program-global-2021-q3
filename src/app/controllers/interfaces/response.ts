import { Response as ExpressResponse } from "express";

type IResponse<ResponseBody = unknown> = ExpressResponse<ResponseBody>;

export { IResponse };
