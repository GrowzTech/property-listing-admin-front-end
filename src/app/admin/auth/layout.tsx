"use client";
import AuthRoutes from "@/app/AuthRoutes";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <AuthRoutes>
      <div>{children}</div>
    </AuthRoutes>
  );
}
