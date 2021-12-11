"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const BlogSchema = new mongoose_1.Schema({
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
    }
}, {
    timestamps: true,
});
const Blog = (0, mongoose_1.model)("Blog", BlogSchema);
exports.default = Blog;
