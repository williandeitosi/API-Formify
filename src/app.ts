import express, { Application } from "express";
import dotenv from "dotenv";
import router from "./routes/auth.routes";

dotenv.config();

const app: Application = express();

app.use(express.json());

app.use("/api", router);

export default app;
