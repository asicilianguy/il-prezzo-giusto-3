"use client";

import { useState } from "react";
import { Checkbox } from "@headlessui/react";
import Image from "next/image";

const stores = ["Conad", "Ipercoop", "Pam","Carrefour","Supermercato", "Billa"];

export default function StoreCheckboxes() {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleStore = (store: string) => {
    setSelected((prev) =>
      prev.includes(store) ? prev.filter((s) => s !== store) : [...prev, store]
    );
  };

  return (
    <ul className="space-y-[5px]">
      {stores.map((store) => {
        const checked = selected.includes(store);
        return (
          <li key={store}>
            <Checkbox
              checked={checked}
              onChange={() => toggleStore(store)}
              className={`flex items-center justify-between gap-6 p-3.5 rounded-xl cursor-pointer transition
                ${checked ? " bg-green-2/15" : ""}`}
            >
              <h4 className="text-lg text-black-1 font-medium font-figtree">
                {store}
              </h4>
              <div className={`${checked ? "bg-green-2" : "bg-transparent border border-black/15"} inline-flex w-[22px] h-[22px] rounded-md  items-center justify-center`}>
                {checked &&
                <svg
                    width={12}
                    height={9}
                    viewBox="0 0 12 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path
                        d="M10.6667 1.5L4.25004 7.91667L1.33337 5"
                        stroke="#050505"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    </svg>}
              </div>
            </Checkbox>
          </li>
        );
      })}
    </ul>
  );
}
