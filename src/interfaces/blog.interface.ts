import mongoose from "mongoose";

interface BlogInterface extends mongoose.Document {
    path: string;
    title: string;
    content: string;
    author?: string | undefined;
}

interface BlogDto {
    path: string;
    title: string;
    content: string;
    author?: string | undefined;
}

export { BlogInterface, BlogDto };
