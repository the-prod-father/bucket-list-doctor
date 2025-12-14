export default function TipsIdeasLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-16">
          <div className="h-14 bg-gray-200 rounded-lg w-64 mx-auto mb-6 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded w-full max-w-xl mx-auto animate-pulse"></div>
        </div>

        {/* Categories Skeleton */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 w-28 bg-gray-200 rounded-full animate-pulse"></div>
          ))}
        </div>

        {/* Tips Grid Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-40 bg-gray-200 animate-pulse"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-200 rounded w-3/4 mb-3 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
