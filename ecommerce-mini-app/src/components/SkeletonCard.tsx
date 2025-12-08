export function SkeletonCard() {
  return (
    <div className="animate-pulse bg-white rounded-lg p-4 shadow-sm flex flex-col gap-4">
      <div className="h-40 bg-gray-200 rounded-md" />

      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-1/2" />

      <div className="h-6 bg-gray-200 rounded w-1/3 mt-2" />
    </div>
  );
}
