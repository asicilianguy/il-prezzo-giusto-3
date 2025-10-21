"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SecondaryButton } from "@/app/components/SecondaryButton";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import { useLoginMutation } from "@/app/store/api/authApi";
import { useAppDispatch } from "@/app/store/hooks";
import { setCredentials } from "@/app/store/slices/authSlice";

type SignInModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function SignInModal({ isOpen, onClose }: SignInModalProps) {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [login, { isLoading, error }] = useLoginMutation();

  const [formData, setFormData] = useState({
    phone: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [validationError, setValidationError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError("");

    // Validation
    if (!formData.phone.trim()) {
      setValidationError("Phone number is required");
      return;
    }

    if (!formData.password) {
      setValidationError("Password is required");
      return;
    }

    // Format phone number
    let phoneNumber = formData.phone.trim();
    if (!phoneNumber.startsWith("+")) {
      phoneNumber = "+39" + phoneNumber.replace(/^0+/, "");
    }

    try {
      const result = await login({
        phone: phoneNumber,
        password: formData.password,
      }).unwrap();

      // Save credentials to Redux store
      dispatch(
        setCredentials({
          token: result.token,
          userId: result.userId,
        })
      );

      // Save token to localStorage for persistence
      localStorage.setItem("authToken", result.token);
      localStorage.setItem("userId", result.userId);

      // Redirect to offers page
      router.push("/AllOffers");
    } catch (err: any) {
      console.error("Login failed:", err);
      setValidationError(
        err?.data?.error?.message ||
          "Login failed. Please check your credentials."
      );
    }
  };

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
            <Dialog.Panel className="w-full max-w-[575px] bg-white sm:py-[35px] py-6 px-[25px] rounded-t-2xl shadow-xl">
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
                  <Image
                    src="/icons/circle-x.svg"
                    width={30}
                    height={30}
                    alt="Close"
                  />
                </button>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="w-full border border-black-1/5 rounded-[18px] bg-white p-[18px] form-box-shadow mt-3">
                  <p className="text-[11px] font-medium text-black-1 uppercase mb-4">
                    Enter Phone Number
                  </p>
                  <div className="w-full flex items-center gap-4">
                    <div className="inline-flex items-center gap-2">
                      <Image
                        src="/images/lang-flag-1.png"
                        width={20}
                        height={20}
                        alt="Flag"
                      />
                      <span className="text-lg font-medium font-figtree text-black-1/40">
                        +39
                      </span>
                    </div>
                    <input
                      placeholder="330 1234 567"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="flex-1 outline-0 text-lg text-black-1 font-medium font-figtree"
                      disabled={isLoading}
                    />
                  </div>

                  <div className="w-full my-[18px] border-t border-black-1/10"></div>

                  <div className="w-full">
                    <div className="w-full flex items-center justify-between gap-6 mb-4">
                      <p className="text-[11px] font-medium text-black-1 uppercase">
                        Enter password
                      </p>
                      <Link
                        href="/ForgotPassword"
                        className="text-[11px] font-medium font-figtree text-orange-3"
                      >
                        FORGOT PASSWORD?
                      </Link>
                    </div>
                    <div className="w-full relative flex items-center">
                      <input
                        placeholder="Password"
                        type={showPassword ? "text" : "password"}
                        value={formData.password}
                        onChange={(e) =>
                          setFormData({ ...formData, password: e.target.value })
                        }
                        className="flex-1 outline-0 text-lg text-black-1 font-medium font-figtree"
                        disabled={isLoading}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <Image
                          src={
                            showPassword
                              ? "/icons/eye-off.svg"
                              : "/icons/eye.svg"
                          }
                          width={20}
                          height={20}
                          alt="Toggle password"
                        />
                      </button>
                    </div>
                  </div>
                </div>

                {(validationError || error) && (
                  <div className="w-full flex items-center gap-2 mt-3 mb-5">
                    <Image
                      src="/icons/triangle-alert.svg"
                      width={20}
                      height={20}
                      alt="Alert"
                    />
                    <p className="text-sm text-red-1 leading-tight font-medium font-figtree">
                      {validationError ||
                        "The phone number or password you entered is incorrect. Please verify your details and try again."}
                    </p>
                  </div>
                )}

                <div className="w-full space-y-1 mt-5">
                  <SecondaryButton
                    type="submit"
                    disabled={isLoading}
                    className="w-full"
                  >
                    {isLoading ? "Signing In..." : "Sign In"}
                  </SecondaryButton>
                  <Link
                    href="/CreateAccount"
                    className="text-[17px] text-black-1 font-medium font-figtree flex py-3.5 px-6 items-center justify-center text-center rounded-full hover:bg-black/5"
                  >
                    Create Account
                  </Link>
                </div>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
