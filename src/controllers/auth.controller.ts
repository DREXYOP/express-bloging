import baseControlle from "./base.controller";
import { NextFunction, Request, Response } from "express";
import { signup, login } from "@/services/auth.service";

export default class AuthController extends baseControlle {
  constructor() {
    super();
  }
  async singup(req: Request, res: Response, next: NextFunction): Promise<void> {
    await this.handleRequest(req, res, next, async () => {
      const { name, email, password } = req.body;
      return await signup(name, email, password);
    });
  }

  async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    await this.handleRequest(req, res, next, async () => {
      const { name, email, password } = req.body;
      return await login(name, email, password);
    });
  }
}
