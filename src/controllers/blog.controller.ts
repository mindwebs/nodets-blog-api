import { Request, Response } from "express";
import * as BlogService from "../services/blog.service";
import ResponseCreator from "../utils/responseCreator";
import { BlogDto } from "../interfaces/blog.interface";
import { Types } from "mongoose";

const AddBlog = async (req: Request, res: Response) => {

    req.body.files = req.files;

    if (!req.body.files.img || !req.body.files.author_icon) {
        return ResponseCreator.generateResponse(res, 400, {}, "Some fields are missing");
    }

    const img: Express.Multer.File = req.body.files.img[0];
    const author_icon: Express.Multer.File = req.body.files.author_icon[0];

    const blog: BlogDto = {
        path: req.body.path,
        title: req.body.title,
        html: req.body.html,
        author: req.body.author,
        tag: req.body.tag,
        img: img.path,
        author_icon: author_icon.path,
    };

    if (!blog.path || !blog.title || !blog.html)
        return ResponseCreator.generateResponse(res, 400, {}, "Some fields are missing");

    const { code, message } = await BlogService.AddBlog(blog);
    return ResponseCreator.generateResponse(res, code, {}, message);
};

const FetchAllBlogs = async (req: Request, res: Response) => {
    const limit: number = Number(req.query["limit"] || 10);
    const offset: number = Number(req.query["offset"] || 0);
    const { code, blogs, message } = await BlogService.FetchAllBlogs(
        limit,
        offset
    );
    return ResponseCreator.generateResponse(res, code, blogs, message);
};

const FetchBlogById = async (req: Request, res: Response) => {
    let id: Types.ObjectId;
    try {
        id = new Types.ObjectId(req.params.id);
    } catch (err) {
        return ResponseCreator.generateResponse(res, 404, {}, "Blog Not Found");
    }
    const { code, blog, message } = await BlogService.FetchBlogById(id);
    return ResponseCreator.generateResponse(res, code, blog, message);
};

const FetchBlogByPath = async (req: Request, res: Response) => {
    const path: string = req.params.path;
    const { code, blog, message } = await BlogService.FetchBlogByPath(path);
    return ResponseCreator.generateResponse(res, code, blog, message);
};

export default {
    AddBlog,
    FetchAllBlogs,
    FetchBlogById,
    FetchBlogByPath,
};
