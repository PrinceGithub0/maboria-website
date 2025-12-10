import "server-only";
import { prisma } from "@/lib/prisma";
import { hashPassword, signToken, verifyPassword } from "@/lib/auth";
import { Role } from "@prisma/client";

export async function signupUser(input: { name: string; email: string; password: string }) {
  const existing = await prisma.user.findUnique({ where: { email: input.email } });
  if (existing) throw new Error("Email already in use");
  const passwordHash = await hashPassword(input.password);
  const user = await prisma.user.create({
    data: { name: input.name, email: input.email, passwordHash, role: "client" },
  });
  const token = signToken({ userId: user.id, role: user.role as Role, email: user.email });
  return { user, token };
}

export async function loginUser(input: { email: string; password: string }) {
  const user = await prisma.user.findUnique({ where: { email: input.email } });
  if (!user) throw new Error("Invalid credentials");
  const valid = await verifyPassword(input.password, user.passwordHash);
  if (!valid) throw new Error("Invalid credentials");
  const token = signToken({ userId: user.id, role: user.role as Role, email: user.email });
  return { user, token };
}
