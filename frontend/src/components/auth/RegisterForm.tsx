"use client";

import Link from "next/link";
import { useForm } from "react-hook-form";
import Button from "@/components/common/Button";
import Input from "@/components/common/Input";

type RegisterFormData = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterFormData>();

  const password = watch("password");

  const onSubmit = (data: RegisterFormData) => {
    console.log(data);
  };

  return (
    <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">
      <h1 className="mb-6 text-center text-3xl font-bold">
        Create Account
      </h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          label="Username"
          placeholder="Enter username"
          error={errors.username?.message}
          {...register("username", {
            required: "Username is required",
          })}
        />

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          error={errors.email?.message}
          {...register("email", {
            required: "Email is required",
          })}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter password"
          error={errors.password?.message}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        />

        <Input
          label="Confirm Password"
          type="password"
          placeholder="Confirm password"
          error={errors.confirmPassword?.message}
          {...register("confirmPassword", {
            required: "Confirm your password",
            validate: (value) =>
              value === password || "Passwords do not match",
          })}
        />

        <Button type="submit">
          Register
        </Button>
      </form>

      <p className="mt-6 text-center text-sm">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-semibold text-blue-600 hover:underline"
        >
          Login
        </Link>
      </p>
    </div>
  );
}