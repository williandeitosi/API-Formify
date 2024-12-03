import { z } from "zod";

export const userSchema = z.object({
  email: z
    .string()
    .min(3, "Email deve ter no minimo 3  caracteres")
    .email("Email invalido"),
  password: z.coerce.string().min(6, "Senha deve ter no minimo 6 caracteres"),
});

export type userInput = z.infer<typeof userSchema>;
