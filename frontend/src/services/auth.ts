import api from "@/lib/axios";
import { API } from "@/constants/routes";
import {
  LoginRequest,
  RegisterRequest,
  AuthResponse,
} from "@/types/auth";

export const register = (data: RegisterRequest) =>
  api.post<AuthResponse>(API.REGISTER, data);

export const login = (data: LoginRequest) =>
  api.post<AuthResponse>(API.LOGIN, data);