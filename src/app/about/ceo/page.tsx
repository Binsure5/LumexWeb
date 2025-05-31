'use client';

import React from 'react';

export default function CEO() {
  return (
    <main className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-900 text-white mb-16">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              CEO 인사말
            </h1>
            <p className="text-xl text-gray-300">
              혁신과 도전으로 미래를 창조하는 LUMEX
            </p>
          </div>
        </div>
      </section>

      {/* CEO Message Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="md:col-span-1">
              <div className="bg-gray-200 h-[400px] rounded-lg"></div>
              <div className="text-center mt-4">
                <h3 className="text-xl font-bold">김대표</h3>
                <p className="text-gray-600">대표이사</p>
              </div>
            </div>
            <div className="md:col-span-2">
              <div className="prose max-w-none">
                <p className="text-lg mb-6">
                  안녕하십니까, LUMEX 대표이사 김대표입니다.
                </p>
                <p className="mb-6">
                  LUMEX는 1994년 설립 이래 끊임없는 기술 혁신과 도전으로 자동차 부품 산업의 발전을 선도해 왔습니다. 
                  특히 용접 로봇 자동화 시스템과 배터리 하우징 분야에서 세계적인 기술력을 인정받고 있습니다.
                </p>
                <p className="mb-6">
                  4차 산업혁명과 자동차 산업의 전환기를 맞아, LUMEX는 새로운 도약을 준비하고 있습니다. 
                  전기차와 자율주행차 시대에 맞춘 혁신적인 기술 개발과 스마트 팩토리 구축을 통해 
                  글로벌 경쟁력을 한층 강화하고 있습니다.
                </p>
                <p className="mb-6">
                  앞으로도 LUMEX는 고객 가치 창출과 기술 혁신을 통해 더 나은 미래를 만들어 가는데 
                  앞장서겠습니다. 이해관계자 여러분의 변함없는 관심과 성원을 부탁드립니다.
                </p>
                <p className="text-right">
                  LUMEX 대표이사 김대표
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Management Philosophy */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">경영철학</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl text-blue-600 mb-4">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">기술 혁신</h3>
              <p className="text-gray-600">
                지속적인 R&D 투자를 통한 기술 경쟁력 강화
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl text-blue-600 mb-4">
                <i className="fas fa-users"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">인재 육성</h3>
              <p className="text-gray-600">
                글로벌 인재 육성을 통한 조직 역량 강화
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <div className="text-4xl text-blue-600 mb-4">
                <i className="fas fa-handshake"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">상생 협력</h3>
              <p className="text-gray-600">
                파트너사와의 동반성장을 통한 지속가능한 발전
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 