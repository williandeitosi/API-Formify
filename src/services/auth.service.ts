import { compare, hash } from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/config";
import type { UsersRepository } from "../repositories/users-repository";
import type { userInput } from "../schemas/auth.schema";

export class UserService {
  constructor(private usersRepository: UsersRepository) {}

  async register({ email, password }: userInput) {
    const isExists = await this.usersRepository.findByEmail(email);
    if (isExists) {
      throw new Error("User is exists!");
    }
    const hashPassword = await hash(password, 10);

    const newUser = await this.usersRepository.create({
      email,
      password: hashPassword,
    });
    return { ...newUser, password: undefined };
  }

  async loginUser({ email, password }: userInput) {
    const userExists = await this.usersRepository.findByEmail(email);
    if (!userExists) {
      throw new Error("User is not found");
    }

    const isPasswordValid = await compare(password, userExists.password);
    if (!isPasswordValid) {
      throw new Error("Invalid credentials");
    }

    const payload = {
      id: userExists.id,
      email: userExists.email,
      createdAt: userExists.createAt,
    };
    const token = jwt.sign(payload, config.JWT_SECRET, { expiresIn: "3h" });

    return { access_token: token, email };
  }
}
