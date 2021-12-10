"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connect = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
exports.connect = mongoose_1.default.connect(String(process.env.MONGO_URI), {}, (err) => {
    if (err)
        console.log(err);
    else
        console.log("DB connection successful");
});
