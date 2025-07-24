"use client";
import { redirect } from "next/navigation";
import AuthRoutes from "@/app/AuthRoutes";
import { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  redirect("/admin/dashboard");
  return (
    <AuthRoutes>
      <div className="font-literata">{children}</div>
    </AuthRoutes>
  );
}
