import { NextRequest } from "next/server";
import { TicketController } from "@/controllers/ticketController";
import { requireAuth } from "@/lib/auth";
import { ok, handleError, fail } from "@/lib/apiResponse";
import { ticketCreateSchema } from "@/validators/ticket";
import { rateLimit } from "@/lib/rateLimiter";
import { assertSameOrigin } from "@/lib/csrf";

export async function GET(req: NextRequest) {
  try {
    const user = requireAuth(req);
    const data = await TicketController.list(user.userId, user.role);
    return ok(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = requireAuth(req);
    assertSameOrigin(req);
    const ip = req.headers.get("x-forwarded-for") ?? "global";
    if (!rateLimit(`ticket-create:${ip}`, 30, 60_000)) return fail("Too many requests", 429);
    const body = await req.json();
    const parsed = ticketCreateSchema.parse(body);
    const ticket = await TicketController.create(user.userId, parsed);
    return ok(ticket, 201);
  } catch (err) {
    return handleError(err);
  }
}
