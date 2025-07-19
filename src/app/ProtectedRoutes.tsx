"use client";
import { selectToken } from "@/lib/features/auth/login/selector";
import { useAppSelector } from "@/lib/hooks";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const token = useAppSelector(selectToken);
  const router = useRouter();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted && !token) {
      router.replace("/admin/auth/login");
    }
  }, [token, mounted, router]);

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  if (!token) {
    return null;
  }

  return <>{children}</>;
}
