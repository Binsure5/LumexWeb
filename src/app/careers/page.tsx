'use client';

import React from 'react';
import Link from 'next/link';

export default function Careers() {
  const sections = [
    {
      title: '채용공고',
      description: 'LUMEX와 함께할 인재를 찾습니다',
      link: '/careers/jobs',
      icon: 'fas fa-briefcase',
    },
    {
      title: '복리후생',
      description: '임직원을 위한 다양한 복지제도',
      link: '/careers/benefits',
      icon: 'fas fa-gift',
    },
  ];

  const values = [
    {
      title: '도전정신',
      description: '새로운 가능성에 도전하는 열정',
      icon: 'fas fa-flag',
    },
    {
      title: '전문성',
      description: '자신의 분야에서 최고를 추구',
      icon: 'fas fa-star',
    },
    {
      title: '창의성',
      description: '혁신적인 아이디어로 문제 해결',
      icon: 'fas fa-lightbulb',
    },
    {
      title: '협력',
      description: '함께 성장하는 팀워크',
      icon: 'fas fa-hands-helping',
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
              인재채용
            </h1>
            <p className="text-xl text-gray-300">
              LUMEX와 함께 성장할 인재를 기다립니다
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

      {/* Core Values */}
      <section className="bg-gray-50 py-16 mb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">인재상</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 text-center">
                  <div className="text-4xl text-blue-600 mb-4">
                    <i className={value.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why LUMEX */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Why LUMEX?</h2>
          <p className="text-lg text-gray-600 mb-12">
            LUMEX는 임직원의 성장이 곧 회사의 성장이라고 믿습니다.
            최고의 근무환경과 다양한 성장 기회를 제공하여 
            임직원들이 자신의 잠재력을 최대한 발휘할 수 있도록 지원합니다.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
              <p className="text-gray-600">직원 만족도</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <p className="text-gray-600">교육 지원</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">5년+</div>
              <p className="text-gray-600">평균 근속연수</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 