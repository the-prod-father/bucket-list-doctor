export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-purple-50">
      <div className="text-center">
        {/* Animated logo/spinner */}
        <div className="relative w-20 h-20 mx-auto mb-6">
          <div className="absolute inset-0 border-4 border-brand-blue/20 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-transparent border-t-brand-blue rounded-full animate-spin"></div>
          <div className="absolute inset-2 border-4 border-transparent border-t-brand-purple rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }}></div>
        </div>
        <p className="text-gray-600 font-medium animate-pulse">Loading...</p>
      </div>
    </div>
  );
}
