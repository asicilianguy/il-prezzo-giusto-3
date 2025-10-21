"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";


export default function Header() {

  return (
    <div className="bg-white flex items-center justify-between pt-[24px] pb-[22px] px-[18px]">
      <div className="flex items-center gap-[15px]">
        <div className="max-w-[56px] w-full">
          <Image src={"/images/header-img.png"} width={56} height={44.59} alt="" />
        </div>
        <div className="flex-1 w-full">
          <h4 className="text-black-1 font-figtree mb-1 font-medium text-lg flex items-center gap-3">User Not Logged In <Image src={"/icons/right-arrow.svg"} width={5} height={10} alt="" /> </h4>
          <p className="text-gray-1 font-figtree font-normal text-sm">Welcome to Il Prezzo Giusto 👋</p>
        </div>
      </div>
      <Link href={"#"} className="flex items-center justify-center gradient rounded-[10px] w-[42px] h-[42px]"><Image src={"/icons/coffee.svg"} width={24} height={24} alt="" /></Link>
    </div>
  );
}
