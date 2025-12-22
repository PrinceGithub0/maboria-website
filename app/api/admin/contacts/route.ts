import { NextRequest } from "next/server";
import { ContactController } from "@/controllers/contactController";
import { requireAuth } from "@/lib/auth";
import { ok, handleError } from "@/lib/apiResponse";
import { Role } from "@prisma/client";

export async function GET(req: NextRequest) {
  try {
    const user = requireAuth(req, ["admin" as Role]);
    if (user.role !== "admin") throw new Error("Forbidden");
    const messages = await ContactController.list();
    return ok(messages);
  } catch (err) {
    return handleError(err);
  }
}
