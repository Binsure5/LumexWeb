'use client';

import React from 'react';
import Link from 'next/link';

export default function About() {
  const sections = [
    {
      title: 'CEO 인사말',
      description: '혁신과 도전으로 미래를 창조하는 LUMEX',
      link: '/about/ceo',
      icon: 'fas fa-user-tie',
    },
    {
      title: '연혁',
      description: '1994년부터 이어온 LUMEX의 발자취',
      link: '/about/history',
      icon: 'fas fa-history',
    },
    {
      title: '비전',
      description: '글로벌 자동차 부품 기술 선도기업',
      link: '/about/vision',
      icon: 'fas fa-lightbulb',
    },
    {
      title: '조직도',
      description: '효율적이고 전문적인 조직 구성',
      link: '/about/organization',
      icon: 'fas fa-sitemap',
    },
  ];

  const stats = [
    {
      number: '30년',
      label: '업력',
    },
    {
      number: '300+',
      label: '임직원',
    },
    {
      number: '5개국',
      label: '해외법인',
    },
    {
      number: '200+',
      label: '특허보유',
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
              회사소개
            </h1>
            <p className="text-xl text-gray-300">
              기술 혁신으로 미래를 선도하는 글로벌 기업 LUMEX
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">기업 개요</h2>
          <p className="text-lg text-gray-600 mb-12">
            LUMEX는 1994년 설립 이래 끊임없는 기술 혁신과 도전으로 자동차 부품 산업의 발전을 선도해 왔습니다.
            특히 용접 로봇 자동화 시스템과 배터리 하우징 분야에서 세계적인 기술력을 인정받고 있으며,
            글로벌 시장에서 지속적인 성장을 이어가고 있습니다.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
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
        </div>
      </section>
    </main>
  );
} 