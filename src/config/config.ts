import { z } from "zod";

const configSchema = z.object({
  PORT: z.coerce.number(),
});

const config = configSchema.parse({
  PORT: process.env.PORT,
});

export default config;
