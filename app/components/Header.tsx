"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useAppSelector, useAppDispatch } from "@/app/store/hooks";
import { logout } from "@/app/store/slices/authSlice";

export default function Header() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    dispatch(logout());
    router.push("/Login");
  };

  return (
    <header className="w-full py-4 px-[18px] flex items-center justify-between bg-white border-b border-black/[0.05]">
      <Link href="/AllOffers">
        <Image
          src="/icons/logo-prezzo.svg"
          width={120}
          height={40}
          alt="Il Prezzo Giusto"
        />
      </Link>
      <div className="flex items-center gap-3">
        {isAuthenticated ? (
          <>
            <Link
              href="/profile"
              className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center"
            >
              <Image
                src="/icons/user.svg"
                width={20}
                height={20}
                alt="Profile"
              />
            </Link>
            <button
              onClick={handleLogout}
              className="text-sm font-medium text-gray-1 hover:text-black-1"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            href="/Login"
            className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium"
          >
            Sign In
          </Link>
        )}
      </div>
    </header>
  );
}
