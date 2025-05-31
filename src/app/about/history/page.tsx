'use client';

import React from 'react';

export default function History() {
  const history = [
    {
      year: '2024',
      events: [
        '베트남 현지법인 설립',
        '스마트팩토리 시스템 구축 완료',
        '전기차 배터리 하우징 생산라인 증설',
      ],
    },
    {
      year: '2023',
      events: [
        '글로벌 품질경영 시스템 인증 획득',
        '자율주행차 부품 연구소 설립',
        '중국 시장 진출',
      ],
    },
    {
      year: '2020',
      events: [
        '전기차 배터리 하우징 생산 시작',
        '스마트 용접 로봇 시스템 개발',
        '기술연구소 확장',
      ],
    },
    {
      year: '2015',
      events: [
        '자동차 부품 사업부 신설',
        '품질관리 시스템 고도화',
        '해외 수출 확대',
      ],
    },
    {
      year: '2010',
      events: [
        '로봇 자동화 시스템 개발',
        '기술연구소 설립',
        'ISO 9001 인증 획득',
      ],
    },
    {
      year: '2000',
      events: [
        '자동차 부품 생산 시작',
        '공장 자동화 시스템 도입',
        '품질관리 시스템 구축',
      ],
    },
    {
      year: '1994',
      events: [
        'LUMEX 설립',
        '용접 설비 생산 시작',
      ],
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
              연혁
            </h1>
            <p className="text-xl text-gray-300">
              LUMEX의 발자취
            </p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

            {/* Timeline Items */}
            {history.map((period, index) => (
              <div key={period.year} className={`relative mb-12 ${
                index % 2 === 0 ? 'md:ml-auto md:pl-8' : 'md:mr-auto md:pr-8'
              } md:w-1/2`}>
                {/* Year Circle */}
                <div className="absolute top-0 md:top-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-full"></div>
                </div>

                {/* Content */}
                <div className={`bg-white rounded-lg shadow-lg p-6 ${
                  index % 2 === 0 ? 'ml-4 md:ml-0' : 'ml-4 md:mr-0'
                }`}>
                  <h3 className="text-2xl font-bold text-blue-600 mb-4">{period.year}</h3>
                  <ul className="space-y-2">
                    {period.events.map((event, eventIndex) => (
                      <li key={eventIndex} className="flex items-start">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{event}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 