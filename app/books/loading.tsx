export default function BooksLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-16">
          <div className="h-14 bg-gray-200 rounded-lg w-64 mx-auto mb-6 animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded w-full max-w-xl mx-auto animate-pulse"></div>
        </div>

        {/* Book Card Skeleton */}
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden mb-16">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            <div className="h-96 bg-gray-200 rounded-xl animate-pulse"></div>
            <div>
              <div className="h-10 bg-gray-200 rounded w-3/4 mb-4 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2 animate-pulse"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mb-6 animate-pulse"></div>
              <div className="h-12 bg-gray-200 rounded w-40 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
