"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/app/store/hooks";
import LoadingSpinner from "./components/LoadingSpinner";

export default function HomePage() {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    // Redirect based on auth status
    if (isAuthenticated) {
      router.push("/AllOffers");
    } else {
      router.push("/Login");
    }
  }, [isAuthenticated, router]);

  return (
    <main className="min-h-screen flex items-center justify-center">
      <LoadingSpinner />
    </main>
  );
}
