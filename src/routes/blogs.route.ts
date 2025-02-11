import BlogsController from "@/controllers/blogs.controller";
import { Router } from "express"

const router = Router();

const controller = new BlogsController()

router.get('/', controller.getAll);
router.get('/:id', );


export default router;