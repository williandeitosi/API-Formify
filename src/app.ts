import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import { appRoutes } from "./routes/auth.routes";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(appRoutes, { prefix: "/api" });

export default app;
