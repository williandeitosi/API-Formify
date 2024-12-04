import { ZodError } from "zod";

export async function ErrorHandler(error: any, reply: any) {
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
}
