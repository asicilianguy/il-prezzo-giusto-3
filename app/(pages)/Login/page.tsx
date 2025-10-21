"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/app/store/hooks";
import Header from "@/app/components/Header";
import BottomNav from "@/app/components/BottomNav";
import SignInModal from "./_components/SignInModal";

export default function LoginPage() {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/AllOffers");
    }
  }, [isAuthenticated, router]);

  return (
    <main className="min-h-screen flex flex-col relative container mx-auto bg-white-2">
      <Header />
      <SignInModal isOpen={true} onClose={() => router.push("/AllOffers")} />
      <BottomNav />
    </main>
  );
}
