import fastifyCors from "@fastify/cors";
import fastify from "fastify";
import { appRoutes } from "./routes/auth.routes";
import { formRoutes } from "./routes/form.routes";

const app = fastify();

app.register(fastifyCors, {
  origin: "*",
});

app.register(appRoutes, { prefix: "/api" });
app.register(formRoutes, { prefix: "/api" });

export default app;
