"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

export default function VerificationCodeScreen() {
  // Make errorCode state "true" to show error screen
  const [errorCode, setErrorCode] = useState(false);
  const [values, setValues] = useState(["", "", "", "", "", ""]);
  const inputs = useRef<Array<HTMLInputElement | null>>([]);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (seconds > 0) {
      const timer = setTimeout(() => setSeconds(seconds - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [seconds]);

  function handleResend() {
    if (seconds === 0) {
      console.log("Resend code clicked");
      setSeconds(60);
      setErrorCode(false);
      setValues(["", "", "", "", "", ""]);
      inputs.current[0]?.focus();
    }
  }

  function handleChangeInput(index: number, value: string) {
    if (!/^[0-9]?$/.test(value)) return;
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    if (value && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    }

    if (newValues.every((v) => v !== "")) {
      const code = newValues.join("");
      console.log("Code entered:", code);
    }
  }

  function handleKeyDown(index: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  }

  return (
    <main className="min-h-screen flex flex-col relative pt-6 pb-5 px-6 container mx-auto bg-white-1">
      <div className="flex-1 flex flex-col h-auto">
        <div className="w-full flex items-center gap-3">
          <div className="flex-1 h-2 bg-black rounded-full"></div>
          <div className="flex-1 h-2 bg-black rounded-full"></div>
          <div className="flex-1 h-2 bg-black rounded-full"></div>
        </div>

        <div className="w-full pt-[30px]">
          <h1 className="text-[32px] pr-10 text-black leading-tight font-semibold font-sfpro mb-2">
            Enter verification code
          </h1>
          <p className="text-lg text-gray-1 font-figtree">
            We sent a 6-digit code to your email.
          </p>
        </div>

        <div className="w-full flex items-center gap-[25px] mt-6">
          {[0, 3].map((groupStart) => (
            <div
              key={groupStart}
              className={`flex-1 flex items-center bg-white border rounded-[14px] py-3 px-3.5 ${
                errorCode ? "border-red-2/20" : "border-black/5"
              }`}
            >
              {[0, 1, 2].map((offset) => {
                const i = groupStart + offset;
                return (
                  <input
                    key={i}
                    ref={(el) => { inputs.current[i] = el }}
                    type="text"
                    inputMode="numeric"
                    value={values[i]}
                    onChange={(e) => handleChangeInput(i, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(i, e)}
                    maxLength={1}
                    className={`flex-1 code-input text-[32px] outline-0 text-center font-semibold border-r w-1/3 px-2 ${
                      offset === 2 ? "border-none" : ""
                    } ${
                      errorCode
                        ? "text-red-2 border-red-2/10"
                        : "text-black-1 border-black/20"
                    }`}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {errorCode && (
          <div className="w-full flex items-center gap-2 mt-5 mb-6">
            <Image src={"/icons/triangle-alert.svg"} width={20} height={20} alt="" />
            <p className="text-sm text-red-1 leading-tight font-medium font-figtree">
              This code doesn’t seem right or has expired.
            </p>
          </div>
        )}

        <div className="w-full space-y-1 flex-1 flex flex-col justify-end">
          <button
            onClick={handleResend}
            disabled={seconds > 0}
            className={`text-[17px] font-medium font-figtree text-center py-4 flex items-center justify-center w-full ${
              seconds > 0 ? "text-black-1 cursor-not-allowed" : "text-black-1 transition"
            }`}
          >
            Resend code
            {seconds > 0 && <span>&nbsp;in {seconds} seconds</span>}
          </button>

          <button
            disabled={errorCode}
            className="text-[17px] disabled:bg-gray-1/20 disabled:opacity-50 text-black-1 font-medium font-figtree flex py-3.5 px-6 items-center justify-center text-center bg-green-2 border border-green-2 rounded-full"
          >
            Confirm & Continue
          </button>
        </div>
      </div>
    </main>
  );
}
