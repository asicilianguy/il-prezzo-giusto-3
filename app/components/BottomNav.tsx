"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

function BottomNav() {
     const pathname = usePathname();

     const navItems = [
          {
               name: "Offers",
               href: "/AllOffers",
               icon: "/icons/bag-happy.svg",
               relatedPaths: ["/alloffers", "/AllOffersAlerts"],
          },
          {
               name: "List",
               href: "/MyShoppingList",
               icon: "/icons/bag-2.svg",
               badge: 7,
               relatedPaths: ["/MyShoppingList", "/EmptyShoppingList"],
          },
          {
               name: "Profile",
               href: "/profile",
               icon: "/icons/user.svg",
          },
     ];

     return (
          <div className="fixed left-1/2 -translate-x-1/2 bottom-6 bg-black-1 inline-flex items-center justify-center rounded-full shadow-4xl p-[5px]">
               <ul className="flex items-center gap-2.5">
                    {navItems.map((item) => {
                         // ✅ Normalize both paths to lowercase and handle trailing slash safely
                         const current = pathname?.toLowerCase().replace(/\/$/, "");
                         const target = item.href.toLowerCase().replace(/\/$/, "");

                         // ✅ Mark active if exact match or starts with the route (for subpages)
                         const isActive =
                              current === target || current.startsWith(`${target}/`);

                         return (
                              <li key={item.name}>
                                   <Link
                                        href={item.href}
                                        className={`flex items-center justify-center relative gap-1.5 rounded-full h-11 px-[15px] transition-all duration-200 ${isActive ? "bg-green-2" : "hover:bg-green-2/[0.2]"
                                             }`}
                                   >
                                        <span className="relative flex items-center justify-center">
                                             <Image
                                                  src={item.icon}
                                                  width={24}
                                                  height={24}
                                                  alt={item.name}
                                                  className={`${isActive ? "invert-[1]" : ""
                                                       }`}
                                             />
                                             {item.badge && (
                                                  <span
                                                       className={`absolute -right-1 -top-1 w-[15px] h-[15px] inline-flex items-center justify-center rounded-full text-black-1 text-[10px] font-medium bg-green-2 border border-solid  ${isActive ? "bg-white border-white" : "bg-green-2 border-black-1"
                                                            }`}
                                                  >
                                                       {item.badge}
                                                  </span>

                                             )}
                                        </span>

                                        {/* ✅ Show label only if active */}
                                        {isActive && (
                                             <span className="text-black-1 text-sm font-medium tracking-[0.1px] inline-flex items-center">
                                                  {item.name}
                                             </span>
                                        )}
                                   </Link>
                              </li>
                         );
                    })}
               </ul>
          </div>
     );
}

export default BottomNav;
