export function ProductDetailSkeleton() {
  return (
    <div className="p-6 animate-pulse">
      {/* Image */}
      <div className="h-80 bg-gray-200 rounded-lg mb-6" />

      {/* Title */}
      <div className="h-6 bg-gray-200 rounded w-3/4 mb-4" />

      {/* Description */}
      <div className="space-y-3 mb-6">
        <div className="h-4 bg-gray-200 rounded w-full" />
        <div className="h-4 bg-gray-200 rounded w-5/6" />
        <div className="h-4 bg-gray-200 rounded w-4/6" />
      </div>

      {/* Price */}
      <div className="h-6 bg-gray-200 rounded w-1/4 mb-6" />

      {/* Button */}
      <div className="h-10 bg-gray-200 rounded w-1/3" />
    </div>
  );
}
