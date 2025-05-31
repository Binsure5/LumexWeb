'use client';

import React from 'react';

export default function BatteryHousing() {
  const features = [
    {
      title: '고강도 설계',
      description: '충돌 및 외부 충격에 대한 최고 수준의 안전성 보장',
      icon: 'fas fa-shield-alt',
    },
    {
      title: '경량화 기술',
      description: '알루미늄 합금 소재로 무게 최적화',
      icon: 'fas fa-feather-alt',
    },
    {
      title: '방수/방진',
      description: 'IP67 등급의 완벽한 밀봉 성능',
      icon: 'fas fa-tint-slash',
    },
    {
      title: '열관리 시스템',
      description: '효율적인 배터리 온도 제어 설계',
      icon: 'fas fa-temperature-low',
    },
  ];

  const products = [
    {
      title: '승용차용 하우징',
      description: '전기 승용차 배터리 보호 케이스',
      specs: ['중량: 40kg', '크기: 1800x1200mm', '보호등급: IP67'],
      image: '/images/battery1.jpg',
    },
    {
      title: '상용차용 하우징',
      description: '전기 상용차 대용량 배터리 케이스',
      specs: ['중량: 80kg', '크기: 2400x1600mm', '보호등급: IP67'],
      image: '/images/battery2.jpg',
    },
    {
      title: '버스용 하우징',
      description: '전기 버스 특수 배터리 케이스',
      specs: ['중량: 120kg', '크기: 3000x2000mm', '보호등급: IP67'],
      image: '/images/battery3.jpg',
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
              배터리 하우징
            </h1>
            <p className="text-xl text-gray-300">
              전기차의 심장을 안전하게 보호하는 최첨단 배터리 하우징 솔루션
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">제품 특징</h2>
          <div className="grid md:grid-cols-4 gap-8">
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
      </section>

      {/* Products Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">제품 라인업</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4">{product.description}</p>
                    <ul className="space-y-2">
                      {product.specs.map((spec, i) => (
                        <li key={i} className="text-sm text-gray-500">
                          <i className="fas fa-check text-green-500 mr-2"></i>
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">핵심 기술</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">구조 설계 기술</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>FEM 해석을 통한 최적 구조 설계</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>충돌 시뮬레이션 기반 안전성 검증</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>열변형 최소화 설계</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">소재 기술</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>고강도 알루미늄 합금 개발</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>특수 표면 처리 기술</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>내화학성 코팅 기술</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 