import api from "@/lib/axios";
import { API } from "@/constants/routes";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  username: string;
  email: string;
  password: string;
}

export const login = (data: LoginRequest) => {
  return api.post(API.LOGIN, data);
};

export const register = (data: RegisterRequest) => {
  return api.post(API.REGISTER, data);
};