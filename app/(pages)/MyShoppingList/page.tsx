"use client";

import Link from "next/link";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import BottomNav from "@/app/components/BottomNav";
import ShoppingListByStore from "@/app/components/ShoppingListByStore";
import ShoppingListByDepartment from "@/app/components/ShoppingListByDepartment";
import {
  useGetShoppingListQuery,
  useClearShoppingListMutation,
} from "@/app/store/api/shoppingListApi";
import { useAppSelector } from "@/app/store/hooks";
import { formatPrice } from "@/utils/formatters";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function MyShoppingListPage() {
  const router = useRouter();
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);

  const { data, isLoading, error } = useGetShoppingListQuery(undefined, {
    skip: !isAuthenticated,
  });

  const [clearShoppingList, { isLoading: isClearing }] =
    useClearShoppingListMutation();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/Login");
    }
  }, [isAuthenticated, router]);

  const handleClearAll = async () => {
    if (
      window.confirm(
        "Are you sure you want to clear your entire shopping list?"
      )
    ) {
      try {
        await clearShoppingList().unwrap();
      } catch (error) {
        console.error("Failed to clear shopping list:", error);
        alert("Failed to clear list. Please try again.");
      }
    }
  };

  // Calculate total savings
  const totalSavings =
    data?.shoppingList.reduce((acc, item) => {
      const product = item.product;
      if (product.previousPrice && product.offerPrice) {
        const saving =
          (product.previousPrice - product.offerPrice) * item.quantity;
        return acc + saving;
      }
      return acc;
    }, 0) || 0;

  if (!isAuthenticated) {
    return null;
  }

  if (isLoading) {
    return (
      <main className="min-h-screen flex flex-col relative container mx-auto">
        <div className="flex items-center justify-center min-h-screen">
          <LoadingSpinner />
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen flex flex-col relative container mx-auto">
        <div className="flex items-center justify-center min-h-screen text-center px-6">
          <div>
            <h3 className="text-2xl font-semibold text-black-1 mb-2">
              Failed to load shopping list
            </h3>
            <p className="text-gray-1 mb-4">Please try again later</p>
            <button
              onClick={() => router.push("/AllOffers")}
              className="px-6 py-3 bg-black text-white rounded-full font-medium"
            >
              Browse Offers
            </button>
          </div>
        </div>
      </main>
    );
  }

  if (!data || data.shoppingList.length === 0) {
    router.push("/EmptyShoppingList");
    return null;
  }

  return (
    <main className="min-h-screen flex flex-col relative container mx-auto">
      <div className="flex items-center justify-between py-5 px-[18px]">
        <h2 className="text-[22px] font-bold leading-[130%] text-black-1">
          My Shopping List
        </h2>
        <Link
          href="#"
          className="flex items-center gap-1.5 px-3 py-[7px] text-xs font-medium text-white bg-black rounded-full"
        >
          <img src="/icons/whatsapp-icon.svg" alt="" /> Share on WhatsApp
        </Link>
      </div>

      <div className="bg-white-2 px-[18px] py-[30px] pb-32">
        <div className="bg-[url(/images/landing-bg2.png)] mb-[35px] border-[3px] border-white rounded-2xl px-5 py-5 pb-[15px] bg-no-repeat bg-cover">
          <h4 className="text-lg font-medium leading-[22px] mb-2.5 text-black-1">
            Estimated savings
          </h4>
          <span className="block font-bold text-black-1 text-[36px]">
            {formatPrice(totalSavings)} <span className="text-[28px]">🎉</span>
          </span>
        </div>

        <div className="flex items-center justify-between mb-[14px]">
          <h4 className="text-[21px] font-semibold text-black-1">
            {data.shoppingList.length} Item
            {data.shoppingList.length !== 1 ? "s" : ""}
          </h4>
          <button
            onClick={handleClearAll}
            disabled={isClearing}
            className="text-[17px] font-medium text-red-2 block disabled:opacity-50"
          >
            {isClearing ? "Clearing..." : "Clear All"}
          </button>
        </div>

        <TabGroup>
          <TabList className="gradient2 p-1 rounded-full w-fit">
            <Tab className="text-sm font-normal leading-[17px] text-black-1 inline-block cursor-pointer py-[8.5px] px-[18.5px] rounded-full data-selected:bg-white data-selected:shadow-6xl data-selected:font-medium">
              Supermarket
            </Tab>
            <Tab className="text-sm font-normal leading-[17px] text-black-1 inline-block cursor-pointer py-[8.5px] px-[18.5px] rounded-full data-selected:bg-white data-selected:shadow-6xl data-selected:font-medium">
              Department
            </Tab>
            <Tab className="text-sm font-normal leading-[17px] text-black-1 inline-block cursor-pointer py-[8.5px] px-[18.5px] rounded-full data-selected:bg-white data-selected:shadow-6xl data-selected:font-medium">
              Both
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <div className="border-t border-black/[0.1] mt-[22px]">
                <ShoppingListByStore items={data.shoppingList} />
              </div>
            </TabPanel>

            <TabPanel>
              <div className="border-t border-black/[0.1] mt-[22px]">
                <ShoppingListByDepartment items={data.shoppingList} />
              </div>
            </TabPanel>

            <TabPanel>
              <div className="border-t border-black/[0.1] mt-[22px]">
                <ShoppingListByStore
                  items={data.shoppingList}
                  showDepartments
                />
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
      </div>

      <BottomNav />
    </main>
  );
}
