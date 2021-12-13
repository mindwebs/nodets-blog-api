import { Model, model, Schema } from "mongoose";
import { BlogInterface } from "../interfaces/blog.interface";

const BlogSchema: Schema<BlogInterface> = new Schema(
    {
        path: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        html: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: false,
        },
        tag: {
            type: String,
            required: false,
        },
        img: {
            type: String,
            required: false,
        },
        author_icon: {
            type: String,
            required: false,
        },
    },
    {
        timestamps: true,
    }
);

const Blog: Model<BlogInterface> = model("Blog", BlogSchema);

export default Blog;
