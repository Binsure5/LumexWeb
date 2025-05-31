'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  {
    name: '회사소개',
    href: '/about',
    submenu: [
      { name: '회사소개', href: '/about' },
      { name: 'CEO 메시지', href: '/about/ceo' },
      { name: '회사연혁', href: '/about/history' },
      { name: '국내 네트워크', href: '/about/domestic-network' },
      { name: '해외 네트워크', href: '/about/global-network' },
    ],
  },
  {
    name: '사업영역',
    href: '/business',
    submenu: [
      { name: '용접 로봇 자동화 SYSTEM사업', href: '/business/welding-robot' },
      { name: '배터리 하우징', href: '/business/battery-housing' },
    ],
  },
  {
    name: '연구개발',
    href: '/research',
    submenu: [
      { name: '기술연구소', href: '/research/institute' },
      { name: '연구개발분야', href: '/research/areas' },
      { name: '연구 성과', href: '/research/achievements' },
    ],
  },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <nav className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">LUMEX</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className={`text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium
                    ${pathname.startsWith(item.href) ? 'text-blue-600' : ''}`}
                >
                  {item.name}
                </Link>
                <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 rounded-md">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.name}
                      href={subitem.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {subitem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            {navigation.map((item) => (
              <div key={item.name} className="px-2 pt-2 pb-3 space-y-1">
                <Link
                  href={item.href}
                  className={`block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50
                    ${pathname.startsWith(item.href) ? 'text-blue-600' : ''}`}
                >
                  {item.name}
                </Link>
                {item.submenu.map((subitem) => (
                  <Link
                    key={subitem.name}
                    href={subitem.href}
                    className="block pl-6 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50"
                  >
                    {subitem.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
} 