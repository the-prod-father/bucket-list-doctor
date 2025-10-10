export default function TipsIdeasPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold text-gray-900 mb-8">Tips & Ideas</h1>
      <p className="text-xl text-gray-700 leading-relaxed mb-12">
        Practical strategies and inspiration for creating and pursuing your bucket list.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-gray-100 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h3>
          <p className="text-gray-700">
            Learn how to create your first bucket list and set achievable goals that will transform your brain and life.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Adventure Ideas</h3>
          <p className="text-gray-700">
            Explore bucket list inspiration from around the world, from extreme sports to cultural experiences.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Brain Benefits</h3>
          <p className="text-gray-700">
            Understand the neuroscience behind each type of bucket list experience and how it impacts your brain.
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Making It Happen</h3>
          <p className="text-gray-700">
            Practical tips for budgeting, planning, and executing your bucket list dreams.
          </p>
        </div>
      </div>
    </div>
  );
}
