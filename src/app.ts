import dotenv from "dotenv";
import fastify from "fastify";
import { appRoutes } from "./routes/auth.routes";

dotenv.config();

const app = fastify();

app.register(appRoutes, { prefix: "/api" });

export default app;
