import BlogsController from "@/controllers/blogs.controller";
import { checkAuth } from "@/middlewares/auth.middleware";
import { Router } from "express"

const router = Router();

const controller = new BlogsController()

router.get('/', controller.getAll);
router.get('/:id', controller.getOne);
router.get('/user/:userId', controller.getByUser);  
router.put('/:id', checkAuth, controller.editBlog);



export default router;