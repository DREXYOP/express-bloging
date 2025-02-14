import { catchAsync } from "@/utils/functions";
import prisma from "@/globals";
import { Request, Response } from "express";
import { blog } from "@prisma/client";

export async function getAll(req: Request, res: Response): Promise<blog[]> {
  const blogs = await prisma.blog.findMany();
  return blogs;
}

export async function getOne(req: Request, res: Response): Promise<blog | null> {
  const blog = await prisma.blog.findUnique({
    where: {
      id: req.params.id,
    },
  });
  return blog;
}