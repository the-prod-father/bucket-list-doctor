'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Dr. D' },
    { href: '/books', label: 'Books' },
    { href: '/tips-ideas', label: 'Tips & Advice' },
    { href: '/your-brain', label: 'Your Brain' },
    { href: '/speaking', label: 'Speaking' },
    { href: '/newsletter', label: 'Articles' },
    { href: '/blog', label: 'Videos & Media' },
  ];


  return (
    <nav className="sticky top-0 z-50 bg-brand-navy shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 sm:space-x-3 md:space-x-4 group flex-shrink-0 min-w-0 pr-2 sm:pr-4">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 md:w-14 md:h-14 lg:w-16 lg:h-16 flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 to-brand-purple/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src="/images/logos/bucketlistdoctor-logo.webp"
                alt="Bucket List Doctor Logo"
                fill
                className="object-contain relative z-10 drop-shadow-lg"
                priority
              />
            </div>
            <div className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-display font-bold text-white group-hover:text-brand-yellow transition-colors duration-300 whitespace-nowrap flex-shrink-0 leading-tight">
              Bucket List Doctor
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 xl:gap-5 flex-shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white transition-colors font-medium text-xs md:text-sm lg:text-base whitespace-nowrap flex-shrink-0 px-1.5 md:px-2 py-1.5 rounded-md hover:bg-white/10"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2 flex-shrink-0 ml-2 sm:ml-3"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={22} className="sm:w-6 sm:h-6" /> : <FaBars size={22} className="sm:w-6 sm:h-6" />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-white/10">
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
