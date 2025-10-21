"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import type { ShoppingListItem } from "@/app/types/api.types";
import { formatPrice } from "@/utils/formatters";
import {
  useUpdateShoppingListItemMutation,
  useRemoveFromShoppingListMutation,
} from "@/app/store/api/shoppingListApi";
import Counter from "./Counter";

interface ShoppingListProductCardProps {
  item: ShoppingListItem;
}

export default function ShoppingListProductCard({
  item,
}: ShoppingListProductCardProps) {
  const [notes, setNotes] = useState(item.notes || "");
  const [isEditingNotes, setIsEditingNotes] = useState(false);

  const [updateItem, { isLoading: isUpdating }] =
    useUpdateShoppingListItemMutation();
  const [removeItem, { isLoading: isRemoving }] =
    useRemoveFromShoppingListMutation();

  const product = item.product;
  const savings = product.previousPrice
    ? (product.previousPrice - product.offerPrice) * item.quantity
    : 0;

  const handleQuantityChange = async (newQuantity: number) => {
    if (newQuantity < 1) return;

    try {
      await updateItem({
        productId: product._id,
        updates: { quantity: newQuantity },
      }).unwrap();
    } catch (error) {
      console.error("Failed to update quantity:", error);
    }
  };

  const handleSaveNotes = async () => {
    try {
      await updateItem({
        productId: product._id,
        updates: { notes },
      }).unwrap();
      setIsEditingNotes(false);
    } catch (error) {
      console.error("Failed to save notes:", error);
    }
  };

  const handleRemove = async () => {
    if (window.confirm("Remove this item from your list?")) {
      try {
        await removeItem(product._id).unwrap();
      } catch (error) {
        console.error("Failed to remove item:", error);
      }
    }
  };

  return (
    <Disclosure>
      {({ open }) => (
        <div className="rounded-xl bg-white p-4 mb-3 shadow-sm border border-black/[0.04]">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-start gap-3 flex-1">
              <span className="bg-gray1 border border-black/[0.04] flex items-center justify-center rounded-[10px] min-w-[50px] w-[50px] h-[50px]">
                <Image
                  src="/icons/product-placeholder.svg"
                  width={26}
                  height={26}
                  alt={product.productName}
                />
              </span>
              <div className="flex-1">
                <h5 className="text-base font-medium text-black-1 leading-tight mb-1">
                  {product.productName}
                </h5>
                {product.brand && (
                  <p className="text-sm text-gray-1 mb-1">{product.brand}</p>
                )}
                <p className="text-xs text-gray-1">{product.quantity}</p>
              </div>
            </div>
            <button
              onClick={handleRemove}
              disabled={isRemoving}
              className="text-red-2 disabled:opacity-50"
            >
              <Image
                src="/icons/trash.svg"
                width={20}
                height={20}
                alt="Remove"
              />
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-black-1">
                {formatPrice(product.offerPrice * item.quantity)}
              </span>
              {savings > 0 && (
                <span className="text-sm text-green-2 font-medium">
                  Save {formatPrice(savings)}
                </span>
              )}
            </div>
            <Counter
              value={item.quantity}
              onChange={handleQuantityChange}
              disabled={isUpdating}
            />
          </div>

          {/* Notes Section */}
          <div className="mt-3 pt-3 border-t border-black/[0.05]">
            <DisclosureButton className="flex items-center justify-between w-full">
              <span className="text-sm font-medium text-black-1">
                {item.notes ? "Edit Notes" : "Add Notes"}
              </span>
              <Image
                src="/icons/chevron-down.svg"
                width={16}
                height={16}
                alt=""
                className={`transform transition-transform ${
                  open ? "rotate-180" : ""
                }`}
              />
            </DisclosureButton>

            <DisclosurePanel className="mt-3">
              {isEditingNotes ? (
                <div>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full p-3 border border-black/[0.1] rounded-lg text-sm resize-none"
                    rows={3}
                    placeholder="Add your notes here..."
                  />
                  <div className="flex gap-2 mt-2">
                    <button
                      onClick={handleSaveNotes}
                      disabled={isUpdating}
                      className="px-4 py-2 bg-black text-white rounded-full text-sm font-medium disabled:opacity-50"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => {
                        setNotes(item.notes || "");
                        setIsEditingNotes(false);
                      }}
                      className="px-4 py-2 bg-gray-200 text-black rounded-full text-sm font-medium"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  {item.notes ? (
                    <p className="text-sm text-gray-1 mb-2">{item.notes}</p>
                  ) : (
                    <p className="text-sm text-gray-1 italic mb-2">
                      No notes added yet
                    </p>
                  )}
                  <button
                    onClick={() => setIsEditingNotes(true)}
                    className="text-sm text-black-1 font-medium"
                  >
                    {item.notes ? "Edit" : "Add Note"}
                  </button>
                </div>
              )}
            </DisclosurePanel>
          </div>
        </div>
      )}
    </Disclosure>
  );
}
