"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchBlogByPath = exports.FetchBlogById = exports.FetchAllBlogs = exports.AddBlog = void 0;
const blog_model_1 = __importDefault(require("../models/blog.model"));
const AddBlog = (blog) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        blog.path = (blog.path).toLowerCase();
        //checking pre-existence
        const fetchedBlog = yield blog_model_1.default.findOne({ path: blog.path });
        if (fetchedBlog)
            return { code: 400, message: "Blog path should be unique" };
        //creating a new unverified blog
        const newBlog = new blog_model_1.default({
            path: blog.path,
            title: blog.title,
            html: blog.html,
            author: blog.author,
            author_icon: blog.author_icon,
            img: blog.img,
            tag: blog.tag,
        });
        //saving new blog to db
        yield newBlog.save();
        return { code: 201, message: "Success" };
    }
    catch (err) {
        return { code: 500, message: "Internal Server error" };
    }
});
exports.AddBlog = AddBlog;
const FetchAllBlogs = (limit, offset) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blogs = yield blog_model_1.default.find()
            .limit(limit)
            .skip(limit * offset);
        return { code: 200, blogs, message: "Success" };
    }
    catch (err) {
        return { code: 500, blogs: [], message: "Internal Server error" };
    }
});
exports.FetchAllBlogs = FetchAllBlogs;
const FetchBlogById = (_id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const blog = yield blog_model_1.default.findOne({ _id });
        if (blog)
            return { code: 200, blog, message: "Success" };
        else
            return { code: 404, blog, message: "Blog Not Found" };
    }
    catch (err) {
        return { code: 500, blogs: {}, message: "Internal Server error" };
    }
});
exports.FetchBlogById = FetchBlogById;
const FetchBlogByPath = (path) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        path = path.toLowerCase();
        const blog = yield blog_model_1.default.findOne({ path });
        if (blog)
            return { code: 200, blog, message: "Success" };
        else
            return { code: 404, blog, message: "Blog Not Found" };
    }
    catch (err) {
        return { code: 500, blogs: {}, message: "Internal Server error" };
    }
});
exports.FetchBlogByPath = FetchBlogByPath;
