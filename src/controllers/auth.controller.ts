import { FastifyReply, FastifyRequest } from "fastify";
import { ErrorHandler } from "../helpers/ErrorHandler";
import { userSchema } from "../schemas/auth.schema";
import { UserService } from "../services/auth.service";
import { PrismaUsersRepository } from "./../repositories/prisma/prisma-user-repository";

export async function register(request: FastifyRequest, reply: FastifyReply) {
  try {
    const prismaUsersRepository = new PrismaUsersRepository();
    const usersRepository = new UserService(prismaUsersRepository);

    const { email, password } = userSchema.parse(request.body);

    const result = await usersRepository.register({ email, password });

    return reply
      .code(201)
      .send({ message: "User create successfully!", result });
  } catch (error) {
    ErrorHandler(error, reply);

    return reply
      .code(500)
      .send({ message: "Erro interno do servidor", error: error });
  }
}

export async function login(request: FastifyRequest, reply: FastifyReply) {
  try {
    const prismaUsersRepository = new PrismaUsersRepository();
    const usersRepository = new UserService(prismaUsersRepository);

    const { email, password } = userSchema.parse(request.body);

    const result = await usersRepository.loginUser({ email, password });
    return reply
      .code(201)
      .send({ message: "Login successfully!", data: result });
  } catch (error) {
    ErrorHandler(error, reply);

    return reply
      .code(500)
      .send({ message: "Erro interno do servidor", error: error });
  }
}
