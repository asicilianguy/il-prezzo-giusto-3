export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="w-10 h-10 border-4 border-black/[0.1] border-t-black rounded-full animate-spin" />
    </div>
  );
}
