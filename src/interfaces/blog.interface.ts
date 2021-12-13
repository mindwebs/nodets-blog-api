import mongoose from "mongoose";

interface BlogInterface extends mongoose.Document {
    path: string;
    title: string;
    content: string;
    author?: string;
    author_icon?: string;
    img?: string;
    tag?: string;
}

interface BlogDto {
    path: string;
    title: string;
    content: string;
    author?: string | undefined;
    author_icon?: string | undefined;
    img?: string | undefined;
    tag?: string | undefined;
}

export { BlogInterface, BlogDto };
