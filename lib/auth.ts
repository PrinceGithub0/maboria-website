import "server-only";
import bcrypt from "bcryptjs";
import { NextRequest } from "next/server";
import { getTokenFromRequest, verifyToken, type JwtPayload, signToken } from "./jwt";
import { Role } from "@prisma/client";

export async function hashPassword(password: string) {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export function requireAuth(req: NextRequest, roles?: Array<Role | "admin" | "client">): JwtPayload {
  const token = getTokenFromRequest(req);
  if (!token) {
    throw new Error("Unauthorized");
  }
  const payload = verifyToken(token);
  if (!payload) {
    throw new Error("Unauthorized");
  }
  if (roles && !roles.includes(payload.role)) {
    throw new Error("Forbidden");
  }
  return payload;
}

export function setAuthCookie(token: string) {
  return {
    name: "token",
    value: token,
    path: "/",
    httpOnly: true,
    sameSite: "lax" as const,
    secure: process.env.NODE_ENV === "production",
  };
}

export { signToken };
