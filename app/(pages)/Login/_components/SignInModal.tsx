"use client";

import { SecondaryButton } from "@/app/components/SecondaryButton";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";

type SignInModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 flex items-end justify-center">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-out duration-300"
            enterFrom="translate-y-full opacity-0"
            enterTo="translate-y-0 opacity-100"
            leave="transform transition ease-in duration-200"
            leaveFrom="translate-y-0 opacity-100"
            leaveTo="translate-y-full opacity-0"
          >
            <Dialog.Panel className="w-full bg-white sm:py-[35px] py-6 px-[25px] rounded-t-2xl shadow-xl">
              <div className="flex justify-between items-start gap-6">
                <div>
                  <Dialog.Title className="text-2xl font-figtree text-black-1 pb-1 leading-tight font-semibold">
                    Sign in to save your list
                  </Dialog.Title>
                  <p className="text-lg text-gray-1 pb-5 leading-snug font-figtree">
                    Keep track of your favorite offers
                  </p>
                </div>
                <button onClick={onClose}>
                  <Image src="/icons/circle-x.svg" width={30} height={30} alt="Close" />
                </button>
              </div>

              <div className="w-full border border-black-1/5 rounded-[18px] bg-white p-[18px] form-box-shadow mt-3">
                <form className="w-full">
                  <p className="text-[11px] font-medium text-black-1 uppercase mb-4">
                    Enter Phone Number
                  </p>
                  <div className="w-full flex items-center gap-4">
                    <div className="inline-flex items-center gap-2">
                      <Image src="/images/lang-flag-1.png" width={20} height={20} alt="Flag" />
                      <span className="text-lg font-medium font-figtree text-black-1/40">
                        +39
                      </span>
                    </div>
                    <input
                      placeholder="06 300 1234 546"
                      type="number"
                      className="flex-1 outline-0 text-lg text-black-1 font-medium font-figtree"
                    />
                  </div>

                  <div className="w-full my-[18px] border-t border-black-1/10"></div>

                  <div className="w-full">
                    <div className="w-full flex items-center justify-between gap-6 mb-4">
                      <p className="text-[11px] font-medium text-black-1 uppercase">
                        Enter password
                      </p>
                      <Link
                        href="#"
                        className="text-[11px] font-medium font-figtree text-orange-3"
                      >
                        FORGOT PASSWORD?
                      </Link>
                    </div>
                    <div className="w-full relative flex items-center">
                      <input
                        placeholder="Password"
                        type="password"
                        className="flex-1 outline-0 text-lg text-black-1 font-medium font-figtree"
                      />
                      <button type="button">
                        <Image src="/icons/eye.svg" width={20} height={20} alt="Show password" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div className="w-full flex items-center gap-2 mt-3 mb-5">
                <Image src="/icons/triangle-alert.svg" width={20} height={20} alt="Alert" />
                <p className="text-sm text-red-1 leading-tight font-medium font-figtree">
                  The phone number or password you entered is incorrect. Please verify your
                  details and try again.
                </p>
              </div>

              <div className="w-full space-y-1">
                <SecondaryButton href="#">Sign In</SecondaryButton>
                <Link
                  href="#"
                  className="text-[17px] text-black-1 font-medium font-figtree flex py-3.5 px-6 items-center justify-center text-center rounded-full"
                >
                  Create Account
                </Link>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
