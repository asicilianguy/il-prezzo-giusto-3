'use client';

import Image from "next/image";
import Link from "next/link";
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import Counter from "./Counter";

interface ProductCardProps {
     image: string;
     title: string;
     brand?: string; // ✅ make optional
     weight: string;
     price: string;
     saved: string;
     notes?: string;
     hasNotes?: boolean;
     defaultOpen?: boolean;
     addNotes?: boolean;
}

export default function ProductCard({
     image,
     title,
     brand,
     weight,
     price,
     saved,
     notes,
     hasNotes = false,
     defaultOpen = false,
     addNotes = false,
}: ProductCardProps) {
     return (
          <div className="bg-white mb-3 rounded-[14px] shadow-3xl">
               <div className="p-[18px] flex items-start gap-[14px]">
                    <span className="bg-gray1 border border-black/[0.04] flex items-center justify-center rounded-[10px] w-[50px] h-[50px]">
                         <Image alt={title} width={26} height={26} src={image} />
                    </span>

                    <div className="flex-1">
                         <div className="flex justify-between gap-[14px] mb-[14px]">
                              <div>
                                   <h4 className="text-base font-medium text-black-1 mb-1.5 leading-[19px]">{title}</h4>
                                   <ul className="flex items-center gap-2">
                                        {/* ✅ only show brand if it exists */}
                                        {brand && (
                                             <>
                                                  <li className="text-black text-sm font-normal">{brand}</li>
                                                  <li className="block bg-gray-1 w-[3px] h-[3px] rounded-full"></li>
                                             </>
                                        )}
                                        <li className="text-gray-1 text-sm font-normal">{weight}</li>
                                        <li className="block bg-gray-1 w-[3px] h-[3px] rounded-full"></li>
                                        <li className="text-orange-4 text-sm font-normal">{price}</li>
                                   </ul>
                              </div>

                              <Link href="">
                                   <Image src="/icons/trash-2.svg" alt="Delete" width={20} height={20} />
                              </Link>
                         </div>

                         <div className="flex items-center justify-between">
                              <Counter />
                              <Link href="/" className="text-base font-medium text-green-6">
                                   Saved {saved}
                              </Link>
                         </div>
                    </div>
               </div>

               {hasNotes && (
                    <Disclosure as="div" className="p-[14px] border-t border-black/[13%]" defaultOpen={defaultOpen}>
                         <DisclosureButton className="group cursor-pointer flex w-full items-center gap-[5px]">
                              <Image src="/icons/left-arrow.svg" width={14} height={14} alt="Toggle" className="group-data-open:rotate-90" />
                              <span className="text-sm font-medium text-black-1">Notes</span>
                         </DisclosureButton>
                         <DisclosurePanel className="mt-2 text-sm text-black-1">
                              {notes || "Lorem ipsum dolor sit amet consect sed aliquet et."}
                         </DisclosurePanel>
                    </Disclosure>
               )}

               {addNotes && (
                    <Link
                         href="/"
                         className="text-sm font-medium flex gap-[5px] text-blue-1 p-[14px] border-t border-black/[13%]"
                    >
                         <Image src="/icons/circle-plus.svg" alt="Add Notes" width={14} height={14} />
                         Add Notes
                    </Link>
               )}
          </div>
     );
}
