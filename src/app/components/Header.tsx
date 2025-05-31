'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: '회사소개', href: '/about', subItems: [
      { name: 'CEO 인사말', href: '/about/ceo' },
      { name: '연혁', href: '/about/history' },
      { name: '비전', href: '/about/vision' },
      { name: '조직도', href: '/about/organization' },
    ]},
    { name: '사업영역', href: '/business', subItems: [
      { name: '용접 로봇 자동화', href: '/business/welding-robot' },
      { name: '배터리 하우징', href: '/business/battery-housing' },
      { name: '자동차 부품', href: '/business/auto-parts' },
    ]},
    { name: '기술혁신', href: '/innovation', subItems: [
      { name: '연구개발', href: '/innovation/research' },
      { name: '특허인증', href: '/innovation/patents' },
    ]},
    { name: '홍보센터', href: '/pr', subItems: [
      { name: '뉴스', href: '/pr/news' },
      { name: '보도자료', href: '/pr/press' },
    ]},
    { name: '인재채용', href: '/careers', subItems: [
      { name: '채용정보', href: '/careers/jobs' },
      { name: '복리후생', href: '/careers/benefits' },
    ]},
  ];

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">LUMEX</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 py-8 px-4"
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <div className="absolute hidden group-hover:block w-48 bg-white shadow-lg mt-0">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            {menuItems.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  className="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {item.subItems && (
                  <div className="pl-4">
                    {item.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-100"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </header>
  );
} 