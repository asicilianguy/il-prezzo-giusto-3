import Image from "next/image";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="text-center py-10">
      <div className="w-14 h-14 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
        <Image src="/icons/alert-circle.svg" width={24} height={24} alt="" />
      </div>
      <h3 className="text-lg font-semibold text-black-1 mb-2">Oops!</h3>
      <p className="text-gray-1 mb-4">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-6 py-2 bg-black text-white rounded-full font-medium text-sm"
        >
          Try Again
        </button>
      )}
    </div>
  );
}
