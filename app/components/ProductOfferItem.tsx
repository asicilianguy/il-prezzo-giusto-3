"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { ProductOffer } from "@/app/types/api.types";
import {
  formatPrice,
  formatExpiry,
  formatDiscount,
} from "@/app/utils/formatters";
import { useAddToShoppingListMutation } from "@/app/store/api/shoppingListApi";
import { useAppSelector } from "@/app/store/hooks";
import { SUPERMARKET_DISPLAY_NAMES } from "@/app/constants/supermarkets";

interface ProductOfferItemProps {
  offer: ProductOffer;
}

export default function ProductOfferItem({ offer }: ProductOfferItemProps) {
  const [isAdding, setIsAdding] = useState(false);
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  const [addToShoppingList] = useAddToShoppingListMutation();

  const handleAddToList = async () => {
    if (!isAuthenticated) {
      // Redirect to login
      window.location.href = "/Login";
      return;
    }

    setIsAdding(true);
    try {
      await addToShoppingList({
        productId: offer._id,
        quantity: 1,
      }).unwrap();
      // Show success toast (you can add a toast notification system)
      alert("Added to shopping list!");
    } catch (error) {
      console.error("Failed to add to list:", error);
      alert("Failed to add to list. Please try again.");
    } finally {
      setIsAdding(false);
    }
  };

  const daysUntilExpiry = formatExpiry(offer.offerEndDate);
  const isRecentlyAdded =
    new Date().getTime() - new Date(offer.createdAt).getTime();
  3 * 24 * 60 * 60 * 1000; // Less than 3 days

  return (
    <div className="rounded-[12px] mb-5 border border-black/[0.04] bg-white shadow-3xl">
      <div className="gradient3 rounded-t-[12px] px-3 py-2.5">
        <ul className="flex items-center justify-between">
          <li className="text-white font-figtree font-medium flex items-center gap-1.5 text-sm">
            <Image src="/icons/shop.svg" width={15} height={15} alt="Shop" />
            {SUPERMARKET_DISPLAY_NAMES[offer.chainName]}
          </li>
          <li className="text-white font-figtree font-medium flex items-center gap-1.5 text-sm capitalize">
            <Image src="/icons/tag-icon.svg" width={15} height={15} alt="Tag" />
            {offer.supermarketAisle}
          </li>
        </ul>
      </div>

      <div className="px-[18px] py-5">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <span className="bg-gray1 border border-black/[0.04] flex items-center justify-center rounded-[10px] w-[50px] h-[50px]">
              <Image
                src="/icons/product-placeholder.svg"
                width={26}
                height={26}
                alt={offer.productName}
              />
            </span>
            <div>
              <h4 className="text-base text-black-1 font-medium leading-[20px] mb-0.5">
                {offer.productName}
              </h4>
              <p className="text-xs text-gray-1 font-normal">
                {offer.quantity}
                {offer.pricePerUnit &&
                  ` · ${formatPrice(offer.pricePerUnit)}/${
                    offer.pricePerUnitType
                  }`}
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 my-3 flex-wrap">
          {isRecentlyAdded && (
            <span className="gradient2 px-2.5 py-1 rounded-full text-xs font-medium text-black-1 inline-flex items-center">
              Recently Added
            </span>
          )}
          {offer.brand && (
            <span className="gradient2 px-2.5 py-1 rounded-full text-xs font-medium text-black-1 inline-flex items-center gap-1">
              <Image src="/icons/fire-icon.svg" width={14} height={14} alt="" />
              {offer.brand}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[22px] font-semibold text-black-1 leading-none">
              {formatPrice(offer.offerPrice)}
            </span>
            {offer.previousPrice && (
              <>
                <span className="text-base font-normal text-gray-1 line-through leading-none">
                  {formatPrice(offer.previousPrice)}
                </span>
                {offer.discountPercentage && (
                  <span className="gradient4 text-black-1 text-xs font-semibold px-2.5 py-1 rounded-full">
                    {formatDiscount(offer.discountPercentage)}
                  </span>
                )}
              </>
            )}
          </div>
          <button
            onClick={handleAddToList}
            disabled={isAdding}
            className="gradient3 w-10 h-10 rounded-full flex items-center justify-center disabled:opacity-50"
          >
            {isAdding ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <Image src="/icons/add.svg" width={24} height={24} alt="Add" />
            )}
          </button>
        </div>

        <div className="flex items-center gap-1.5 mt-3">
          <Image
            src="/icons/clock-icon.svg"
            width={14}
            height={14}
            alt="Clock"
          />
          <p className="text-xs font-normal text-gray-1">
            Expires in {daysUntilExpiry}
          </p>
        </div>
      </div>
    </div>
  );
}
