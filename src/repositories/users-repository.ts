import type { People, Prisma, User } from "@prisma/client";

export interface UsersRepository {
  create(data: Prisma.UserCreateInput): Promise<User>;
  findByEmail(email: string): Promise<User | null>;
}

export interface FormRepository {
  createPerson(data: Prisma.PeopleUncheckedCreateInput): Promise<People>;
  listPerson(id: number): Promise<People | null>;
  listPeople(): Promise<People[]>;
  updatePerson(id: number, data: Prisma.PeopleUpdateInput): Promise<People>;
  deletePerson(id: number): void;
}
