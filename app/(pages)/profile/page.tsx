"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import BottomNav from "@/app/components/BottomNav";
import { useGetCurrentUserQuery } from "@/app/store/api/userApi";
import { useAppSelector, useAppDispatch } from "@/app/store/hooks";
import { logout } from "@/app/store/slices/authSlice";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { formatPhoneNumber } from "@/utils/formatters";
import { SUPERMARKET_DISPLAY_NAMES } from "@/constants/supermarkets";

export default function ProfilePage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const {
    data: user,
    isLoading,
    error,
  } = useGetCurrentUserQuery(undefined, {
    skip: !isAuthenticated,
  });

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/Login");
    }
  }, [isAuthenticated, router]);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    dispatch(logout());
    router.push("/Login");
  };

  if (!isAuthenticated) {
    return null;
  }

  if (isLoading) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <LoadingSpinner />
      </main>
    );
  }

  if (error || !user) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-black-1 mb-2">
            Failed to load profile
          </h3>
          <p className="text-gray-1 mb-4">Please try again later</p>
          <button
            onClick={() => router.push("/AllOffers")}
            className="px-6 py-3 bg-black text-white rounded-full font-medium"
          >
            Go to Offers
          </button>
        </div>
      </main>
    );
  }

  const daysUntilTrialEnd = user.subscription.trialEndDate
    ? Math.ceil(
        (new Date(user.subscription.trialEndDate).getTime() -
          new Date().getTime()) /
          (1000 * 60 * 60 * 24)
      )
    : 0;

  return (
    <main className="min-h-screen flex flex-col relative container mx-auto bg-white-2">
      <div className="px-[18px] py-6">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-[28px] font-bold text-black-1">Profile</h1>
          <button
            onClick={handleLogout}
            className="text-red-2 font-medium text-sm"
          >
            Logout
          </button>
        </div>

        {/* User Info Card */}
        <div className="bg-white rounded-2xl p-5 mb-4 shadow-sm">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 bg-gradient-to-br from-green-2 to-green-8 rounded-full flex items-center justify-center">
              <Image src="/icons/user.svg" width={32} height={32} alt="User" />
            </div>
            <div>
              <p className="text-sm text-gray-1 mb-1">Phone Number</p>
              <p className="text-lg font-semibold text-black-1">
                {formatPhoneNumber(user.phone)}
              </p>
            </div>
          </div>

          {/* Subscription Status */}
          {user.subscription.status === "trial" && (
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Image
                  src="/icons/clock-icon.svg"
                  width={16}
                  height={16}
                  alt=""
                />
                <p className="text-sm font-semibold text-orange-600">
                  Free Trial
                </p>
              </div>
              <p className="text-sm text-gray-1">
                {daysUntilTrialEnd > 0
                  ? `${daysUntilTrialEnd} days remaining`
                  : "Trial ending soon"}
              </p>
            </div>
          )}
        </div>

        {/* Preferred Supermarkets */}
        <div className="bg-white rounded-2xl p-5 mb-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-black-1">
              Preferred Supermarkets
            </h3>
            <Link
              href="/profile/edit-supermarkets"
              className="text-sm font-medium text-black-1"
            >
              Edit
            </Link>
          </div>
          {user.preferredSupermarkets.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {user.preferredSupermarkets.map((store) => (
                <span
                  key={store}
                  className="px-3 py-1.5 bg-green-2/10 text-black-1 rounded-full text-sm font-medium"
                >
                  {SUPERMARKET_DISPLAY_NAMES[
                    store as keyof typeof SUPERMARKET_DISPLAY_NAMES
                  ] || store}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-1 text-sm">No supermarkets selected</p>
          )}
        </div>

        {/* Preferred Brands */}
        <div className="bg-white rounded-2xl p-5 mb-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-black-1">
              Preferred Brands
            </h3>
            <Link
              href="/profile/edit-brands"
              className="text-sm font-medium text-black-1"
            >
              Edit
            </Link>
          </div>
          {user.preferredBrands.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {user.preferredBrands.map((brand) => (
                <span
                  key={brand}
                  className="px-3 py-1.5 bg-orange-50 text-black-1 rounded-full text-sm font-medium capitalize"
                >
                  {brand}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-gray-1 text-sm">No brands selected</p>
          )}
        </div>

        {/* Notification Settings */}
        <div className="bg-white rounded-2xl p-5 mb-4 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-black-1">
              Notifications
            </h3>
            <Link
              href="/profile/notifications"
              className="text-sm font-medium text-black-1"
            >
              Edit
            </Link>
          </div>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-1">
                Preferred Supermarkets
              </span>
              <span
                className={`text-sm font-medium ${
                  user.notificationPreferences.notifyPreferredSupermarkets
                    ? "text-green-2"
                    : "text-gray-1"
                }`}
              >
                {user.notificationPreferences.notifyPreferredSupermarkets
                  ? "On"
                  : "Off"}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-1">Preferred Brands</span>
              <span
                className={`text-sm font-medium ${
                  user.notificationPreferences.notifyPreferredBrands
                    ? "text-green-2"
                    : "text-gray-1"
                }`}
              >
                {user.notificationPreferences.notifyPreferredBrands
                  ? "On"
                  : "Off"}
              </span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-black-1 mb-4">
            Your Stats
          </h3>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-4 bg-green-2/10 rounded-xl">
              <p className="text-2xl font-bold text-black-1">
                {user.shoppingList.length}
              </p>
              <p className="text-sm text-gray-1 mt-1">Items in List</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-xl">
              <p className="text-2xl font-bold text-black-1">
                {user.preferredSupermarkets.length}
              </p>
              <p className="text-sm text-gray-1 mt-1">Stores</p>
            </div>
          </div>
        </div>
      </div>

      <BottomNav />
    </main>
  );
}
