"use client";

import { useMemo } from "react";
import type { ShoppingListItem } from "@/app/types/api.types";
import ShoppingListProductCard from "./ShoppingListProductCard";
import { SUPERMARKET_DISPLAY_NAMES } from "@/constants/supermarkets";

interface ShoppingListByStoreProps {
  items: ShoppingListItem[];
  showDepartments?: boolean;
}

export default function ShoppingListByStore({
  items,
  showDepartments = false,
}: ShoppingListByStoreProps) {
  const groupedByStore = useMemo(() => {
    const groups: Record<string, ShoppingListItem[]> = {};

    items.forEach((item) => {
      const storeName = item.product.chainName;
      if (!groups[storeName]) {
        groups[storeName] = [];
      }
      groups[storeName].push(item);
    });

    return groups;
  }, [items]);

  return (
    <div>
      {Object.entries(groupedByStore).map(([storeName, storeItems]) => (
        <section key={storeName} className="mb-6">
          <h6 className="text-lg font-medium text-black-1 mb-3 mt-6">
            {SUPERMARKET_DISPLAY_NAMES[
              storeName as keyof typeof SUPERMARKET_DISPLAY_NAMES
            ] || storeName}
          </h6>
          {showDepartments
            ? // Group by department within each store
              (() => {
                const groupedByDept: Record<string, ShoppingListItem[]> = {};
                storeItems.forEach((item) => {
                  const dept = item.product.supermarketAisle;
                  if (!groupedByDept[dept]) {
                    groupedByDept[dept] = [];
                  }
                  groupedByDept[dept].push(item);
                });

                return Object.entries(groupedByDept).map(
                  ([dept, deptItems]) => (
                    <div key={dept} className="mb-4">
                      <p className="text-sm font-medium text-gray-1 mb-2 capitalize">
                        {dept}
                      </p>
                      {deptItems.map((item) => (
                        <ShoppingListProductCard key={item._id} item={item} />
                      ))}
                    </div>
                  )
                );
              })()
            : storeItems.map((item) => (
                <ShoppingListProductCard key={item._id} item={item} />
              ))}
        </section>
      ))}
    </div>
  );
}
