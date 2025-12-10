import "server-only";
import { prisma } from "@/lib/prisma";

export async function listServiceRequests(userId: string, role: "admin" | "client") {
  if (role === "admin") {
    return prisma.serviceRequest.findMany({ orderBy: { createdAt: "desc" } });
  }
  return prisma.serviceRequest.findMany({ where: { clientId: userId }, orderBy: { createdAt: "desc" } });
}

export async function createServiceRequest(
  clientId: string,
  data: { serviceType: string; description: string; files?: string },
) {
  return prisma.serviceRequest.create({
    data: { clientId, serviceType: data.serviceType, description: data.description, files: data.files },
  });
}

export async function getServiceRequest(id: string, userId: string, role: "admin" | "client") {
  const request = await prisma.serviceRequest.findUnique({ where: { id } });
  if (!request) throw new Error("Not found");
  if (role !== "admin" && request.clientId !== userId) throw new Error("Forbidden");
  return request;
}

export async function updateServiceRequest(
  id: string,
  userId: string,
  role: "admin" | "client",
  data: { status?: string; notes?: string },
) {
  const request = await prisma.serviceRequest.findUnique({ where: { id } });
  if (!request) throw new Error("Not found");
  if (role !== "admin" && request.clientId !== userId) throw new Error("Forbidden");
  return prisma.serviceRequest.update({
    where: { id },
    data: { status: data.status as any, notes: data.notes },
  });
}
