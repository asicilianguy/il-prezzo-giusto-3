"use client";

import { useEffect } from "react";
import { useAppDispatch } from "@/app/store/hooks";
import { setCredentials } from "@/app/store/slices/authSlice";

export default function AuthPersistence() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    // Restore auth state from localStorage on app load
    const token = localStorage.getItem("authToken");
    const userId = localStorage.getItem("userId");

    if (token && userId) {
      dispatch(setCredentials({ token, userId }));
    }
  }, [dispatch]);

  return null;
}
