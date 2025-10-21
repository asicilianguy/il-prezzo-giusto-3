import { PrimaryButton } from "@/app/components/PrimaryButton";
import { SecondaryButton } from "@/app/components/SecondaryButton";
import Header from "@/app/components/Header";
import Image from "next/image";
import Link from "next/link";


export default function TimeCoffeeBreak() {
  return (
    <main className="min-h-screen flex flex-col relative container mx-auto bg-white-2">
      <Header />
      <div className="px-[25px] py-[18px] relative">
        <div className="absolute z-10 -top-11 left-0 w-full px-[18px]"> 
          <div className="flex items-center justify-between rounded-[12px] bg-green-8 shadow-5xl py-2.5 px-3.5">
            <p className="flex items-center gap-2.5 text-white text-base leading-[130%] font-normal"><Image src={'/icons/circle-check-big.svg'} width={20} height={20} alt="" />Brand added to favorites</p>
            <Link href={'.'} className="flex items-center justify-center"><Image src={'/icons/x.svg'} width={24} height={24} alt="" /></Link>
          </div>
        </div>
        <div className="">
          <h4 className="text-black-1 text-[22px] font-semibold leading-[130%] font-figtree">Explore All Offers</h4>
          <form className="flex items-center gap-2.5 mt-3">
            <div className="relative flex-1 w-full">
              <input type="text" className="text-gray-1 w-full placeholder:text-gray-1 font-figtree text-sm font-normal rounded-[1000px] gradient2 h-[42px] pl-[46px]" placeholder="Search products (e.g., tonno, latte, mozzarella)" />
              <span className="flex items-center justify-center absolute left-3.5 top-1/2 -translate-y-1/2"><Image src={'/icons/search.svg'} width={14} height={14} alt="" /> </span>
            </div>
            <Link href={"."} className="flex items-center justify-center rounded-[1000px] border border-solid/[0.15] w-[42px] h-[42px]"><Image src={'/icons/filter.svg'} width={20} height={20} alt="" /> </Link>
          </form>
        </div>
        <div className="mt-6">
          <div className="rounded-[12px] mb-5 border border-solid border-black/[0.04] bg-white shadow-3xl">
            <div className="gradient3 rounded-t-[12px] px-3 py-2.5">
              <ul className="flex items-center justify-between">
                <li className="text-white font-figtree font-medium leading-normal flex items-center gap-1.5">
                  <Image src={'/icons/shop.svg'} width={15} height={15} alt="" />
                  Lidl
                </li>
                <li className="text-white font-figtree font-medium leading-normal flex items-center gap-1.5">
                  <Image src={'/icons/tag-icon.svg'} width={15} height={15} alt="" />
                  Aisle: fruit & vegetables
                </li>
              </ul>
            </div>
            <div className="px-[18px] py-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <span className="bg-gray1 border border-solid border-black/[0.04] flex items-center justify-center rounded-[10px] w-[50px] h-[50px]">
                    <Image src={'/icons/apple.svg'} width={26} height={26} alt="" />
                  </span>
                  <div className="flex-1 w-full">
                    <h4 className="text-black-1 font-figtree font-semibold text-lg">Fresh Apples</h4>
                    <p className="text-gray-1 font-medium text-[15px] leading-normal">500g · €11.98/kg</p>
                  </div>
                </div>
                <span className="text-green-9 pt-[3px] font-figtree font-medium text-[11px] inline-flex items-center justify-center rounded-full h-6 w-[96px] bg-green-7">Recently Added</span>
              </div>
              <div className="mt-[15px] border border-solid border-black/[0.12] rounded-full p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-3 w-5 h-5 flex items-center rounded-full"></span>
                  <h4 className="text-black-1 font-medium text-sm leading-normal">Melinda</h4>
                </div>
                <Link href={"/"} className="flex items-center text-blue-1 font-normal font-figtree text-xs gap-[7px]"> <Image src={'/icons/pluse-icon.svg'} width={10} height={10} alt="" /> Add to preferred brands</Link>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="">
                  <div className="flex items-center gap-[7px] mb-1">
                    <h4 className="text-black-1 font-figtree font-bold leading-[130%] flex items-center gap-2.5">$2.99 <span className="text-gray-1 font-normal text-[15px] leading-[130%] inline-flex line-through">$4.99</span> </h4>
                    <span className="text-orange-4 flex items-center justify-center font-medium text-[11px] bg-orange-3/[0.14] rounded-full h-5 w-[39px]">-60%</span>
                  </div>
                  <p className="text-gray-1 font-normal text-[13px] leading-[130%] gap-1.5 flex items-center"><Image src={'/icons/clock.svg'} width={16} height={16} alt="" /> Ends in 3 days</p>
                </div>
                <div className="flex items-center justify-center gap-[11px] text-green-6 font-medium text-[15px] leading-normal bg-green-6/[0.10] rounded-full h-10 w-[155px]"><Image src={'/icons/check-icon.svg'} width={12} height={9} alt="" />Added</div>
              </div>
            </div>
          </div>
          <div className="rounded-[12px] mb-5 border border-solid border-black/[0.04] bg-white shadow-3xl">
            <div className="gradient3 rounded-t-[12px] px-3 py-2.5">
              <ul className="flex items-center justify-between">
                <li className="text-white font-figtree font-medium leading-normal flex items-center gap-1.5">
                  <Image src={'/icons/shop.svg'} width={15} height={15} alt="" />
                  Lidl
                </li>
                <li className="text-white font-figtree font-medium leading-normal flex items-center gap-1.5">
                  <Image src={'/icons/tag-icon.svg'} width={15} height={15} alt="" />
                  Aisle: fruit & vegetables
                </li>
              </ul>
            </div>
            <div className="px-[18px] py-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <span className="bg-gray1 border border-solid border-black/[0.04] flex items-center justify-center rounded-[10px] w-[50px] h-[50px]">
                    <Image src={'/icons/drumstick.svg'} width={26} height={26} alt="" />
                  </span>
                  <div className="flex-1 w-full">
                    <h4 className="text-black-1 font-figtree font-semibold text-lg">Chicken Breast Fillets</h4>
                    <p className="text-gray-1 font-medium text-[15px] leading-normal">500g · €11.98/kg</p>
                  </div>
                </div>
                <span className="text-green-9 pt-[3px] font-figtree font-medium text-[11px] inline-flex items-center justify-center rounded-full h-6 w-[96px] bg-green-7">Recently Added</span>
              </div>
              <div className="mt-[15px] border border-solid border-black/[0.12] rounded-full p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-3 w-5 h-5 flex items-center rounded-full"></span>
                  <h4 className="text-black-1 font-medium text-sm leading-normal">AIA</h4>
                </div>
                <Link href={"/"} className="flex items-center text-green-6 font-normal font-figtree text-xs gap-[7px]"> <Image src={'/icons/check-icon.svg'} width={10} height={10} alt="" /> Preferred brand</Link>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="">
                  <div className="flex items-center gap-[7px] mb-1">
                    <h4 className="text-black-1 font-figtree font-bold leading-[130%] flex items-center gap-2.5">$2.99 <span className="text-gray-1 font-normal text-[15px] leading-[130%] inline-flex line-through">$4.99</span> </h4>
                    <span className="text-orange-4 flex items-center justify-center font-medium text-[11px] bg-orange-3/[0.14] rounded-full h-5 w-[39px]">-60%</span>
                  </div>
                  <p className="text-gray-1 font-normal text-[13px] leading-[130%] gap-1.5 flex items-center"><Image src={'/icons/clock.svg'} width={16} height={16} alt="" /> Ends in 3 days</p>
                </div>
                <Link href={'/'} className="flex items-center justify-center gap-[11px] text-black-1 border border-solid border-black-1 font-medium text-[15px] leading-normal rounded-full h-10 w-[155px]"><Image src={'/icons/bag.svg'} width={18} height={18} alt="" />Add to Bag</Link>
              </div>
            </div>
          </div>
          <div className="rounded-[12px] mb-5 border border-solid border-black/[0.04] bg-white shadow-3xl">
            <div className="gradient3 rounded-t-[12px] px-3 py-2.5">
              <ul className="flex items-center justify-between">
                <li className="text-white font-figtree font-medium leading-normal flex items-center gap-1.5">
                  <Image src={'/icons/shop.svg'} width={15} height={15} alt="" />
                  Lidl
                </li>
                <li className="text-white font-figtree font-medium leading-normal flex items-center gap-1.5">
                  <Image src={'/icons/tag-icon.svg'} width={15} height={15} alt="" />
                  Aisle: fruit & vegetables
                </li>
              </ul>
            </div>
            <div className="px-[18px] py-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <span className="bg-gray1 border border-solid border-black/[0.04] flex items-center justify-center rounded-[10px] w-[50px] h-[50px]">
                    <Image src={'/icons/drumstick.svg'} width={26} height={26} alt="" />
                  </span>
                  <div className="flex-1 w-full">
                    <h4 className="text-black-1 font-figtree font-semibold text-lg">Chicken Breast Fillets</h4>
                    <p className="text-gray-1 font-medium text-[15px] leading-normal">500g · €11.98/kg</p>
                  </div>
                </div>
                <span className="text-green-9 pt-[3px] font-figtree font-medium text-[11px] inline-flex items-center justify-center rounded-full h-6 w-[96px] bg-green-7">Recently Added</span>
              </div>
              <div className="mt-[15px] border border-solid border-black/[0.12] rounded-full p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-3 w-5 h-5 flex items-center rounded-full"></span>
                  <h4 className="text-black-1 font-medium text-sm leading-normal">AIA</h4>
                </div>
                <Link href={"/"} className="flex items-center text-green-6 font-normal font-figtree text-xs gap-[7px]"> <Image src={'/icons/check-icon.svg'} width={10} height={10} alt="" /> Preferred brand</Link>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="">
                  <div className="flex items-center gap-[7px] mb-1">
                    <h4 className="text-black-1 font-figtree font-bold leading-[130%] flex items-center gap-2.5">$2.99 <span className="text-gray-1 font-normal text-[15px] leading-[130%] inline-flex line-through">$4.99</span> </h4>
                    <span className="text-orange-4 flex items-center justify-center font-medium text-[11px] bg-orange-3/[0.14] rounded-full h-5 w-[39px]">-60%</span>
                  </div>
                  <p className="text-gray-1 font-normal text-[13px] leading-[130%] gap-1.5 flex items-center"><Image src={'/icons/clock.svg'} width={16} height={16} alt="" /> Ends in 3 days</p>
                </div>
                <Link href={'/'} className="flex items-center justify-center gap-[11px] text-black-1 border border-solid border-black-1 font-medium text-[15px] leading-normal rounded-full h-10 w-[155px]"><Image src={'/icons/bag.svg'} width={18} height={18} alt="" />Add to Bag</Link>
              </div>
            </div>
          </div>
          <div className="rounded-[12px] mb-5 border border-solid border-black/[0.04] bg-white shadow-3xl">
            <div className="gradient3 rounded-t-[12px] px-3 py-2.5">
              <ul className="flex items-center justify-between">
                <li className="text-white font-figtree font-medium leading-normal flex items-center gap-1.5">
                  <Image src={'/icons/shop.svg'} width={15} height={15} alt="" />
                  Lidl
                </li>
                <li className="text-white font-figtree font-medium leading-normal flex items-center gap-1.5">
                  <Image src={'/icons/tag-icon.svg'} width={15} height={15} alt="" />
                  Aisle: fruit & vegetables
                </li>
              </ul>
            </div>
            <div className="px-[18px] py-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <span className="bg-gray1 border border-solid border-black/[0.04] flex items-center justify-center rounded-[10px] w-[50px] h-[50px]">
                    <Image src={'/icons/drumstick.svg'} width={26} height={26} alt="" />
                  </span>
                  <div className="flex-1 w-full">
                    <h4 className="text-black-1 font-figtree font-semibold text-lg">Chicken Breast Fillets</h4>
                    <p className="text-gray-1 font-medium text-[15px] leading-normal">500g · €11.98/kg</p>
                  </div>
                </div>
                <span className="text-green-9 pt-[3px] font-figtree font-medium text-[11px] inline-flex items-center justify-center rounded-full h-6 w-[96px] bg-green-7">Recently Added</span>
              </div>
              <div className="mt-[15px] border border-solid border-black/[0.12] rounded-full p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-3 w-5 h-5 flex items-center rounded-full"></span>
                  <h4 className="text-black-1 font-medium text-sm leading-normal">AIA</h4>
                </div>
                <Link href={"/"} className="flex items-center text-green-6 font-normal font-figtree text-xs gap-[7px]"> <Image src={'/icons/check-icon.svg'} width={10} height={10} alt="" /> Preferred brand</Link>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="">
                  <div className="flex items-center gap-[7px] mb-1">
                    <h4 className="text-black-1 font-figtree font-bold leading-[130%] flex items-center gap-2.5">$2.99 <span className="text-gray-1 font-normal text-[15px] leading-[130%] inline-flex line-through">$4.99</span> </h4>
                    <span className="text-orange-4 flex items-center justify-center font-medium text-[11px] bg-orange-3/[0.14] rounded-full h-5 w-[39px]">-60%</span>
                  </div>
                  <p className="text-gray-1 font-normal text-[13px] leading-[130%] gap-1.5 flex items-center"><Image src={'/icons/clock.svg'} width={16} height={16} alt="" /> Ends in 3 days</p>
                </div>
                <Link href={'/'} className="flex items-center justify-center gap-[11px] text-black-1 border border-solid border-black-1 font-medium text-[15px] leading-normal rounded-full h-10 w-[155px]"><Image src={'/icons/bag.svg'} width={18} height={18} alt="" />Add to Bag</Link>
              </div>
            </div>
          </div>
          <div className="rounded-[12px] mb-5 border border-solid border-black/[0.04] bg-white shadow-3xl">
            <div className="gradient3 rounded-t-[12px] px-3 py-2.5">
              <ul className="flex items-center justify-between">
                <li className="text-white font-figtree font-medium leading-normal flex items-center gap-1.5">
                  <Image src={'/icons/shop.svg'} width={15} height={15} alt="" />
                  Lidl
                </li>
                <li className="text-white font-figtree font-medium leading-normal flex items-center gap-1.5">
                  <Image src={'/icons/tag-icon.svg'} width={15} height={15} alt="" />
                  Aisle: fruit & vegetables
                </li>
              </ul>
            </div>
            <div className="px-[18px] py-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <span className="bg-gray1 border border-solid border-black/[0.04] flex items-center justify-center rounded-[10px] w-[50px] h-[50px]">
                    <Image src={'/icons/drumstick.svg'} width={26} height={26} alt="" />
                  </span>
                  <div className="flex-1 w-full">
                    <h4 className="text-black-1 font-figtree font-semibold text-lg">Chicken Breast Fillets</h4>
                    <p className="text-gray-1 font-medium text-[15px] leading-normal">500g · €11.98/kg</p>
                  </div>
                </div>
                <span className="text-green-9 pt-[3px] font-figtree font-medium text-[11px] inline-flex items-center justify-center rounded-full h-6 w-[96px] bg-green-7">Recently Added</span>
              </div>
              <div className="mt-[15px] border border-solid border-black/[0.12] rounded-full p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-3 w-5 h-5 flex items-center rounded-full"></span>
                  <h4 className="text-black-1 font-medium text-sm leading-normal">AIA</h4>
                </div>
                <Link href={"/"} className="flex items-center text-green-6 font-normal font-figtree text-xs gap-[7px]"> <Image src={'/icons/check-icon.svg'} width={10} height={10} alt="" /> Preferred brand</Link>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="">
                  <div className="flex items-center gap-[7px] mb-1">
                    <h4 className="text-black-1 font-figtree font-bold leading-[130%] flex items-center gap-2.5">$2.99 <span className="text-gray-1 font-normal text-[15px] leading-[130%] inline-flex line-through">$4.99</span> </h4>
                    <span className="text-orange-4 flex items-center justify-center font-medium text-[11px] bg-orange-3/[0.14] rounded-full h-5 w-[39px]">-60%</span>
                  </div>
                  <p className="text-gray-1 font-normal text-[13px] leading-[130%] gap-1.5 flex items-center"><Image src={'/icons/clock.svg'} width={16} height={16} alt="" /> Ends in 3 days</p>
                </div>
                <Link href={'/'} className="flex items-center justify-center gap-[11px] text-black-1 border border-solid border-black-1 font-medium text-[15px] leading-normal rounded-full h-10 w-[155px]"><Image src={'/icons/bag.svg'} width={18} height={18} alt="" />Add to Bag</Link>
              </div>
            </div>
          </div>
          <div className="rounded-[12px] mb-5 border border-solid border-black/[0.04] bg-white shadow-3xl">
            <div className="gradient3 rounded-t-[12px] px-3 py-2.5">
              <ul className="flex items-center justify-between">
                <li className="text-white font-figtree font-medium leading-normal flex items-center gap-1.5">
                  <Image src={'/icons/shop.svg'} width={15} height={15} alt="" />
                  Lidl
                </li>
                <li className="text-white font-figtree font-medium leading-normal flex items-center gap-1.5">
                  <Image src={'/icons/tag-icon.svg'} width={15} height={15} alt="" />
                  Aisle: fruit & vegetables
                </li>
              </ul>
            </div>
            <div className="px-[18px] py-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <span className="bg-gray1 border border-solid border-black/[0.04] flex items-center justify-center rounded-[10px] w-[50px] h-[50px]">
                    <Image src={'/icons/drumstick.svg'} width={26} height={26} alt="" />
                  </span>
                  <div className="flex-1 w-full">
                    <h4 className="text-black-1 font-figtree font-semibold text-lg">Chicken Breast Fillets</h4>
                    <p className="text-gray-1 font-medium text-[15px] leading-normal">500g · €11.98/kg</p>
                  </div>
                </div>
                <span className="text-green-9 pt-[3px] font-figtree font-medium text-[11px] inline-flex items-center justify-center rounded-full h-6 w-[96px] bg-green-7">Recently Added</span>
              </div>
              <div className="mt-[15px] border border-solid border-black/[0.12] rounded-full p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-3 w-5 h-5 flex items-center rounded-full"></span>
                  <h4 className="text-black-1 font-medium text-sm leading-normal">AIA</h4>
                </div>
                <Link href={"/"} className="flex items-center text-green-6 font-normal font-figtree text-xs gap-[7px]"> <Image src={'/icons/check-icon.svg'} width={10} height={10} alt="" /> Preferred brand</Link>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="">
                  <div className="flex items-center gap-[7px] mb-1">
                    <h4 className="text-black-1 font-figtree font-bold leading-[130%] flex items-center gap-2.5">$2.99 <span className="text-gray-1 font-normal text-[15px] leading-[130%] inline-flex line-through">$4.99</span> </h4>
                    <span className="text-orange-4 flex items-center justify-center font-medium text-[11px] bg-orange-3/[0.14] rounded-full h-5 w-[39px]">-60%</span>
                  </div>
                  <p className="text-gray-1 font-normal text-[13px] leading-[130%] gap-1.5 flex items-center"><Image src={'/icons/clock.svg'} width={16} height={16} alt="" /> Ends in 3 days</p>
                </div>
                <Link href={'/'} className="flex items-center justify-center gap-[11px] text-black-1 border border-solid border-black-1 font-medium text-[15px] leading-normal rounded-full h-10 w-[155px]"><Image src={'/icons/bag.svg'} width={18} height={18} alt="" />Add to Bag</Link>
              </div>
            </div>
          </div>
          <div className="rounded-[12px] mb-5 border border-solid border-black/[0.04] bg-white shadow-3xl">
            <div className="gradient3 rounded-t-[12px] px-3 py-2.5">
              <ul className="flex items-center justify-between">
                <li className="text-white font-figtree font-medium leading-normal flex items-center gap-1.5">
                  <Image src={'/icons/shop.svg'} width={15} height={15} alt="" />
                  Lidl
                </li>
                <li className="text-white font-figtree font-medium leading-normal flex items-center gap-1.5">
                  <Image src={'/icons/tag-icon.svg'} width={15} height={15} alt="" />
                  Aisle: fruit & vegetables
                </li>
              </ul>
            </div>
            <div className="px-[18px] py-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <span className="bg-gray1 border border-solid border-black/[0.04] flex items-center justify-center rounded-[10px] w-[50px] h-[50px]">
                    <Image src={'/icons/drumstick.svg'} width={26} height={26} alt="" />
                  </span>
                  <div className="flex-1 w-full">
                    <h4 className="text-black-1 font-figtree font-semibold text-lg">Chicken Breast Fillets</h4>
                    <p className="text-gray-1 font-medium text-[15px] leading-normal">500g · €11.98/kg</p>
                  </div>
                </div>
                <span className="text-green-9 pt-[3px] font-figtree font-medium text-[11px] inline-flex items-center justify-center rounded-full h-6 w-[96px] bg-green-7">Recently Added</span>
              </div>
              <div className="mt-[15px] border border-solid border-black/[0.12] rounded-full p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-3 w-5 h-5 flex items-center rounded-full"></span>
                  <h4 className="text-black-1 font-medium text-sm leading-normal">AIA</h4>
                </div>
                <Link href={"/"} className="flex items-center text-green-6 font-normal font-figtree text-xs gap-[7px]"> <Image src={'/icons/check-icon.svg'} width={10} height={10} alt="" /> Preferred brand</Link>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="">
                  <div className="flex items-center gap-[7px] mb-1">
                    <h4 className="text-black-1 font-figtree font-bold leading-[130%] flex items-center gap-2.5">$2.99 <span className="text-gray-1 font-normal text-[15px] leading-[130%] inline-flex line-through">$4.99</span> </h4>
                    <span className="text-orange-4 flex items-center justify-center font-medium text-[11px] bg-orange-3/[0.14] rounded-full h-5 w-[39px]">-60%</span>
                  </div>
                  <p className="text-gray-1 font-normal text-[13px] leading-[130%] gap-1.5 flex items-center"><Image src={'/icons/clock.svg'} width={16} height={16} alt="" /> Ends in 3 days</p>
                </div>
                <Link href={'/'} className="flex items-center justify-center gap-[11px] text-black-1 border border-solid border-black-1 font-medium text-[15px] leading-normal rounded-full h-10 w-[155px]"><Image src={'/icons/bag.svg'} width={18} height={18} alt="" />Add to Bag</Link>
              </div>
            </div>
          </div>
          <div className="rounded-[12px] mb-5 border border-solid border-black/[0.04] bg-white shadow-3xl">
            <div className="gradient3 rounded-t-[12px] px-3 py-2.5">
              <ul className="flex items-center justify-between">
                <li className="text-white font-figtree font-medium leading-normal flex items-center gap-1.5">
                  <Image src={'/icons/shop.svg'} width={15} height={15} alt="" />
                  Lidl
                </li>
                <li className="text-white font-figtree font-medium leading-normal flex items-center gap-1.5">
                  <Image src={'/icons/tag-icon.svg'} width={15} height={15} alt="" />
                  Aisle: fruit & vegetables
                </li>
              </ul>
            </div>
            <div className="px-[18px] py-5">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-4">
                  <span className="bg-gray1 border border-solid border-black/[0.04] flex items-center justify-center rounded-[10px] w-[50px] h-[50px]">
                    <Image src={'/icons/drumstick.svg'} width={26} height={26} alt="" />
                  </span>
                  <div className="flex-1 w-full">
                    <h4 className="text-black-1 font-figtree font-semibold text-lg">Chicken Breast Fillets</h4>
                    <p className="text-gray-1 font-medium text-[15px] leading-normal">500g · €11.98/kg</p>
                  </div>
                </div>
                <span className="text-green-9 pt-[3px] font-figtree font-medium text-[11px] inline-flex items-center justify-center rounded-full h-6 w-[96px] bg-green-7">Recently Added</span>
              </div>
              <div className="mt-[15px] border border-solid border-black/[0.12] rounded-full p-2 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-3 w-5 h-5 flex items-center rounded-full"></span>
                  <h4 className="text-black-1 font-medium text-sm leading-normal">AIA</h4>
                </div>
                <Link href={"/"} className="flex items-center text-green-6 font-normal font-figtree text-xs gap-[7px]"> <Image src={'/icons/check-icon.svg'} width={10} height={10} alt="" /> Preferred brand</Link>
              </div>
              <div className="flex items-center justify-between mt-6">
                <div className="">
                  <div className="flex items-center gap-[7px] mb-1">
                    <h4 className="text-black-1 font-figtree font-bold leading-[130%] flex items-center gap-2.5">$2.99 <span className="text-gray-1 font-normal text-[15px] leading-[130%] inline-flex line-through">$4.99</span> </h4>
                    <span className="text-orange-4 flex items-center justify-center font-medium text-[11px] bg-orange-3/[0.14] rounded-full h-5 w-[39px]">-60%</span>
                  </div>
                  <p className="text-gray-1 font-normal text-[13px] leading-[130%] gap-1.5 flex items-center"><Image src={'/icons/clock.svg'} width={16} height={16} alt="" /> Ends in 3 days</p>
                </div>
                <Link href={'/'} className="flex items-center justify-center gap-[11px] text-black-1 border border-solid border-black-1 font-medium text-[15px] leading-normal rounded-full h-10 w-[155px]"><Image src={'/icons/bag.svg'} width={18} height={18} alt="" />Add to Bag</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed left-1/2 -translate-x-1/2 bottom-6 bg-black-1 inline-flex items-center justify-center rounded-full shadow-4xl p-[5px]">
          <ul className="flex items-center gap-2.5">
            <li>
              <Link href={"/"} className="flex items-center justify-center relative gap-1.5 bg-green-2 rounded-full h-11 px-[15px]"><Image src={'/icons/bag-happy.svg'} width={24} height={24} alt="" /><span className="text-black-1 text-sm font-medium tracking-[0.1px] inline-flex items-center">Offers</span></Link>
            </li>
            <li>
              <Link href={"/"} className="flex items-center justify-center relative h-11 px-[15px]"><Image src={'/icons/bag-2.svg'} width={24} height={24} alt="" /><span className="absolute right-2.5 top-2  w-[15px] h-[15px] inline-flex items-center justify-center rounded-full text-black-1 text-[10px] font-medium bg-green-2 border border-solid border-black-1 " >7</span></Link>
            </li>
            <li>
              <Link href={"/"} className="flex items-center justify-center relative h-11 px-[15px]"><Image src={'/icons/user.svg'} width={24} height={24} alt="" /></Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full absolute h-full top-0 bg-black/50 z-[100]"></div>
      <div className="w-full bg-white flex-1 text-center sm:py-[35px] z-[1000] py-6 max-w-[575px] fixed bottom-0 left-1/2 -translate-x-1/2 px-[25px] rounded-tl-[20px] rounded-tr-[20px]">
        <Image src={"/icons/telegram.svg"} width={56} height={56} alt="" className="mx-auto mb-5" />
        <h1 className="text-[34px] px-2 font-figtree text-black-1 pb-4 leading-tight text-center font-semibold">Telegram Required</h1>
        <p className="text-xl text-gray-1 pb-9 text-center leading-snug font-figtree">To receive push notifications about new offers from your favorite brands and supermarkets, you must have Telegram installed on your device.</p>
        <div className="w-full space-y-3.5">
          <PrimaryButton href="#" >
            Don’t Show again
          </PrimaryButton>

          <SecondaryButton href="#">
            Download Telegram
          </SecondaryButton>
        </div>
      </div>
    </main>
  );
}
