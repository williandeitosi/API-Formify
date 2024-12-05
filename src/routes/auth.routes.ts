import type { FastifyInstance } from "fastify";
import { login, register } from "../controllers/auth.controller";

async function appRoutes(app: FastifyInstance) {
  app.post("/register", register);
  app.post("/login", login);
}

export { appRoutes };
