'use client';

import React from 'react';
import Link from 'next/link';

export default function PR() {
  const sections = [
    {
      title: '뉴스',
      description: 'LUMEX의 최신 소식을 전해드립니다',
      link: '/pr/news',
      icon: 'fas fa-newspaper',
    },
    {
      title: '보도자료',
      description: 'LUMEX의 주요 언론보도 내용을 확인하세요',
      link: '/pr/press',
      icon: 'fas fa-file-alt',
    },
  ];

  const latestNews = [
    {
      title: 'LUMEX, 차세대 배터리 하우징 생산라인 증설',
      date: '2024.03.15',
      category: '보도자료',
    },
    {
      title: '베트남 현지법인 설립, 동남아 시장 본격 공략',
      date: '2024.02.20',
      category: '보도자료',
    },
    {
      title: '스마트팩토리 구축 완료, 생산성 30% 향상',
      date: '2024.01.25',
      category: '보도자료',
    },
  ];

  return (
    <main className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-900 text-white mb-16">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              홍보센터
            </h1>
            <p className="text-xl text-gray-300">
              LUMEX의 소식과 보도자료를 확인하세요
            </p>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <Link 
                key={index} 
                href={section.link}
                className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform hover:transform hover:-translate-y-2"
              >
                <div className="text-4xl text-blue-600 mb-4">
                  <i className={section.icon}></i>
                </div>
                <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                <p className="text-gray-600">{section.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">최신 소식</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {latestNews.map((news, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {news.category}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {news.date}
                    </span>
                  </div>
                  <h3 className="font-bold mb-4">{news.title}</h3>
                  <Link 
                    href="/pr/news" 
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    자세히 보기 <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">언론 문의</h2>
          <p className="text-lg text-gray-600 mb-8">
            보도자료 및 취재 관련 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.
          </p>
          <div className="inline-flex items-center gap-4">
            <i className="fas fa-phone text-blue-600"></i>
            <span className="text-lg">02-1234-5678</span>
            <span className="text-gray-300 mx-4">|</span>
            <i className="fas fa-envelope text-blue-600"></i>
            <span className="text-lg">pr@lumex.com</span>
          </div>
        </div>
      </section>
    </main>
  );
} 