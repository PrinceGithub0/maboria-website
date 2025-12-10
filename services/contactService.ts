import "server-only";
import { prisma } from "@/lib/prisma";

export async function createContactMessage(data: { name: string; email: string; message: string }) {
  return prisma.contactMessage.create({ data });
}
