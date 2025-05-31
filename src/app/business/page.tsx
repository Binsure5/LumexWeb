'use client';

import React from 'react';
import Link from 'next/link';

export default function Business() {
  const businesses = [
    {
      title: '용접 로봇',
      description: '최첨단 자동화 용접 솔루션으로 생산성과 품질을 혁신합니다',
      image: '/images/welding-robot.jpg',
      link: '/business/welding-robot',
      icon: 'fas fa-robot',
    },
    {
      title: '배터리 하우징',
      description: '전기차의 심장을 안전하게 보호하는 최첨단 배터리 하우징 솔루션',
      image: '/images/battery-housing.jpg',
      link: '/business/battery-housing',
      icon: 'fas fa-car-battery',
    },
    {
      title: '자동차 부품',
      description: '최고의 품질과 기술력으로 자동차 산업의 미래를 선도합니다',
      image: '/images/auto-parts.jpg',
      link: '/business/auto-parts',
      icon: 'fas fa-cogs',
    },
  ];

  const features = [
    {
      title: '기술 혁신',
      description: '지속적인 R&D 투자로 미래 기술 선도',
      icon: 'fas fa-lightbulb',
    },
    {
      title: '품질 보증',
      description: '글로벌 품질 인증을 통한 신뢰성 확보',
      icon: 'fas fa-certificate',
    },
    {
      title: '고객 만족',
      description: '맞춤형 솔루션으로 고객 가치 창출',
      icon: 'fas fa-handshake',
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
              사업 영역
            </h1>
            <p className="text-xl text-gray-300">
              혁신적인 기술과 솔루션으로 미래 자동차 산업을 선도합니다
            </p>
          </div>
        </div>
      </section>

      {/* Business Areas Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">주요 사업</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {businesses.map((business, index) => (
              <Link href={business.link} key={index}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                  <div className="h-48 bg-gray-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-6xl text-blue-600">
                      <i className={business.icon}></i>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{business.title}</h3>
                    <p className="text-gray-600">{business.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">핵심 가치</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <div className="text-4xl text-blue-600 mb-4">
                    <i className={feature.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">
            혁신적인 솔루션이 필요하신가요?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            LUMEX의 전문가들이 최적의 솔루션을 제안해드립니다.
            지금 바로 문의하세요.
          </p>
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            문의하기
          </Link>
        </div>
      </section>
    </main>
  );
} 