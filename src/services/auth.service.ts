import prisma from "../config/prisma";

export async function registerService(userData: {
  email: string;
  password: string;
}) {
  const isExists = await prisma.user.findUnique({
    where: { email: userData.email },
  });

  if (isExists) {
    throw new Error("Usuario ja resgistrado");
  }

  await prisma.user.create({ data: userData });
  return { success: true, message: "User registered successfully!" };
}
