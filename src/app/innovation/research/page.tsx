'use client';

import React from 'react';

export default function Research() {
  const researchAreas = [
    {
      title: '자동화 기술',
      description: '스마트 팩토리 구현을 위한 자동화 시스템 연구',
      projects: [
        '로봇 제어 시스템 개발',
        'AI 기반 품질 검사',
        '생산 공정 최적화',
        'IoT 센서 네트워크',
      ],
      icon: 'fas fa-robot',
    },
    {
      title: '신소재 개발',
      description: '고강도 경량 소재 및 친환경 소재 연구',
      projects: [
        '고강도 알루미늄 합금',
        '탄소섬유 복합재',
        '친환경 코팅 기술',
        '나노 소재 응용',
      ],
      icon: 'fas fa-atom',
    },
    {
      title: '전기차 부품',
      description: '차세대 전기차 핵심 부품 개발',
      projects: [
        '배터리 패키지 설계',
        '열관리 시스템',
        '고전압 부품 설계',
        '경량화 설계',
      ],
      icon: 'fas fa-car-battery',
    },
  ];

  const facilities = [
    {
      name: '자동화 연구소',
      equipment: [
        '로봇 시뮬레이션 시스템',
        '자동화 테스트 벤치',
        '제어 시스템 개발 장비',
      ],
    },
    {
      name: '소재 연구소',
      equipment: [
        '재료 물성 시험기',
        '열처리 장비',
        '미세구조 분석기',
      ],
    },
    {
      name: '전기차 부품 연구소',
      equipment: [
        '배터리 테스트 시스템',
        '열화상 카메라',
        '진동/충격 시험기',
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
              연구개발
            </h1>
            <p className="text-xl text-gray-300">
              미래 기술을 선도하는 LUMEX의 연구개발 현황
            </p>
          </div>
        </div>
      </section>

      {/* Research Areas Section */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">연구 분야</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {researchAreas.map((area, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl text-blue-600 mb-4">
                <i className={area.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-4">{area.title}</h3>
              <p className="text-gray-600 mb-4">{area.description}</p>
              <ul className="space-y-2">
                {area.projects.map((project, projectIndex) => (
                  <li key={projectIndex} className="flex items-center">
                    <span className="text-blue-500 mr-2">•</span>
                    <span>{project}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Research Facilities Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">연구 시설</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="h-48 bg-gray-200"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">{facility.name}</h3>
                  <ul className="space-y-2">
                    {facility.equipment.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center">
                        <span className="text-blue-500 mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Achievement Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">연구 성과</h2>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">특허 현황</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>국내 특허</span>
                  <span className="text-2xl font-bold text-blue-600">150+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>해외 특허</span>
                  <span className="text-2xl font-bold text-blue-600">50+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>출원 중</span>
                  <span className="text-2xl font-bold text-blue-600">30+</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4">연구 인력</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>박사급</span>
                  <span className="text-2xl font-bold text-blue-600">15명</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>석사급</span>
                  <span className="text-2xl font-bold text-blue-600">45명</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>학사급</span>
                  <span className="text-2xl font-bold text-blue-600">90명</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 