import type { Prisma } from "@prisma/client";
import prisma from "../../config/prisma";
import { FormRepository } from "./../users-repository";
export class PrismaFormRepository implements FormRepository {
  async createPerson(data: Prisma.PeopleUncheckedCreateInput) {
    const person = await prisma.people.create({
      data: {
        name: data.name,
        cpf: data.cpf,
        country: data.country,
        avatar: data.avatar,
        itens: {
          create: data.itens as Prisma.ItemCreateManyPeopleInput[],
        },
      },
      include: { itens: true },
    });
    return person;
  }

  async listPeople() {
    const people = await prisma.people.findMany({ include: { itens: true } });
    return people;
  }

  async listPerson(id: number) {
    const person = await prisma.people.findUnique({
      where: { id },
      include: { itens: true },
    });
    return person;
  }

  async updatePerson(id: number, data: Prisma.PeopleUpdateInput) {
    const updatePerson = await prisma.people.update({
      where: { id },
      data: {
        name: data.name,
        cpf: data.cpf,
        country: data.country,
        avatar: data.avatar,
        itens: {
          upsert:
            data.itens as Prisma.ItemUpsertWithWhereUniqueWithoutPeopleInput[],
        },
      },
      include: { itens: true },
    });
    return updatePerson;
  }

  async deletePerson(id: number) {
    return await prisma.people.delete({
      where: { id },
    });
  }
}
