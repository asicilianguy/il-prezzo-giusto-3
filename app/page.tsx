import Image from "next/image";
import { PrimaryButton } from "./components/PrimaryButton";
import { SecondaryButton } from "./components/SecondaryButton";

export default function Home() {
  return (
  <main className="min-h-screen pt-14 container mx-auto flex-1 bg-[url(/images/landing-bg.png)] bg-center bg-no-repeat bg-cover">
    <div className="w-full">
      <div className="w-full flex items-center justify-center mb-4">
      <Image src={"/icons/logo-prezzo.svg"} width={148} height={90} alt="" />
      </div>

      <Image src={"/images/landing-main-img.png"} width={563} height={375} alt="" />
      <div className="w-full max-w-[575px] bg-white flex-1 sm:py-[35px] py-6 px-[25px] absolute bottom-0 rounded-tl-[20px] rounded-tr-[20px]">
        <h1 className="text-[34px] px-2 font-figtree text-black-1 pb-4 leading-tight text-center font-bold">Making Grocery Shopping Effortless and Enjoyable</h1>
        <p className="text-lg text-gray-1 pb-9 text-center leading-snug font-figtree">Discover the best deals on your everyday groceries. Check out the top supermarket offers in your area.</p>
        <div className="w-full space-y-3.5">
          <PrimaryButton href="#" >
            Continue without location
          </PrimaryButton>

          <SecondaryButton href="#">
            Find offers near me
          </SecondaryButton>
        </div>
      </div>
    </div>
  </main>
  );
}
