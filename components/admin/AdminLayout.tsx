'use client';

import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaHome, FaEnvelope, FaBlog, FaSignOutAlt, FaUser } from 'react-icons/fa';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession();
  const pathname = usePathname();

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: FaHome },
    { name: 'Newsletter', href: '/admin/newsletter', icon: FaEnvelope },
    { name: 'Blog Posts', href: '/admin/blog', icon: FaBlog },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Navigation Bar */}
      <nav className="bg-gradient-to-r from-brand-navy to-brand-blue text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <h1 className="text-xl font-bold">Bucket List Doctor CMS</h1>
            </div>

            {/* User Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <FaUser className="w-4 h-4" />
                <span className="text-sm">{session?.user?.name}</span>
                <span className="text-xs bg-white/20 px-2 py-1 rounded">
                  {session?.user?.role}
                </span>
              </div>
              <button
                onClick={() => signOut({ callbackUrl: '/admin/login' })}
                className="flex items-center space-x-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg transition-colors"
              >
                <FaSignOutAlt className="w-4 h-4" />
                <span className="text-sm">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Secondary Navigation */}
        <div className="bg-white rounded-lg shadow-md mb-6">
          <nav className="flex space-x-1 p-2">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    isActive
                      ? 'bg-brand-blue text-white'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Page Content */}
        {children}
      </div>
    </div>
  );
}
