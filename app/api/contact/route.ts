import { NextRequest } from "next/server";
import { contactSchema } from "@/validators/contact";
import { ContactController } from "@/controllers/contactController";
import { ok, handleError, fail } from "@/lib/apiResponse";
import { rateLimit } from "@/lib/rateLimiter";
import { assertSameOrigin } from "@/lib/csrf";

export async function POST(req: NextRequest) {
  try {
    assertSameOrigin(req);
    const ip = req.headers.get("x-forwarded-for") ?? "global";
    if (!rateLimit(`contact:${ip}`, 20, 60_000)) return fail("Too many requests", 429);
    const body = await req.json();
    const parsed = contactSchema.parse(body);
    const message = await ContactController.create(parsed);
    return ok(message, 201);
  } catch (err) {
    return handleError(err);
  }
}
