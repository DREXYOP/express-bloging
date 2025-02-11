import { successResponse } from "@/utils/response";
import { NextFunction, Request, Response } from "express";

export default class baseController {
  public async handleRequest(
    req: Request,
    res: Response,
    next: NextFunction,
    action: () => Promise<any>
  ): Promise<void> {
    try {
      const result = await action();
      successResponse(res,result);
    } catch (error) {
      next(error);
    }
  }
}
