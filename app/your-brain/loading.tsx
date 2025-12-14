export default function YourBrainLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-16">
          <div className="h-14 bg-gray-200 rounded-lg w-72 mx-auto mb-6 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded w-full max-w-2xl mx-auto animate-pulse"></div>
        </div>

        {/* Brain diagram skeleton */}
        <div className="flex justify-center mb-16">
          <div className="w-64 h-64 bg-gray-200 rounded-full animate-pulse"></div>
        </div>

        {/* Cards Grid Skeleton */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-2xl shadow-xl p-6">
              <div className="h-16 w-16 bg-gray-200 rounded-full mx-auto mb-4 animate-pulse"></div>
              <div className="h-6 bg-gray-200 rounded w-3/4 mx-auto mb-3 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mx-auto animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
