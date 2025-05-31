'use client';

import React from 'react';

export default function Organization() {
  const departments = [
    {
      name: '기술연구소',
      head: '김연구 소장',
      teams: [
        {
          name: '자동화연구팀',
          description: '로봇 자동화 시스템 연구 개발',
        },
        {
          name: '신소재연구팀',
          description: '경량화 소재 및 공정 개발',
        },
        {
          name: '전장연구팀',
          description: '전기차 부품 설계 및 개발',
        },
      ],
    },
    {
      name: '생산본부',
      head: '이생산 본부장',
      teams: [
        {
          name: '생산관리팀',
          description: '생산계획 수립 및 실행 관리',
        },
        {
          name: '품질관리팀',
          description: '품질 보증 및 개선 활동',
        },
        {
          name: '설비관리팀',
          description: '생산설비 유지보수 및 개선',
        },
      ],
    },
    {
      name: '영업본부',
      head: '박영업 본부장',
      teams: [
        {
          name: '국내영업팀',
          description: '국내 고객사 영업 및 관리',
        },
        {
          name: '해외영업팀',
          description: '해외 시장 개척 및 수출',
        },
        {
          name: '마케팅팀',
          description: '제품 홍보 및 브랜드 관리',
        },
      ],
    },
    {
      name: '경영지원본부',
      head: '최지원 본부장',
      teams: [
        {
          name: '인사팀',
          description: '인사 및 조직 관리',
        },
        {
          name: '재무팀',
          description: '재무 및 회계 관리',
        },
        {
          name: '기획팀',
          description: '전략 기획 및 경영 관리',
        },
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
              조직도
            </h1>
            <p className="text-xl text-gray-300">
              LUMEX의 조직 구성
            </p>
          </div>
        </div>
      </section>

      {/* CEO Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center mb-12">
            <h2 className="text-2xl font-bold mb-2">대표이사</h2>
            <p className="text-gray-600">김대표</p>
          </div>

          {/* Departments */}
          <div className="grid md:grid-cols-2 gap-8">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-600 text-white p-6">
                  <h3 className="text-xl font-bold mb-2">{dept.name}</h3>
                  <p>{dept.head}</p>
                </div>
                <div className="p-6">
                  {dept.teams.map((team, teamIndex) => (
                    <div key={teamIndex} className="mb-4 last:mb-0">
                      <h4 className="font-bold mb-1">{team.name}</h4>
                      <p className="text-sm text-gray-600">{team.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Organization Info */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">조직 현황</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
                <p className="text-gray-600">본부</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
                <p className="text-gray-600">팀</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">300+</div>
                <p className="text-gray-600">임직원</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">5</div>
                <p className="text-gray-600">해외 법인</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 