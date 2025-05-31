'use client';

import React from 'react';

export default function WeldingRobot() {
  const features = [
    {
      title: '고정밀 용접 제어',
      description: '0.1mm 단위의 정밀한 용접 제어로 완벽한 용접품질 보장',
      icon: 'fas fa-crosshairs',
    },
    {
      title: 'AI 기반 품질관리',
      description: '실시간 용접 품질 모니터링 및 자동 보정 시스템',
      icon: 'fas fa-brain',
    },
    {
      title: '스마트 생산관리',
      description: '생산데이터 실시간 수집 및 분석으로 생산성 최적화',
      icon: 'fas fa-chart-line',
    },
    {
      title: '유연한 확장성',
      description: '다양한 생산라인에 적용 가능한 모듈형 설계',
      icon: 'fas fa-expand-arrows-alt',
    },
  ];

  const applications = [
    {
      title: '자동차 차체',
      description: '차체 프레임 및 패널 용접',
      image: '/images/welding1.jpg',
    },
    {
      title: '배터리 케이스',
      description: '전기차 배터리 하우징 용접',
      image: '/images/welding2.jpg',
    },
    {
      title: '샤시 부품',
      description: '서스펜션 및 프레임 용접',
      image: '/images/welding3.jpg',
    },
    {
      title: '특수 부품',
      description: '고강도 특수 소재 용접',
      image: '/images/welding4.jpg',
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
              용접 로봇 시스템
            </h1>
            <p className="text-xl text-gray-300">
              최첨단 자동화 용접 솔루션으로 생산성과 품질을 혁신합니다
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">주요 특징</h2>
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

      {/* Applications Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">적용 분야</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {applications.map((app, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-200"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                    <p className="text-gray-600">{app.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">핵심 기술</h2>
          <p className="text-lg text-gray-600 mb-12">
            30년간 축적된 용접 기술과 최신 로봇 제어 기술의 결합으로
            최고의 용접 품질과 생산성을 제공합니다.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
              <p className="text-gray-600">용접 정확도</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">30%</div>
              <p className="text-gray-600">생산성 향상</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
              <p className="text-gray-600">특허 보유</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 