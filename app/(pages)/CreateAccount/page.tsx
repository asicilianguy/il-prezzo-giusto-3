"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SecondaryButton } from "@/app/components/SecondaryButton";
import StoreCheckboxes from "@/app/components/StoreCheckboxes";
import Image from "next/image";
import Link from "next/link";
import { useRegisterMutation } from "@/app/store/api/authApi";
import { useAppDispatch } from "@/app/store/hooks";
import { setCredentials } from "@/app/store/slices/authSlice";

export default function CreateAccountPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [register, { isLoading }] = useRegisterMutation();

  const [step, setStep] = useState(1); // 1: User Info, 2: Preferred Supermarkets
  const [formData, setFormData] = useState({
    phone: "",
    password: "",
    preferredSupermarkets: [] as string[],
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleNextStep = () => {
    setError("");

    // Validation for step 1
    if (step === 1) {
      if (!formData.phone.trim()) {
        setError("Phone number is required");
        return;
      }

      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }

      setStep(2);
    }
  };

  const handleSubmit = async () => {
    setError("");

    // Format phone number
    let phoneNumber = formData.phone.trim();
    if (!phoneNumber.startsWith("+")) {
      phoneNumber = "+39" + phoneNumber.replace(/^0+/, "");
    }

    try {
      const result = await register({
        phone: phoneNumber,
        password: formData.password,
        preferredSupermarkets: formData.preferredSupermarkets,
      }).unwrap();

      // Save credentials
      dispatch(
        setCredentials({
          token: result.token,
          userId: result.userId,
        })
      );

      localStorage.setItem("authToken", result.token);
      localStorage.setItem("userId", result.userId);

      // Redirect to offers
      router.push("/AllOffers");
    } catch (err: any) {
      console.error("Registration failed:", err);
      setError(
        err?.data?.error?.message || "Registration failed. Please try again."
      );
    }
  };

  return (
    <main className="min-h-screen flex flex-col relative pt-6 pb-5 px-6 container mx-auto bg-white-1">
      <div className="flex-1 flex flex-col h-auto">
        {/* Progress Bar */}
        <div className="w-full flex items-center gap-3">
          <div
            className={`flex-1 h-2 rounded-full ${
              step >= 1 ? "bg-black" : "bg-black/10"
            }`}
          ></div>
          <div
            className={`flex-1 h-2 rounded-full ${
              step >= 2 ? "bg-black" : "bg-black/10"
            }`}
          ></div>
        </div>

        <div className="w-full pt-[30px] pb-6">
          <h1 className="text-[32px] pr-10 text-black leading-tight font-semibold font-sfpro mb-2">
            {step === 1 ? "Create your account" : "Choose your supermarkets"}
          </h1>
          <p className="text-lg text-gray-1 font-figtree">
            {step === 1
              ? "Join us and start saving!"
              : "Select your favorite stores"}
          </p>
        </div>

        {/* Step 1: User Info */}
        {step === 1 && (
          <div className="w-full">
            <div className="flex items-center justify-between w-full gap-6 mb-2.5">
              <h4 className="text-xl font-semibold font-figtree text-black-1 leading-tight">
                User Info
              </h4>
              <Link
                href="/Login"
                className="text-[17px] text-black-1 font-medium font-figtree underline"
              >
                Already Have an Account
              </Link>
            </div>

            <div className="w-full border border-black-1/5 rounded-[18px] bg-white p-[18px] form-box-shadow">
              <form className="w-full">
                <p className="text-[11px] font-medium text-black-1 uppercase mb-4">
                  enter Phone Number
                </p>
                <div className="w-full flex items-center gap-4">
                  <div className="inline-flex items-center gap-2">
                    <Image
                      src="/images/lang-flag-1.png"
                      width={20}
                      height={20}
                      alt=""
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
                  />
                </div>

                <div className="w-full my-[18px] border-t border-black-1/10"></div>

                <div className="w-full">
                  <div className="w-full flex items-center justify-between gap-6 mb-4">
                    <p className="text-[11px] font-medium text-black-1 uppercase">
                      Enter password
                    </p>
                  </div>
                  <div className="w-full relative flex items-center">
                    <input
                      placeholder="Minimum 6 characters"
                      type={showPassword ? "text" : "password"}
                      value={formData.password}
                      onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })
                      }
                      className="flex-1 outline-0 text-lg text-black-1 font-medium font-figtree"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      <Image
                        src={
                          showPassword ? "/icons/eye-off.svg" : "/icons/eye.svg"
                        }
                        width={20}
                        height={20}
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </form>
            </div>

            {error && (
              <div className="w-full flex items-center gap-2 mt-3 mb-6">
                <Image
                  src="/icons/triangle-alert.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                <p className="text-sm text-red-1 leading-tight font-medium font-figtree">
                  {error}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Step 2: Preferred Supermarkets */}
        {step === 2 && (
          <div className="w-full flex-1">
            <h4 className="text-xl font-semibold text-black-1 font-figtree mb-2.5">
              Preferred Supermarkets
            </h4>
            <div className="w-full rounded-[18px] p-2 overflow-auto bg-white max-h-[400px]">
              <StoreCheckboxes
                selected={formData.preferredSupermarkets}
                onChange={(stores) =>
                  setFormData({ ...formData, preferredSupermarkets: stores })
                }
              />
            </div>

            {error && (
              <div className="w-full flex items-center gap-2 mt-3">
                <Image
                  src="/icons/triangle-alert.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                <p className="text-sm text-red-1 leading-tight font-medium font-figtree">
                  {error}
                </p>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="w-full mt-6 space-y-3">
          {step === 1 ? (
            <SecondaryButton onClick={handleNextStep}>Continue</SecondaryButton>
          ) : (
            <>
              <SecondaryButton onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? "Creating Account..." : "Create Account"}
              </SecondaryButton>
              <button
                onClick={() => setStep(1)}
                className="w-full text-[17px] text-black-1 font-medium font-figtree py-3.5 px-6 rounded-full hover:bg-black/5"
              >
                Back
              </button>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
