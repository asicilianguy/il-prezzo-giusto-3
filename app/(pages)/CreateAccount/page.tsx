import { SecondaryButton } from "@/app/components/SecondaryButton";
import StoreCheckboxes from "@/app/components/StoreCheckboxes";
import Image from "next/image";
import Link from "next/link";


export default function CreateAccountScreen() {
  return (
    <main className="min-h-screen flex flex-col relative pt-6 pb-5 px-6 container mx-auto bg-white-1">
      <div className="flex-1 flex flex-col h-auto">
        <div className="w-full flex items-center gap-3">
          <div className="flex-1 h-2 bg-black rounded-full"></div>
          <div className="flex-1 h-2 bg-black rounded-full"></div>
          <div className="flex-1 h-2 bg-black/10 rounded-full"></div>
        </div>
        <div className="w-full pt-[30px] pb-6">
          <h1 className="text-[32px] pr-10 text-black leading-tight font-semibold font-sfpro mb-2">Create your account</h1>
          <p className="text-lg text-gray-1 font-figtree">Join us and start saving!</p>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-between w-full gap-6 mb-2.5">
            <h4 className="text-xl font-semibold font-figtree text-black-1 leading-tight">User Info</h4>
            <Link href={"#"} className="text-[17px] text-black-1 font-medium font-figtree underline">Already Have an Account</Link>
          </div>

          <div className="w-full border border-black-1/5 rounded-[18px] bg-white p-[18px] form-box-shadow">
            <form className="w-full">
              <p className="text-[11px] font-medium text-black-1 uppercase mb-4">enter Phone Number</p>
              <div className="w-full flex items-center gap-4">
                <div className="inline-flex items-center gap-2">
                  <Image src={"/images/lang-flag-1.png"} width={20} height={20} alt="" />
                  <span className="text-lg font-medium font-figtree text-black-1/40">+39</span>
                </div>
                <input placeholder="06 300 1234 546" type="number" className="flex-1 outline-0 text-lg text-black-1 font-medium font-figtree" />
              </div>
              <div className="w-full my-[18px] border-t border-black-1/10"></div>
              <div className="w-full">
                <div className="w-full flex items-center justify-between gap-6 mb-4">
                  <p className="text-[11px] font-medium text-black-1 uppercase">Enter password</p>
                </div>
                <div className="w-full relative flex items-center">
                  <input placeholder="06 300 1234 546" type="password" className="flex-1 outline-0 text-lg text-black-1 font-medium font-figtree" />
                  <button>
                    <Image src={"/icons/eye.svg"} width={20} height={20} alt="" />
                  </button>
                </div>

              </div>
            </form>
          </div>

          <div className="w-full flex items-center gap-2 mt-3 mb-6">
            <Image src={"/icons/triangle-alert.svg"} width={20} height={20} alt="" />
            <p className="text-sm text-red-1 leading-tight font-medium font-figtree">This phone number already exists. Please try a different one or log in with this number.</p>
          </div>

        </div>
        <h4 className="text-xl font-semibold text-black-1 font-figtree">Preferred Supermarkets</h4>
        <div className="w-full flex-1 mt-2.5 pb-[68px]">
          <div className="w-full rounded-[18px] p-2 overflow-auto bg-white max-h-[250px]">
            <StoreCheckboxes />
          </div>

        </div>

        <div className="w-full">
          <SecondaryButton href="#">
            Continue
          </SecondaryButton>
        </div>
      </div>
    </main>
  );
}
