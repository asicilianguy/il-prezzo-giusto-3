"use client";

import { useMemo } from "react";
import type { ShoppingListItem } from "@/app/types/api.types";
import ShoppingListProductCard from "./ShoppingListProductCard";

interface ShoppingListByDepartmentProps {
  items: ShoppingListItem[];
}

export default function ShoppingListByDepartment({
  items,
}: ShoppingListByDepartmentProps) {
  const groupedByDepartment = useMemo(() => {
    const groups: Record<string, ShoppingListItem[]> = {};

    items.forEach((item) => {
      const dept = item.product.supermarketAisle;
      if (!groups[dept]) {
        groups[dept] = [];
      }
      groups[dept].push(item);
    });

    return groups;
  }, [items]);

  return (
    <div>
      {Object.entries(groupedByDepartment).map(([department, deptItems]) => (
        <section key={department} className="mb-6">
          <h6 className="text-lg font-medium text-black-1 mb-3 mt-6 capitalize">
            {department}
          </h6>
          {deptItems.map((item) => (
            <ShoppingListProductCard key={item._id} item={item} />
          ))}
        </section>
      ))}
    </div>
  );
}
