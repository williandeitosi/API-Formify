import type { FastifyInstance } from "fastify";
import { registerController } from "../controllers/auth.controller";

async function appRoutes(app: FastifyInstance) {
  app.post("/register", registerController);
}

export { appRoutes };
