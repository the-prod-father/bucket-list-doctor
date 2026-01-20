'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Dr. D' },
    { href: '/books', label: 'Books' },
    { href: '/tips-ideas', label: 'Tips & Advice' },
    { href: '/your-brain', label: 'Your Brain' },
    { href: '/speaking', label: 'Speaking' },
    { href: '/newsletter', label: 'Articles' },
    { href: '/videosandmedia', label: 'Videos & Media' },
  ];

  // Prefetch all routes on mount for instant navigation
  useEffect(() => {
    navLinks.forEach(link => {
      router.prefetch(link.href);
    });
  }, [router]);


  return (
    <nav className="sticky top-0 z-50 bg-brand-navy shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center group flex-shrink-0 min-w-0 pr-2 sm:pr-4">
            <div className="relative h-10 sm:h-12 md:h-14 lg:h-16 w-auto flex-shrink-0 transition-all duration-300 group-hover:scale-105">
              <Image
                src="/images/logos/bld-lite-transparent-cropped.png"
                alt="Bucket List Doctor™"
                width={280}
                height={80}
                className="h-full w-auto object-contain drop-shadow-lg"
                priority
              />
            </div>
          </Link>

          {/* Desktop Nav - shows at lg (1024px) and up */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-4 flex-shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white transition-colors font-medium text-sm xl:text-base whitespace-nowrap flex-shrink-0 px-2 xl:px-3 py-1.5 rounded-md hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile/Tablet Menu Button - shows below lg (1024px) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 flex-shrink-0 ml-2 sm:ml-3"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={22} className="sm:w-6 sm:h-6" /> : <FaBars size={22} className="sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile/Tablet Nav */}
        {isOpen && (
          <div className="lg:hidden pb-4 pt-2 border-t border-white/10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2.5 px-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors rounded-md text-sm sm:text-base"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>

    </nav>
  );
}
