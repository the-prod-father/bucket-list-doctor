'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { FaBars, FaTimes, FaUserCog, FaSignInAlt, FaPlus, FaTachometerAlt, FaSignOutAlt } from 'react-icons/fa';
import { useSession, signOut } from 'next-auth/react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAdminMenuOpen, setIsAdminMenuOpen] = useState(false);
  const adminMenuRef = useRef<HTMLDivElement | null>(null);
  const { data: session, status } = useSession();

  const isAdmin = session?.user?.role === 'admin' || session?.user?.role === 'super_admin';
  const isAuthenticated = status === 'authenticated';

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About Dr. D' },
    { href: '/books', label: 'Books' },
    { href: '/tips-ideas', label: 'Tips & Ideas' },
    { href: '/your-brain', label: 'Your Brain' },
    { href: '/newsletter', label: 'Blog' },
    { href: '/blog', label: 'Videos & Media' },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (adminMenuRef.current && !adminMenuRef.current.contains(event.target as Node)) {
        setIsAdminMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const closeAdminMenu = () => setIsAdminMenuOpen(false);

  const handleSignOut = () => {
    closeAdminMenu();
    signOut();
  };

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
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white transition-colors font-medium whitespace-nowrap flex-shrink-0"
              >
                {link.label}
              </Link>
            ))}
            <div className="relative flex-shrink-0" ref={adminMenuRef}>
              <button
                onClick={() => setIsAdminMenuOpen((prev) => !prev)}
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium py-2 px-3 rounded-lg transition-colors"
                aria-haspopup="true"
                aria-expanded={isAdminMenuOpen}
                aria-label="Admin menu"
              >
                <FaUserCog className="w-4 h-4" />
                <span className="text-sm tracking-wide">Admin</span>
                <FaBars className="w-4 h-4 opacity-70" />
              </button>

              {isAdminMenuOpen && (
                <div className="absolute right-0 mt-3 w-56 rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden z-50">
                  {isAdmin ? (
                    <div className="py-3">
                      <div className="px-4 pb-3 border-b border-gray-100">
                        <p className="text-sm font-semibold text-gray-900 flex items-center gap-2">
                          <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-100 text-yellow-600 text-xs font-bold">A</span>
                          Admin Mode
                        </p>
                        <p className="text-xs text-gray-500 mt-1">Quick tools to manage content.</p>
                      </div>
                      <div className="flex flex-col divide-y divide-gray-100">
                        <Link
                          href="/admin/cms/posts/new"
                          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-brand-blue/10 hover:text-brand-blue transition-colors"
                          onClick={closeAdminMenu}
                        >
                          <FaPlus className="w-4 h-4" />
                          Create New Post
                        </Link>
                        <Link
                          href="/admin/dashboard"
                          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-700 hover:bg-brand-blue/10 hover:text-brand-blue transition-colors"
                          onClick={closeAdminMenu}
                        >
                          <FaTachometerAlt className="w-4 h-4" />
                          CMS Dashboard
                        </Link>
                        <button
                          onClick={handleSignOut}
                          className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                        >
                          <FaSignOutAlt className="w-4 h-4" />
                          Logout
                        </button>
                      </div>
                    </div>
                  ) : (
                    status !== 'loading' && (
                      <div className="py-3">
                        <Link
                          href="/admin/login"
                          className="flex items-center gap-3 px-4 py-3 text-sm font-semibold text-gray-700 hover:bg-brand-blue/10 hover:text-brand-blue transition-colors"
                          onClick={closeAdminMenu}
                        >
                          <FaSignInAlt className="w-4 h-4" />
                          Login
                        </Link>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
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
            {!isAuthenticated && (
              <Link
                href="/admin/login"
                className="block py-2 text-white font-semibold hover:text-brand-yellow transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Admin Login
              </Link>
            )}

            {/* Mobile Admin Controls */}
            {isAdmin && (
              <div className="mt-6 pt-6 border-t border-white/20">
                <div className="flex items-center space-x-2 bg-yellow-400/20 px-3 py-2 rounded-lg border border-yellow-400/30 mb-3">
                  <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                  <span className="text-white font-medium">Admin Mode</span>
                </div>
                <Link
                  href="/admin/cms/posts/new"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-center mb-2 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                  <span>Create New Post</span>
                </Link>
                <Link
                  href="/admin/cms"
                  onClick={() => setIsOpen(false)}
                  className="block w-full bg-white/10 hover:bg-white/20 text-white font-medium py-3 px-4 rounded-lg transition-colors text-center mb-2"
                >
                  CMS Dashboard
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

    </nav>
  );
}
