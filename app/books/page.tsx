export default function BooksPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <h1 className="text-5xl font-bold text-gray-900 mb-8">Books</h1>
      <div className="prose prose-lg">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">The Neuroscience of a Bucket List</h2>
        <p className="text-xl text-gray-700 leading-relaxed mb-6">
          Discover how your bucket list isn't just a wish list—it's a powerful tool for brain health, cognitive enhancement, and purposeful living.
        </p>
        <div className="flex gap-4 mt-8">
          <a
            href="https://www.amazon.com/dp/B0DJHB1QSN"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-yellow hover:bg-yellow-400 text-gray-900 font-bold py-3 px-8 rounded-lg transition-all"
          >
            Buy on Amazon
          </a>
          <a
            href="https://www.bookbaby.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-navy hover:bg-brand-navy-light text-white font-bold py-3 px-8 rounded-lg transition-all"
          >
            Book Baby
          </a>
        </div>
      </div>
    </div>
  );
}
