import "server-only";
import { loginUser, signupUser } from "@/services/authService";

export const AuthController = {
  signup: signupUser,
  login: loginUser,
};
