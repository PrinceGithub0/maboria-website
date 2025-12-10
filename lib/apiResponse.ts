import "server-only";
import { NextResponse } from "next/server";
import { logError } from "./logger";

export function ok<T>(data: T, init?: number) {
  return NextResponse.json({ success: true, data }, { status: init ?? 200 });
}

export function fail(message: string, status = 400) {
  return NextResponse.json({ success: false, message }, { status });
}

export function handleError(err: unknown) {
  const message = err instanceof Error ? err.message : "Unexpected error";
  logError(message);
  const status = message === "Unauthorized" ? 401 : message === "Forbidden" ? 403 : 400;
  const safeMessage =
    status >= 500 ? "Something went wrong" : ["Unauthorized", "Forbidden", "Not found"].includes(message) ? message : "Request failed";
  return fail(safeMessage, status);
}
