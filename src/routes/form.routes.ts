import type { FastifyInstance } from "fastify";
import { create, deletePeople, listAll } from "../controllers/form.controller";

async function formRoutes(app: FastifyInstance) {
  app.post("/create", create);
  app.get("/list", listAll);
  // app.get("/list/:id", login);
  app.delete("/delete/:id", deletePeople);
  // app.put("/update/:id", login);
}

export { formRoutes };
