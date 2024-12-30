import type { FastifyReply, FastifyRequest } from "fastify";
import { ErrorHandler } from "../helpers/ErrorHandler";
import { PrismaFormRepository } from "../repositories/prisma/prisma-person-repository";
import { formSchema } from "../schemas/form.schema";
import { FormService } from "../services/form.service";

interface Params {
  id: number;
}

const formRepository = new PrismaFormRepository();
const formService = new FormService(formRepository);

export async function create(request: FastifyRequest, reply: FastifyReply) {
  try {
    const data = formSchema.parse(request.body);

    const result = await formService.createPerson(data);

    return reply
      .code(201)
      .send({ message: "Person create successfully!", result });
  } catch (error) {
    ErrorHandler(error, reply);
    return reply
      .code(500)
      .send({ message: "Erro interno do servidor", error: error });
  }
}

export async function listAll(request: FastifyRequest, reply: FastifyReply) {
  try {
    const result = await formService.listPeople();

    return reply.code(200).send(result);
  } catch (error) {
    ErrorHandler(error, reply);
    return reply
      .code(500)
      .send({ message: "Erro interno do servidor", error: error });
  }
}

export async function deletePeople(
  request: FastifyRequest<{ Params: Params }>,
  reply: FastifyReply
) {
  try {
    const id = Number(request.params.id);

    await formService.deletePerson(id);

    return reply.code(200).send({ message: "Person deleted successfully!" });
  } catch (error) {
    ErrorHandler(error, reply);
    return reply
      .code(500)
      .send({ message: "Erro interno do servidor", error: error });
  }
}
