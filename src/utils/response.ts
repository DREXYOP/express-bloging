import { Response } from "express";

export async function successResponse(
  res: Response,
  data: any = null,
  status = 200
): Promise<void> {
  res.status(status).json({
    success: true,
    data,
  });
}

export async function errorResponse(
  res: Response,
  message: string,
  status = 500
): Promise<void> {
  res.status(status).json({
    success: false,
    message,
  });
}
