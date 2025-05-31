'use client';

import React from 'react';

export default function Press() {
  const pressReleases = [
    {
      id: 1,
      title: 'LUMEX, 글로벌 품질경영 시스템 인증 획득',
      date: '2024.03.20',
      source: '전자신문',
      content: 'LUMEX가 자동차 부품 품질경영 시스템 국제 인증을 획득했습니다. 이를 통해 글로벌 시장에서의 경쟁력을 한층 강화할 수 있게 되었습니다.',
      link: '#',
    },
    {
      id: 2,
      title: '차세대 전기차 부품 기술 개발 성공',
      date: '2024.02.28',
      source: '매일경제',
      content: 'LUMEX가 차세대 전기차용 경량 배터리 하우징 기술 개발에 성공했습니다. 이 기술은 기존 대비 무게를 30% 줄이면서도 강도는 20% 높였습니다.',
      link: '#',
    },
    {
      id: 3,
      title: '2023년 매출 5000억원 달성',
      date: '2024.02.15',
      source: '한국경제',
      content: 'LUMEX가 2023년 연간 매출 5000억원을 달성했습니다. 이는 전년 대비 25% 성장한 수치로, 전기차 부품 수요 증가가 실적 개선을 견인했습니다.',
      link: '#',
    },
    {
      id: 4,
      title: '자율주행차 부품 연구소 설립',
      date: '2024.01.30',
      source: '조선일보',
      content: 'LUMEX가 자율주행차 부품 전문 연구소를 설립했습니다. 연구소는 자율주행 센서 모듈과 관련 부품 개발에 주력할 예정입니다.',
      link: '#',
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
              보도자료
            </h1>
            <p className="text-xl text-gray-300">
              LUMEX의 주요 언론보도 내용을 확인하세요
            </p>
          </div>
        </div>
      </section>

      {/* Press Releases */}
      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {pressReleases.map((press) => (
              <div key={press.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="text-gray-500">
                      <i className="fas fa-calendar-alt mr-2"></i>
                      {press.date}
                    </span>
                    <span className="text-gray-500">
                      <i className="fas fa-newspaper mr-2"></i>
                      {press.source}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{press.title}</h2>
                  <p className="text-gray-600 mb-4">{press.content}</p>
                  <a 
                    href={press.link}
                    className="text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center"
                  >
                    원문 보기 <i className="fas fa-external-link-alt ml-2"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Contact */}
      <section className="bg-gray-50 py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">언론 문의</h2>
            <p className="text-lg text-gray-600 mb-8">
              보도자료 및 취재 관련 문의사항이 있으시면 아래 연락처로 문의해 주시기 바랍니다.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">홍보팀</h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <i className="fas fa-phone mr-2"></i>
                    02-1234-5678
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-2"></i>
                    pr@lumex.com
                  </p>
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">IR팀</h3>
                <div className="space-y-2 text-gray-600">
                  <p>
                    <i className="fas fa-phone mr-2"></i>
                    02-1234-5679
                  </p>
                  <p>
                    <i className="fas fa-envelope mr-2"></i>
                    ir@lumex.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 