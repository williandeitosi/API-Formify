import { z } from "zod";

const configSchema = z.object({
  PORT: z.preprocess((value) => Number(value), z.number().positive().int()),
  JWT_SECRET: z.string().min(1, "JWT_SECRET não pode estar vazio"),
});
const config = configSchema.parse({
  PORT: process.env.PORT,
  JWT_SECRET: process.env.JWT_SECRET,
});

export default config;
