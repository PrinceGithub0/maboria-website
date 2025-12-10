import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAuth } from "@/lib/auth";
import { ok, handleError } from "@/lib/apiResponse";
import { Role } from "@prisma/client";

export async function GET(req: NextRequest) {
  try {
    const user = requireAuth(req, ["admin" as Role]);
    if (user.role !== "admin") throw new Error("Forbidden");
    const users = await prisma.user.findMany({ orderBy: { createdAt: "desc" }, select: { id: true, name: true, email: true, role: true, createdAt: true } });
    return ok(users);
  } catch (err) {
    return handleError(err);
  }
}
