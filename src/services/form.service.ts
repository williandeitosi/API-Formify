import type { Prisma } from "@prisma/client";
import type { FormRepository } from "../repositories/users-repository";
import type { FormInputs } from "../schemas/form.schema";

export class FormService {
  constructor(private formRepository: FormRepository) {}

  async createPerson(data: FormInputs) {
    const transformedData = {
      ...data,
      create: data.itens,
    };
    const newPerson = await this.formRepository.createPerson(
      transformedData as Prisma.PeopleCreateInput
    );
    return newPerson;
  }

  async listPeople() {
    return await this.formRepository.listPeople();
  }

  async listPerson(id: number) {
    return await this.formRepository.listPerson(id);
  }

  async updatePerson(id: number, data: FormInputs) {
    const transformedData = {
      ...data,
      create: data.itens,
    };

    const update = await this.formRepository.updatePerson(
      id,
      transformedData as Prisma.PeopleUpdateInput
    );

    return update;
  }

  async deletePerson(id: number) {
    return await this.formRepository.deletePerson(id);
  }
}
