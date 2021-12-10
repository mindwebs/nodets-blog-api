"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Packages
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_config_1 = require("../config/db.config");
const blog_routes_1 = __importDefault(require("./routes/blog.routes"));
// Environment variables
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT || 3000);
// Config for express app
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/api", blog_routes_1.default);
// Start the express server
app.listen(PORT, () => {
    console.log(`Server Started Listening at ${PORT}`);
    db_config_1.connect;
});
