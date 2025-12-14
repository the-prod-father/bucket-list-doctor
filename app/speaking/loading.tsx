export default function SpeakingLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-navy to-brand-purple">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Hero Section Skeleton */}
        <div className="text-center mb-16">
          <div className="h-16 bg-white/10 rounded-lg w-96 mx-auto mb-6 animate-pulse"></div>
          <div className="h-6 bg-white/10 rounded w-full max-w-2xl mx-auto mb-4 animate-pulse"></div>
          <div className="h-6 bg-white/10 rounded w-3/4 max-w-xl mx-auto animate-pulse"></div>
        </div>

        {/* Pills Skeleton */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="h-10 w-32 bg-white/10 rounded-full animate-pulse"></div>
          ))}
        </div>

        {/* Content Skeleton */}
        <div className="grid md:grid-cols-2 gap-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white/10 rounded-2xl h-64 animate-pulse"></div>
          ))}
        </div>
      </div>
    </div>
  );
}
