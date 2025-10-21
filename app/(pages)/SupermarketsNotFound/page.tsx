import { PrimaryButton } from "@/app/components/PrimaryButton";
import { SecondaryButton } from "@/app/components/SecondaryButton";
import Image from "next/image";


export default function SupermarketsNotFoundScreen() {
  return (
  <main className="min-h-screen flex flex-col relative pt-6 pb-5 px-6 container mx-auto bg-white-1">
    <div className="flex-1 flex flex-col h-auto">
        <div className="w-full flex items-center gap-3">
            <div className="flex-1 h-2 bg-black rounded-full"></div>
            <div className="flex-1 h-2 bg-black/10 rounded-full"></div>
            <div className="flex-1 h-2 bg-black/10 rounded-full"></div>
        </div>
        <div className="w-full pt-[30px]">
            <h1 className="text-[32px] text-black leading-tight font-semibold font-sfpro mb-2">No Supermarkets Found</h1>
            <p className="text-lg text-gray-1 font-figtree">We couldn't find any supermarkets near you. You can add them manually or browse all offers.</p>
        </div>
        <div className="w-full flex-1 my-auto flex items-center justify-center">
            <Image src={"/icons/map-pin-container.svg"} width={100} height={100} alt="" />
        </div>

             <div className="w-full space-y-3.5">
                  <PrimaryButton href="#" >
                    Browser all offers
                  </PrimaryButton>
        
                  <SecondaryButton href="#">
                    Add Supermarkets Manually
                  </SecondaryButton>
                </div>
    </div>
  </main>
  );
}
