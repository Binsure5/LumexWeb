'use client';

import React from 'react';

export default function AutoParts() {
  const categories = [
    {
      title: '샤시 부품',
      description: '차량의 기초가 되는 고품질 샤시 부품',
      items: ['서스펜션', '브레이크 시스템', '스티어링 부품'],
      icon: 'fas fa-car',
    },
    {
      title: '엔진 부품',
      description: '고성능 엔진을 위한 정밀 가공 부품',
      items: ['피스톤', '실린더', '크랭크샤프트'],
      icon: 'fas fa-cogs',
    },
    {
      title: '차체 부품',
      description: '안전성과 디자인을 고려한 차체 부품',
      items: ['범퍼', '도어', '후드'],
      icon: 'fas fa-car-side',
    },
    {
      title: '전장 부품',
      description: '첨단 전자 제어 시스템 부품',
      items: ['센서', '컨트롤러', '와이어링'],
      icon: 'fas fa-microchip',
    },
  ];

  const features = [
    {
      title: '품질 관리',
      description: 'ISO 9001 인증을 통한 엄격한 품질 관리',
      icon: 'fas fa-check-circle',
    },
    {
      title: '연구 개발',
      description: '지속적인 R&D 투자로 기술 혁신 추구',
      icon: 'fas fa-flask',
    },
    {
      title: '글로벌 공급망',
      description: '전 세계 주요 자동차 제조사에 부품 공급',
      icon: 'fas fa-globe',
    },
    {
      title: '맞춤형 생산',
      description: '고객 요구사항에 맞는 커스텀 솔루션',
      icon: 'fas fa-tools',
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
              자동차 부품
            </h1>
            <p className="text-xl text-gray-300">
              최고의 품질과 기술력으로 자동차 산업의 미래를 선도합니다
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">제품 카테고리</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-8">
                <div className="text-4xl text-blue-600 mb-4">
                  <i className={category.icon}></i>
                </div>
                <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center text-gray-500">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">핵심 역량</h2>
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
        </div>
      </section>

      {/* Quality Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">품질 보증</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">품질 인증</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-certificate text-blue-500 mt-1 mr-3"></i>
                  <span>ISO 9001:2015 인증</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-certificate text-blue-500 mt-1 mr-3"></i>
                  <span>IATF 16949 인증</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-certificate text-blue-500 mt-1 mr-3"></i>
                  <span>ISO 14001 환경경영시스템 인증</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">품질 관리 프로세스</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>원자재 입고 검사</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>공정 중 품질 검사</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check-circle text-green-500 mt-1 mr-3"></i>
                  <span>출하 전 최종 검사</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 