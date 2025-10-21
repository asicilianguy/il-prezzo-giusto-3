import Link from "next/link";

interface SecondaryButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export function SecondaryButton({
  href,
  onClick,
  children,
  disabled = false,
  type = "button",
  className = "",
}: SecondaryButtonProps) {
  const baseClasses =
    "w-full text-[17px] text-black-1 font-medium font-figtree flex py-3.5 px-6 items-center justify-center text-center rounded-full bg-black-1/[6%] hover:bg-black-1/[10%] transition disabled:opacity-50 disabled:cursor-not-allowed";

  if (href && !disabled) {
    return (
      <Link href={href} className={`${baseClasses} ${className}`}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${className}`}
    >
      {children}
    </button>
  );
}
