import { Router } from "express";
import BlogController from "../controllers/blog.controller";

const BlogRouter: Router = Router();

BlogRouter.post("/", BlogController.AddBlog);

BlogRouter.get("/", BlogController.FetchAllBlogs);

BlogRouter.get("/id/:id", BlogController.FetchBlogById);

BlogRouter.get("/path/:path", BlogController.FetchBlogByPath);

export default BlogRouter;
