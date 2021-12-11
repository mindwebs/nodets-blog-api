"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const BlogService = __importStar(require("../services/blog.service"));
const responseCreator_1 = __importDefault(require("../utils/responseCreator"));
const mongoose_1 = require("mongoose");
const AddBlog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    req.body.files = req.files;
    if (!req.body.files.img || !req.body.files.author_icon) {
        return responseCreator_1.default.generateResponse(res, 400, {}, "Some fields are missing");
    }
    const img = req.body.files.img[0];
    const author_icon = req.body.files.author_icon[0];
    const blog = {
        path: req.body.path,
        title: req.body.title,
        html: req.body.html,
        author: req.body.author,
        tag: req.body.tag,
        img: img.path,
        author_icon: author_icon.path,
    };
    if (!blog.path || !blog.title || !blog.html)
        return responseCreator_1.default.generateResponse(res, 400, {}, "Some fields are missing");
    const { code, message } = yield BlogService.AddBlog(blog);
    return responseCreator_1.default.generateResponse(res, code, {}, message);
});
const FetchAllBlogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const limit = Number(req.query["limit"] || 10);
    const offset = Number(req.query["offset"] || 0);
    const { code, blogs, message } = yield BlogService.FetchAllBlogs(limit, offset);
    return responseCreator_1.default.generateResponse(res, code, blogs, message);
});
const FetchBlogById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let id;
    try {
        id = new mongoose_1.Types.ObjectId(req.params.id);
    }
    catch (err) {
        return responseCreator_1.default.generateResponse(res, 404, {}, "Blog Not Found");
    }
    const { code, blog, message } = yield BlogService.FetchBlogById(id);
    return responseCreator_1.default.generateResponse(res, code, blog, message);
});
const FetchBlogByPath = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const path = req.params.path;
    const { code, blog, message } = yield BlogService.FetchBlogByPath(path);
    return responseCreator_1.default.generateResponse(res, code, blog, message);
});
exports.default = {
    AddBlog,
    FetchAllBlogs,
    FetchBlogById,
    FetchBlogByPath,
};
