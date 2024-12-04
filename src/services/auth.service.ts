import { hash } from "bcrypt";
import { PrismaUsersRepository } from "../repositories/prisma/prisma-user-repository";
import type { UsersRepository } from "../repositories/users-repository";
import type { userInput } from "../schemas/auth.schema";

export class UserService {
  constructor(private usersRepository: UsersRepository) {}

  async register({ email, password }: userInput) {
    const prismaUsersRepository = new PrismaUsersRepository();
    const isExists = await prismaUsersRepository.findByEmail(email);
    if (isExists) {
      throw new Error("User is exists!");
    }
    const hashPassword = await hash(password, 10);

    const newUser = await prismaUsersRepository.create({
      email,
      password: hashPassword,
    });

    return { ...newUser, password: undefined };
  }
}
