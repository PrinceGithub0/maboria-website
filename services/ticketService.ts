import "server-only";
import { prisma } from "@/lib/prisma";

export async function listTickets(userId: string, role: "admin" | "client") {
  if (role === "admin") {
    return prisma.ticket.findMany({ orderBy: { createdAt: "desc" } });
  }
  return prisma.ticket.findMany({ where: { clientId: userId }, orderBy: { createdAt: "desc" } });
}

export async function createTicket(clientId: string, data: { title: string; description: string }) {
  return prisma.ticket.create({
    data: { clientId, title: data.title, description: data.description },
  });
}

export async function getTicket(id: string, userId: string, role: "admin" | "client") {
  const ticket = await prisma.ticket.findUnique({ where: { id } });
  if (!ticket) throw new Error("Not found");
  if (role !== "admin" && ticket.clientId !== userId) throw new Error("Forbidden");
  return ticket;
}

export async function updateTicket(
  id: string,
  userId: string,
  role: "admin" | "client",
  data: { status?: string; notes?: string },
) {
  const ticket = await prisma.ticket.findUnique({ where: { id } });
  if (!ticket) throw new Error("Not found");
  if (role !== "admin" && ticket.clientId !== userId) throw new Error("Forbidden");
  return prisma.ticket.update({
    where: { id },
    data: {
      status: data.status as any,
      notes: data.notes,
    },
  });
}
