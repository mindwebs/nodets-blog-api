// Packages
import dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import cors from "cors";
import { connect } from "../config/db.config";
import BlogRouter from "./routes/blog.routes";

// Environment variables
const app: Application = express();
const PORT: Number = Number(process.env.PORT || 3000);

// Config for express app
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", BlogRouter);

// Start the express server
app.listen(PORT, () => {
    console.log(`Server Started Listening at ${PORT}`);
    connect;
});
