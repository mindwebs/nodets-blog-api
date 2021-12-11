import { Router } from "express";
import multer from "multer";
import { storage } from "../../config/cloudinary.config";
import BlogController from "../controllers/blog.controller";

const upload = multer({ storage });


const BlogRouter: Router = Router();

BlogRouter.post("/", upload.fields([
    {
        name: 'img', maxCount: 1
    },
    {
        name: 'author_icon', maxCount: 1
    }
]), BlogController.AddBlog);

BlogRouter.get("/", BlogController.FetchAllBlogs);

BlogRouter.get("/id/:id", BlogController.FetchBlogById);

BlogRouter.get("/path/:path", BlogController.FetchBlogByPath);

export default BlogRouter;
