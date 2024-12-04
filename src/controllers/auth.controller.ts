import { FastifyReply, FastifyRequest } from "fastify";
import { ZodError } from "zod";
import { userSchema } from "../schemas/auth.schema";
import { registerService } from "../services/auth.service";

export async function registerController(
  request: FastifyRequest,
  reply: FastifyReply
) {
  try {
    const { email, password } = userSchema.parse(request.body);

    const result = await registerService({ email, password });

    return reply.send(result);
  } catch (error) {
    if (error instanceof ZodError) {
      return reply.code(400).send({
        message: "Erro de validação",
        errors: error.errors.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        })),
      });
    }

    if (error instanceof Error) {
      return reply.code(400).send({
        message: error.message,
      });
    }

    return reply.code(500).send({ message: "Erro interno do servidor" });
  }
}
