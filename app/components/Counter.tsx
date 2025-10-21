"use client";

import Image from "next/image";

interface CounterProps {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  max?: number;
  disabled?: boolean;
}

export default function Counter({
  value,
  onChange,
  min = 1,
  max = 99,
  disabled = false,
}: CounterProps) {
  const handleIncrement = () => {
    if (value < max && !disabled) {
      onChange(value + 1);
    }
  };

  const handleDecrement = () => {
    if (value > min && !disabled) {
      onChange(value - 1);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={handleDecrement}
        disabled={disabled || value <= min}
        className="w-8 h-8 rounded-full border border-black/[0.1] flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Image src="/icons/minus.svg" width={16} height={16} alt="Decrease" />
      </button>
      <span className="text-base font-medium text-black-1 min-w-[24px] text-center">
        {value}
      </span>
      <button
        onClick={handleIncrement}
        disabled={disabled || value >= max}
        className="w-8 h-8 rounded-full border border-black/[0.1] flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <Image src="/icons/plus.svg" width={16} height={16} alt="Increase" />
      </button>
    </div>
  );
}
