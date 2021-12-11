"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const cloudinary_config_1 = require("../../config/cloudinary.config");
const blog_controller_1 = __importDefault(require("../controllers/blog.controller"));
const upload = (0, multer_1.default)({ storage: cloudinary_config_1.storage });
const BlogRouter = (0, express_1.Router)();
BlogRouter.post("/", upload.fields([
    {
        name: 'img', maxCount: 1
    },
    {
        name: 'author_icon', maxCount: 1
    }
]), blog_controller_1.default.AddBlog);
BlogRouter.get("/", blog_controller_1.default.FetchAllBlogs);
BlogRouter.get("/id/:id", blog_controller_1.default.FetchBlogById);
BlogRouter.get("/path/:path", blog_controller_1.default.FetchBlogByPath);
exports.default = BlogRouter;
