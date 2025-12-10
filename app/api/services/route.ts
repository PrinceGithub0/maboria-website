import { NextRequest } from "next/server";
import { ServiceRequestController } from "@/controllers/serviceRequestController";
import { requireAuth } from "@/lib/auth";
import { ok, handleError, fail } from "@/lib/apiResponse";
import { serviceCreateSchema } from "@/validators/service";
import { rateLimit } from "@/lib/rateLimiter";
import { assertSameOrigin } from "@/lib/csrf";

export async function GET(req: NextRequest) {
  try {
    const user = requireAuth(req);
    const data = await ServiceRequestController.list(user.userId, user.role);
    return ok(data);
  } catch (err) {
    return handleError(err);
  }
}

export async function POST(req: NextRequest) {
  try {
    const user = requireAuth(req);
    assertSameOrigin(req);
    const ip = req.ip ?? req.headers.get("x-forwarded-for") ?? "global";
    if (!rateLimit(`services-create:${ip}`, 30, 60_000)) return fail("Too many requests", 429);
    const body = await req.json();
    const parsed = serviceCreateSchema.parse(body);
    const service = await ServiceRequestController.create(user.userId, parsed);
    return ok(service, 201);
  } catch (err) {
    return handleError(err);
  }
}
