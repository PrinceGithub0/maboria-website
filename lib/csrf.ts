import "server-only";
import { NextRequest } from "next/server";

export function assertSameOrigin(req: NextRequest) {
  const origin = req.headers.get("origin");
  const host = req.nextUrl.origin;
  if (origin && origin !== host) {
    throw new Error("Forbidden");
  }
}
