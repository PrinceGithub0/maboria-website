import { NextRequest } from "next/server";
import { AuthController } from "@/controllers/authController";
import { signupSchema } from "@/validators/auth";
import { ok, handleError, fail } from "@/lib/apiResponse";
import { rateLimit } from "@/lib/rateLimiter";
import { setAuthCookie } from "@/lib/auth";
import { assertSameOrigin } from "@/lib/csrf";

export async function POST(req: NextRequest) {
  try {
    assertSameOrigin(req);
    const ip = req.ip ?? req.headers.get("x-forwarded-for") ?? "global";
    if (!rateLimit(`signup:${ip}`, 20, 60_000)) return fail("Too many requests", 429);
    const body = await req.json();
    const parsed = signupSchema.parse(body);
    const { user, token } = await AuthController.signup(parsed);
    const res = ok({ user, token }, 201);
    res.cookies.set(setAuthCookie(token));
    return res;
  } catch (err) {
    return handleError(err);
  }
}
