'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useSession, signOut } from 'next-auth/react';
import NewsletterModal from '../newsletter/NewsletterModal';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isNewsletterModalOpen, setIsNewsletterModalOpen] = useState(false);
  const { data: session } = useSession();

  const isAdmin = session?.user?.role === 'admin';

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
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={() => setIsNewsletterModalOpen(true)}
              className="bg-gradient-to-r from-brand-yellow to-brand-orange hover:from-brand-orange hover:to-brand-yellow text-brand-navy font-bold py-2 px-5 rounded-lg transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>Newsletter</span>
            </button>

            {/* Admin Controls */}
            {isAdmin && (
              <div className="flex items-center space-x-3 pl-3 ml-3 border-l-2 border-white/20">
                <div className="flex items-center space-x-2 bg-yellow-400/20 px-3 py-1.5 rounded-lg">
                  <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white/90 text-sm font-medium">Admin</span>
                </div>
                <Link
                  href="/admin/cms"
                  className="bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  CMS
                </Link>
                <button
                  onClick={() => signOut()}
                  className="bg-red-500/80 hover:bg-red-600 text-white font-medium py-2 px-4 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
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
            <button
              onClick={() => {
                setIsOpen(false);
                setIsNewsletterModalOpen(true);
              }}
              className="w-full mt-4 bg-gradient-to-r from-brand-yellow to-brand-orange hover:from-brand-orange hover:to-brand-yellow text-brand-navy font-bold py-3 px-5 rounded-lg transition-all flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>Newsletter</span>
            </button>

            {/* Mobile Admin Controls */}
            {isAdmin && (
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center space-x-2 bg-yellow-400/20 px-3 py-2 rounded-lg mb-3">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white font-medium">Admin Mode</span>
                </div>
                <Link
                  href="/admin/cms"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-4 rounded-lg transition-colors text-center mb-2"
                >
                  Go to CMS
                </Link>
                <button
                  onClick={() => {
                    setIsOpen(false);
                    signOut();
                  }}
                  className="w-full bg-red-500/80 hover:bg-red-600 text-white font-medium py-3 px-4 rounded-lg transition-colors"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Newsletter Modal */}
      <NewsletterModal
        isOpen={isNewsletterModalOpen}
        onClose={() => setIsNewsletterModalOpen(false)}
      />
    </nav>
  );
}
