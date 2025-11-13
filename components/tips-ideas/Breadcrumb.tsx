import Link from 'next/link';

interface BreadcrumbProps {
  categoryName: string;
}

export default function Breadcrumb({ categoryName }: BreadcrumbProps) {
  return (
    <nav className="mb-6 sm:mb-8" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm">
        <li>
          <Link href="/" className="text-gray-600 hover:text-brand-blue transition-colors">
            Home
          </Link>
        </li>
        <li className="text-gray-400">/</li>
        <li>
          <Link href="/tips-ideas" className="text-gray-600 hover:text-brand-blue transition-colors">
            Tips & Advice
          </Link>
        </li>
        <li className="text-gray-400">/</li>
        <li className="text-gray-900 font-medium break-words" aria-current="page">
          {categoryName}
        </li>
      </ol>
    </nav>
  );
}

