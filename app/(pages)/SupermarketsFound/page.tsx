import { PrimaryButton } from "@/app/components/PrimaryButton";
import { SecondaryButton } from "@/app/components/SecondaryButton";
import Image from "next/image";


export default function SupermarketsFoundScreen() {
  return (
  <main className="min-h-screen flex flex-col relative pt-6 pb-5 px-6 container mx-auto bg-white-1">
    <div className="flex-1 flex flex-col h-auto">
        <div className="w-full flex items-center gap-3">
            <div className="flex-1 h-2 bg-black rounded-full"></div>
            <div className="flex-1 h-2 bg-black/10 rounded-full"></div>
            <div className="flex-1 h-2 bg-black/10 rounded-full"></div>
        </div>
        <div className="w-full pt-[30px]">
            <h1 className="text-[32px] pr-10 text-black leading-tight font-semibold font-sfpro mb-2">Supermarkets found near you</h1>
            <p className="text-lg text-gray-1 font-figtree">Select your preferred supermarkets</p>
        </div>
        <div className="w-full flex-1 mt-6">
          <div className="w-full rounded-[18px] p-2 bg-white">
            <ul className="space-y-[5px]">
              <li className="flex bg-green-2/15 p-[15px] rounded-xl items-center justify-between gap-6">
                <h4 className="text-lg text-black-1 font-medium font-figtree">Conad</h4>
                <Image src={"/icons/check-green-1.svg"} width={24} height={24}  alt=""/>
              </li>
                 <li className="flex bg-green-2/15 p-[15px] rounded-xl items-center justify-between gap-6">
                <h4 className="text-lg text-black-1 font-medium font-figtree">Ipercoop</h4>
                <Image src={"/icons/check-green-1.svg"} width={24} height={24}  alt=""/>
              </li>
                 <li className="flex bg-green-2/15 p-[15px] rounded-xl items-center justify-between gap-6">
                <h4 className="text-lg text-black-1 font-medium font-figtree">Pam</h4>
                <Image src={"/icons/check-green-1.svg"} width={24} height={24}  alt=""/>
              </li>
                  <li className="flex bg-green-2/15 p-[15px] rounded-xl items-center justify-between gap-6">
                <h4 className="text-lg text-black-1 font-medium font-figtree">Carrefour</h4>
                <Image src={"/icons/check-green-1.svg"} width={24} height={24}  alt=""/>
              </li>
                  <li className="flex bg-green-2/15 p-[15px] rounded-xl items-center justify-between gap-6">
                <h4 className="text-lg text-black-1 font-medium font-figtree">Supermercato</h4>
                <Image src={"/icons/check-green-1.svg"} width={24} height={24}  alt=""/>
              </li>
                   <li className="flex bg-green-2/15 p-[15px] rounded-xl items-center justify-between gap-6">
                <h4 className="text-lg text-black-1 font-medium font-figtree">Billa</h4>
                <Image src={"/icons/check-green-1.svg"} width={24} height={24}  alt=""/>
              </li>
            </ul>

          </div>

        </div>

            <div className="w-full">
              <SecondaryButton href="#">
                Confirm & Continue
              </SecondaryButton>
            </div>
    </div>
  </main>
  );
}
