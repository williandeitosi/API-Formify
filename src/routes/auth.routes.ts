import type { FastifyInstance } from "fastify";
import { register } from "../controllers/auth.controller";

async function appRoutes(app: FastifyInstance) {
  app.post("/register", register);
}

export { appRoutes };
