'use client';

import React from 'react';

export default function Benefits() {
  const benefits = [
    {
      category: '생활지원',
      items: [
        {
          title: '주거/생활',
          description: '주택자금 대출, 기숙사 제공',
          icon: 'fas fa-home',
        },
        {
          title: '출퇴근',
          description: '통근버스 운영, 주차지원',
          icon: 'fas fa-bus',
        },
        {
          title: '식사',
          description: '사내식당, 식대지원',
          icon: 'fas fa-utensils',
        },
        {
          title: '복지포인트',
          description: '연간 복지포인트 지급',
          icon: 'fas fa-gift',
        },
      ],
    },
    {
      category: '건강/의료',
      items: [
        {
          title: '의료지원',
          description: '본인/가족 의료비 지원',
          icon: 'fas fa-hospital',
        },
        {
          title: '건강검진',
          description: '정기 건강검진 지원',
          icon: 'fas fa-heartbeat',
        },
        {
          title: '단체보험',
          description: '생명/상해보험 가입',
          icon: 'fas fa-shield-alt',
        },
        {
          title: '헬스케어',
          description: '사내 피트니스 센터 운영',
          icon: 'fas fa-dumbbell',
        },
      ],
    },
    {
      category: '교육/성장',
      items: [
        {
          title: '자기계발',
          description: '교육비, 도서구입비 지원',
          icon: 'fas fa-book',
        },
        {
          title: '어학교육',
          description: '외국어 교육 프로그램',
          icon: 'fas fa-language',
        },
        {
          title: '직무교육',
          description: '사내외 직무교육 지원',
          icon: 'fas fa-graduation-cap',
        },
        {
          title: '해외연수',
          description: '우수사원 해외연수 기회',
          icon: 'fas fa-plane',
        },
      ],
    },
    {
      category: '가정/생활',
      items: [
        {
          title: '경조사',
          description: '경조금/경조휴가 지원',
          icon: 'fas fa-hand-holding-heart',
        },
        {
          title: '자녀교육',
          description: '학자금/교육비 지원',
          icon: 'fas fa-school',
        },
        {
          title: '휴가',
          description: '연차/리프레시 휴가',
          icon: 'fas fa-umbrella-beach',
        },
        {
          title: '동호회',
          description: '사내 동호회 활동 지원',
          icon: 'fas fa-users',
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
              복리후생
            </h1>
            <p className="text-xl text-gray-300">
              LUMEX와 함께하는 행복한 직장생활
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {benefits.map((category, index) => (
            <div key={index} className="mb-16 last:mb-0">
              <h2 className="text-3xl font-bold text-center mb-12">
                {category.category}
              </h2>
              <div className="grid md:grid-cols-4 gap-8">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="bg-white rounded-lg shadow-lg p-8 text-center">
                    <div className="text-4xl text-blue-600 mb-4">
                      <i className={item.icon}></i>
                    </div>
                    <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-gray-50 py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">
              LUMEX People
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              LUMEX는 임직원의 행복과 성장이 회사의 발전으로 이어진다고 믿습니다.
              다양한 복리후생 제도를 통해 임직원들의 일과 삶의 균형을 지원하고 있습니다.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">98%</div>
                <p className="text-gray-600">복리후생 만족도</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">5년</div>
                <p className="text-gray-600">평균 근속연수</p>
              </div>
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
                <p className="text-gray-600">복지포인트 사용률</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 