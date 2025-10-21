"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/app/store/hooks";
import { setCredentials, logout } from "@/app/store/slices/authSlice";

export function useAuthPersistence() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Check for saved auth token on mount
    const token = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      dispatch(setCredentials({ token, userId }));
    }
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    dispatch(logout());
  };

  return { handleLogout };
}
