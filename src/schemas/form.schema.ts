import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(2, "O nome deve ter pelo menos 2 caracteres."),
  cpf: z.string().min(11, "O CPF deve ter 11 dígitos numéricos.").max(11),
  country: z.string().min(3, "O país deve ter pelo menos 3 caracteres."),
  avatar: z.any().optional(),
  itens: z
    .array(
      z.object({
        name: z
          .string()
          .min(2, "O nome do item deve ter pelo menos 2 caracteres."),
        price: z.coerce.number().positive("O preço deve ser maior que zero."),
      })
    )
    .optional(),
});

export type FormInputs = z.infer<typeof formSchema>;
