'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const [isLoggedIn, setIsLoggedIn] = useState(
    pathname !== '/login' && pathname !== '/register' && pathname !== '/'
  );
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) =>
    pathname === path ? 'text-indigo-600 font-semibold' : 'text-gray-600 hover:text-indigo-600';

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/teachers" className="text-xl font-bold text-indigo-600">
            LessonMatch
          </Link>

          {isLoggedIn && (
            <>
              <nav className="hidden md:flex space-x-8">
                <Link href="/teachers" className={isActive('/teachers')}>
                  Find Teachers
                </Link>
                <Link href="/dashboard" className={isActive('/dashboard')}>
                  Dashboard
                </Link>
              </nav>

              <div className="hidden md:flex items-center space-x-4">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-semibold text-sm">
                  JD
                </div>
                <Link
                  href="/login"
                  className="text-sm text-gray-500 hover:text-gray-700"
                  onClick={() => setIsLoggedIn(false)}
                >
                  Logout
                </Link>
              </div>

              <button
                className="md:hidden p-2"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </>
          )}
        </div>

        {menuOpen && isLoggedIn && (
          <div className="md:hidden pb-4 space-y-2">
            <Link href="/teachers" className="block py-2 text-gray-600" onClick={() => setMenuOpen(false)}>
              Find Teachers
            </Link>
            <Link href="/dashboard" className="block py-2 text-gray-600" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>
            <Link href="/login" className="block py-2 text-gray-500" onClick={() => { setIsLoggedIn(false); setMenuOpen(false); }}>
              Logout
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
