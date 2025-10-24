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
    { href: '/tips-ideas', label: 'Tips & Ideas' },
    { href: '/your-brain', label: 'Your Brain' },
    { href: '/blog', label: 'Videos & Media' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-brand-navy shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 sm:space-x-4 group">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/30 to-brand-purple/30 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Image
                src="/images/logos/bucketlistdoctor-logo.webp"
                alt="Bucket List Doctor Logo"
                fill
                className="object-contain relative z-10 drop-shadow-lg"
                priority
              />
            </div>
            <div className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-white group-hover:text-brand-yellow transition-colors duration-300">
              Bucket List Doctor
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden pb-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-white/90 hover:text-white transition-colors"
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
