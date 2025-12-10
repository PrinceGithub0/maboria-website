import { NextResponse, type NextRequest } from "next/server";
import { verifyToken } from "@/lib/jwt";

const ADMIN_PATHS = ["/admin", "/api/admin"];
const AUTH_PATHS = ["/dashboard"];

export function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const isAdminPath = ADMIN_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
  const isAuthPath = AUTH_PATHS.some((p) => pathname === p || pathname.startsWith(`${p}/`));
  if (!isAdminPath && !isAuthPath) return NextResponse.next();

  const token = req.cookies.get("token")?.value;
  if (!token) return NextResponse.redirect(new URL("/login", req.url));

  const payload = verifyToken(token);
  if (!payload) return NextResponse.redirect(new URL("/login", req.url));

  if (isAdminPath && payload.role !== "admin") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/admin/:path*", "/dashboard/:path*"],
};
