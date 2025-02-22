import { verifyToken } from "@/tools/auth.tools";
import { Request, Response, NextFunction } from "express";


export const checkAuth = (req: Request, res: Response, next: NextFunction)=>{
  // Check if user is authenticated
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    res.status(401).json({
      status: "fail",
      message: "You are not authenticated. Please login to get access."
    });
    return;
  }
  // Check if token is valid
  const valid = verifyToken(token);
  if (!valid) {
    res.status(403).json({
      status: "fail",
      message: "Invalid token. Please login to get access."
    });
    return;
  }
  next();
};