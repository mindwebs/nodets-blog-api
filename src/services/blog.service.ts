import { BlogDto } from "../interfaces/blog.interface";
import Blog from "../models/blog.model";
import { Types } from "mongoose";

const AddBlog = async (blog: BlogDto) => {
    try {
        blog.path = blog.path.toLowerCase();
        //checking pre-existence
        const fetchedBlog = await Blog.findOne({ path: blog.path });
        if (fetchedBlog)
            return { code: 400, message: "Blog path should be unique" };

        //creating a new unverified blog
        const newBlog = new Blog({
            path: blog.path,
            title: blog.title,
            content: blog.content,
            author: blog.author,
            author_icon: blog.author_icon,
            img: blog.img,
            tag: blog.tag,
        });

        //saving new blog to db
        await newBlog.save();

        return { code: 201, message: "Success" };
    } catch (err) {
        return { code: 500, message: "Internal Server error" };
    }
};

const FetchAllBlogs = async (limit: number, offset: number) => {
    try {
        const blogs = await Blog.find()
            .limit(limit)
            .skip(limit * offset);
        return { code: 200, blogs, message: "Success" };
    } catch (err) {
        return { code: 500, blogs: [], message: "Internal Server error" };
    }
};

const FetchBlogById = async (_id: Types.ObjectId) => {
    try {
        const blog = await Blog.findOne({ _id });
        if (blog) return { code: 200, blog, message: "Success" };
        else return { code: 404, blog, message: "Blog Not Found" };
    } catch (err) {
        return { code: 500, blogs: {}, message: "Internal Server error" };
    }
};

const FetchBlogByPath = async (path: string) => {
    try {
        path = path.toLowerCase();
        const blog = await Blog.findOne({ path });
        if (blog) return { code: 200, blog, message: "Success" };
        else return { code: 404, blog, message: "Blog Not Found" };
    } catch (err) {
        return { code: 500, blogs: {}, message: "Internal Server error" };
    }
};

export { AddBlog, FetchAllBlogs, FetchBlogById, FetchBlogByPath };
