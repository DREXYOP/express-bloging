import { NextFunction, Request, Response } from "express";
import prisma from "@/globals";
import baseController from "./base.controller";


export default class BlogsController extends baseController {
  constructor() {
    super();
  }
  async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
    await this.handleRequest(req, res, next, async () => {
      return await prisma.blog.findMany();
    });
  }

  async getOne(req: Request, res: Response, next: NextFunction): Promise<void> {
    await this.handleRequest(req, res, next, async () => {
      return await prisma.blog.findUnique({
        where: {
          id: req.params.id,
        },
      });
    });
  }

  async getByUser(req: Request, res: Response, next: NextFunction): Promise<void> {
    await this.handleRequest(req, res, next, async () => {
      return await prisma.blog.findMany({
        where: {
          userId: req.params.userId,
        },
      });
    });
  }
  async editBlog(req: Request, res: Response, next: NextFunction): Promise<void> {
    await this.handleRequest(req, res, next, async () => {
      return await prisma.blog.update({
        where: {
          id: req.params.id,
        },
        data: req.body,
      });
    });
  }
}
