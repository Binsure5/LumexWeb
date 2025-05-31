'use client';

import React from 'react';
import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'LUMEX - 최고의 기술력과 자동화 솔루션',
  description: '30년의 기술력과 노하우를 바탕으로 현재의 모습으로 성장하였습니다',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        <title>LUMEX - 최고의 기술력과 자동화 솔루션</title>
        <meta name="description" content="30년의 기술력과 노하우를 바탕으로 현재의 모습으로 성장하였습니다" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </head>
      <body className="min-h-screen bg-white">
        <div className="flex flex-col min-h-screen">
          <Header />
          <div className="pt-20">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
} 