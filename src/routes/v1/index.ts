import { Router } from "express";
import blogsRouter from "./blogs.routes";
import authRouter from "./auth.routes";

const v1Router = Router();

v1Router.use("/blogs", blogsRouter);
v1Router.use("/auth", authRouter);

export default v1Router;