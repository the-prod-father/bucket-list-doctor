export default function AboutLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section Skeleton */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Image skeleton */}
          <div className="w-80 h-80 bg-gray-200 rounded-full mx-auto animate-pulse"></div>

          {/* Text skeleton */}
          <div>
            <div className="h-12 bg-gray-200 rounded w-3/4 mb-6 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-3 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-full mb-3 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4 mb-6 animate-pulse"></div>
            <div className="h-12 bg-gray-200 rounded w-48 animate-pulse"></div>
          </div>
        </div>

        {/* Stats skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white rounded-xl p-6 shadow-lg">
              <div className="h-12 w-12 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-20 mx-auto mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-16 mx-auto animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
