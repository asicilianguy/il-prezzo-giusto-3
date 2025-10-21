import BottomNav from "@/app/components/BottomNav";
import Header from "@/app/components/Header";
import ProductOfferItem, { ProductOffer } from "@/app/components/ProductOfferItem";
import Image from "next/image";
import Link from "next/link";


export default function AllOffer() {
  const productOffers: ProductOffer[] = [
    {
      store: "Lidl",
      aisle: "fruit & vegetables",
      productImage: "/icons/apple.svg",
      productName: "Fresh Apples",
      productWeight: "500g · €11.98/kg",
      badgeText: "Recently Added",
      brandName: "Melinda",
      isPreferred: false,
      price: "$2.99",
      oldPrice: "$4.99",
      discount: "-60%",
      expiry: "3 days",
      isAdded: true,
    },
    {
      store: "Lidl",
      aisle: "fruit & vegetables",
      productImage: "/icons/drumstick.svg",
      productName: "Chicken Breast Fillets",
      productWeight: "500g · €11.98/kg",
      badgeText: "Recently Added",
      brandName: "AIA",
      isPreferred: true,
      price: "$2.99",
      oldPrice: "$4.99",
      discount: "-60%",
      expiry: "3 days",
      isAdded: false,
    },
    {
      store: "Aldi",
      aisle: "Bakery",
      productImage: "/icons/drumstick.svg",
      productName: "Whole Wheat Bread",
      productWeight: "700g · €2.40/kg",
      badgeText: "Freshly Baked",
      brandName: "Panificio",
      isPreferred: true,
      price: "$1.99",
      oldPrice: "$2.99",
      discount: "-33%",
      expiry: "5 days",
      isAdded: false,
    },
  ];
  return (
    <main className="min-h-screen flex flex-col relative container mx-auto bg-white-2">
      <Header />
      <div className="px-[25px] py-[18px] relative">
        <div className="absolute z-10 -top-11 left-0 w-full px-[18px]">
          <div className="mb-3.5 flex items-center justify-between rounded-[12px] bg-green-8 shadow-5xl py-2.5 px-3.5">
            <p className="flex items-center gap-2.5 text-white text-base leading-[130%] font-normal"><Image src={'/icons/circle-check-big.svg'} width={20} height={20} alt="" />Account Verified Successfully</p>
            <Link href={'.'} className="flex items-center justify-center"><Image src={'/icons/x.svg'} width={24} height={24} alt="" /></Link>
          </div>
          <div className="mb-3.5 flex items-center justify-between rounded-[12px] bg-green-8 shadow-5xl py-2.5 px-3.5">
            <p className="flex items-center gap-2.5 text-white text-base leading-[130%] font-normal"><Image src={'/icons/circle-check-big.svg'} width={20} height={20} alt="" />Account Verified Successfully</p>
            <Link href={'.'} className="flex items-center justify-center"><Image src={'/icons/x.svg'} width={24} height={24} alt="" /></Link>
          </div>
          <div className="flex items-center justify-between rounded-[12px] bg-green-8 shadow-5xl py-2.5 px-3.5">
            <p className="flex items-center gap-2.5 text-white text-base leading-[130%] font-normal"><Image src={'/icons/circle-check-big.svg'} width={20} height={20} alt="" />Account Verified Successfully</p>
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
          {productOffers.map((offer, index) => (
            <ProductOfferItem key={index} {...offer} />
          ))}
        </div>
        <BottomNav></BottomNav>
      </div>
    </main>
  );
}
