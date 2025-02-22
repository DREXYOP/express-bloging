import { Router } from "express";

import AuthController from "@/controllers/auth.controller";
import { validateRequest } from "@/middlewares/validation.middleware";
import { loginSchema, signupSchema } from "@/validators/auth.schemas";


const authRouter = Router();
const authController = new AuthController();

authRouter.post("/signup", validateRequest(signupSchema), authController.singup);
authRouter.post("/login", validateRequest(loginSchema), authController.login);

export default authRouter;