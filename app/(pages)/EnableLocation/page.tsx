import { PrimaryButton } from "@/app/components/PrimaryButton";
import { SecondaryButton } from "@/app/components/SecondaryButton";
import Image from "next/image";


export default function EnableLocationScreen() {
  return (
  <main className="min-h-screen relative sm:pt-14 pt-6 container mx-auto flex-1 bg-[url(/images/landing-bg.png)] bg-center bg-no-repeat bg-cover">
    <div className="w-full">
      <div className="w-full flex items-center justify-center mb-4">
      <Image src={"/icons/logo-prezzo.svg"} width={148} height={90} alt="" />
      </div>

      <Image src={"/images/landing-main-img.png"} width={563} height={375} alt="" className="" />
      <div className="w-full absolute h-full top-0 bg-black/50 z-0"></div>
      <div className="w-full bg-white flex-1 text-center sm:py-[35px] z-20 py-6 absolute bottom-0 left-0 px-[25px] rounded-tl-[20px] rounded-tr-[20px]">
      <Image src={"/icons/Location-Icon.svg"} width={56} height={56} alt="" className="mx-auto mb-5" />
        <h1 className="text-[34px] px-2 font-figtree text-black-1 pb-4 leading-tight text-center font-semibold">Enable location to find offers near you</h1>
        <p className="text-xl text-gray-1 pb-9 text-center leading-snug font-figtree">We use your location only to show nearby supermarkets and their active discounts.</p>
        <div className="w-full space-y-3.5">
          <PrimaryButton href="#" >
            Continue without location
          </PrimaryButton>

          <SecondaryButton href="#">
            Enable Location
          </SecondaryButton>
        </div>
      </div>
    </div>
  </main>
  );
}
