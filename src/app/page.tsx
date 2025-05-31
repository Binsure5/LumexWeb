'use client';

import React from 'react';

export default function Home() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            최고의 기술력과 자동화 솔루션
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            30년의 기술력과 노하우를 바탕으로 현재의 모습으로 성장하였습니다
          </p>
          <a
            href="/about"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            자세히 보기
          </a>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            LUMEX 소개
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl text-blue-600 mb-4">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">최첨단 기술</h3>
              <p className="text-gray-600">
                최신 기술과 혁신적인 솔루션으로 고객의 니즈를 충족시킵니다
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl text-blue-600 mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">전문가 팀</h3>
              <p className="text-gray-600">
                숙련된 전문가들이 최상의 서비스를 제공합니다
              </p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl text-blue-600 mb-4">
                <i className="fas fa-globe"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">글로벌 네트워크</h3>
              <p className="text-gray-600">
                전 세계적인 네트워크로 글로벌 시장을 선도합니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Areas Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            사업 영역
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  용접 로봇 자동화 SYSTEM
                </h3>
                <p className="text-gray-600 mb-4">
                  자동차 차체의 핵심 지식인 MAINBUCK 조립 공정을 위한 다양한
                  경험과 전문기술을 보유하고 있습니다.
                </p>
                <a
                  href="/business/welding-robot"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  자세히 보기 →
                </a>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">배터리 하우징</h3>
                <p className="text-gray-600 mb-4">
                  전기차용 배터리와 관련 부품을 일체화한 배터리 모듈을 상자
                  형태로 감싸는 핵심 부품입니다.
                </p>
                <a
                  href="/business/battery-housing"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  자세히 보기 →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Network Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            글로벌 네트워크
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5+</div>
              <div className="text-gray-600">해외 법인</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
              <div className="text-gray-600">글로벌 파트너십</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
              <div className="text-gray-600">years of experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            최신 소식
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">2024.03.21</p>
                <h3 className="text-xl font-bold mb-2">
                  신규 해외 법인 설립 안내
                </h3>
                <p className="text-gray-600">
                  LUMEX의 글로벌 확장을 위한 신규 해외 법인이 설립되었습니다.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">2024.03.15</p>
                <h3 className="text-xl font-bold mb-2">
                  2024 자동화 기술 박람회 참가
                </h3>
                <p className="text-gray-600">
                  세계 최대 규모의 자동화 기술 박람회에 LUMEX가 참가합니다.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <p className="text-gray-500 text-sm mb-2">2024.03.10</p>
                <h3 className="text-xl font-bold mb-2">
                  신규 특허 등록 완료
                </h3>
                <p className="text-gray-600">
                  배터리 하우징 관련 신규 특허 등록이 완료되었습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 