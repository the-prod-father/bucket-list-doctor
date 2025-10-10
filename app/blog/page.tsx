export default function BlogPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold text-gray-900 mb-8">Blog</h1>
      <p className="text-xl text-gray-700 leading-relaxed mb-12">
        Insights on neuroscience, bucket lists, and living with purpose.
      </p>

      <div className="space-y-8">
        <div className="border-b border-gray-200 pb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Coming Soon</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Dr. D is preparing thought-provoking articles on brain science, adventure, and purposeful living. Check back soon for the latest insights!
          </p>
        </div>
      </div>
    </div>
  );
}
