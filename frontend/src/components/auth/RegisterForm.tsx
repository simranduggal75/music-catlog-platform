"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

import { register as registerUser } from "@/services/auth";
import { saveToken } from "@/utils/storage";
import { RegisterRequest } from "@/types/auth";

type RegisterFormData = RegisterRequest & {
  confirmPassword: string;
};

export default function RegisterForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>();

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const response = await registerUser({
        username: data.username,
        password: data.password,
      });

      saveToken(response.data.token);

      router.push("/search");
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input
        label="Username"
        {...register("username", {
          required: "Username is required",
        })}
        error={errors.username?.message}
      />

      <Input
        label="Password"
        type="password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        })}
        error={errors.password?.message}
      />

      <Input
        label="Confirm Password"
        type="password"
        {...register("confirmPassword", {
          required: "Please confirm your password",
          validate: (value) =>
            value === watch("password") || "Passwords do not match",
        })}
        error={errors.confirmPassword?.message}
      />

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Registering..." : "Register"}
      </Button>
    </form>
  );
}