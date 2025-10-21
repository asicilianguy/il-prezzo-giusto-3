"use client";

import Image from "next/image";
import Link from "next/link";

// ✅ Add `export` in front of the interface
export interface ProductOffer {
     store: string;
     aisle: string;
     productImage: string;
     productName: string;
     productWeight: string;
     badgeText: string;
     brandName: string;
     isPreferred: boolean;
     price: string;
     oldPrice: string;
     discount: string;
     expiry: string;
     isAdded: boolean;
}

export default function ProductOfferItem({
     store,
     aisle,
     productImage,
     productName,
     productWeight,
     badgeText,
     brandName,
     isPreferred,
     price,
     oldPrice,
     discount,
     expiry,
     isAdded,
}: ProductOffer) {
     return (
          <div className="rounded-[12px] mb-5 border border-black/[0.04] bg-white shadow-3xl">
               <div className="gradient3 rounded-t-[12px] px-3 py-2.5">
                    <ul className="flex items-center justify-between">
                         <li className="text-white font-figtree font-medium flex items-center gap-1.5">
                              <Image src="/icons/shop.svg" width={15} height={15} alt="Shop" />
                              {store}
                         </li>
                         <li className="text-white font-figtree font-medium flex items-center gap-1.5">
                              <Image src="/icons/tag-icon.svg" width={15} height={15} alt="Tag" />
                              Aisle: {aisle}
                         </li>
                    </ul>
               </div>

               <div className="px-[18px] py-5">
                    <div className="flex items-start justify-between">
                         <div className="flex items-center gap-4">
                              <span className="bg-gray1 border border-black/[0.04] flex items-center justify-center rounded-[10px] w-[50px] h-[50px]">
                                   <Image src={productImage} width={26} height={26} alt={productName} />
                              </span>
                              <div>
                                   <h4 className="text-black-1 font-figtree font-semibold text-lg">
                                        {productName}
                                   </h4>
                                   <p className="text-gray-1 font-medium text-[15px]">{productWeight}</p>
                              </div>
                         </div>
                         <span className="text-green-9 pt-[3px] font-figtree font-medium text-[11px] inline-flex items-center justify-center rounded-full h-6 w-[96px] bg-green-7">
                              {badgeText}
                         </span>
                    </div>

                    <div className="mt-[15px] border border-black/[0.12] rounded-full p-2 flex items-center justify-between">
                         <div className="flex items-center gap-2">
                              <span className="bg-gray-3 w-5 h-5 flex items-center rounded-full"></span>
                              <h4 className="text-black-1 font-medium text-sm">{brandName}</h4>
                         </div>
                         {isPreferred ? (
                              <Link
                                   href="/"
                                   className="flex items-center text-green-6 font-normal text-xs gap-[7px]"
                              >
                                   <Image src="/icons/check-icon.svg" width={10} height={10} alt="Check" />
                                   Preferred brand
                              </Link>
                         ) : (
                              <Link
                                   href="/"
                                   className="flex items-center text-blue-1 font-normal text-xs gap-[7px]"
                              >
                                   <Image src="/icons/pluse-icon.svg" width={10} height={10} alt="Add" />
                                   Add to preferred brands
                              </Link>
                         )}
                    </div>

                    <div className="flex items-center justify-between mt-6">
                         <div>
                              <div className="flex items-center gap-[7px] mb-1">
                                   <h4 className="text-black-1 font-figtree font-bold flex items-center gap-2.5">
                                        {price}
                                        <span className="text-gray-1 text-[15px] line-through">{oldPrice}</span>
                                   </h4>
                                   <span className="text-orange-4 flex items-center justify-center text-xs font-semibold">
                                        {discount}
                                   </span>
                              </div>
                              <p className="text-gray-1 text-xs">Expires in {expiry}</p>
                         </div>

                         <button
                              className={`text-sm font-medium rounded-full px-4 py-1 ${isAdded
                                   ? "bg-green-2 text-black-1"
                                   : "bg-gray-2 text-gray-1"
                                   }`}
                         >
                              {isAdded ? "Added" : "Add"}
                         </button>
                    </div>
               </div>
          </div>
     );
}
