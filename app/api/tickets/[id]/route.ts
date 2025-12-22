import { NextRequest } from "next/server";
import { TicketController } from "@/controllers/ticketController";
import { requireAuth } from "@/lib/auth";
import { ok, handleError } from "@/lib/apiResponse";
import { ticketUpdateSchema } from "@/validators/ticket";

export async function GET(_req: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const user = requireAuth(_req);
    const ticket = await TicketController.get(id, user.userId, user.role);
    return ok(ticket);
  } catch (err) {
    return handleError(err);
  }
}

export async function PATCH(req: NextRequest, context: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await context.params;
    const user = requireAuth(req);
    const body = await req.json();
    const parsed = ticketUpdateSchema.parse(body);
    const ticket = await TicketController.update(id, user.userId, user.role, parsed);
    return ok(ticket);
  } catch (err) {
    return handleError(err);
  }
}
