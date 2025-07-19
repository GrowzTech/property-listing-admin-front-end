"use client";
import { selectToken } from "@/lib/features/auth/login/selector";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function AuthRoutes({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useAppSelector(selectToken);
  const router = useRouter();

  useEffect(() => {
    if (token) {
      router.replace("/admin/dashboard");
    }
  }, [token, router]);

  if (token) {
    return null;
  }

  return <>{children}</>;
}
