'use client';

import React, { useState } from 'react';

export default function Jobs() {
  const [selectedCategory, setSelectedCategory] = useState('전체');

  const categories = ['전체', '연구개발', '생산/품질', '영업/마케팅', '경영지원'];

  const jobs = [
    {
      title: '자동화 로봇 연구원',
      department: '연구개발',
      type: '신입/경력',
      location: '경기도 화성',
      deadline: '2024.04.30',
      requirements: [
        '기계공학/로봇공학 전공',
        'Python, C++ 프로그래밍 가능자',
        'ROS 활용 경험자 우대',
      ],
    },
    {
      title: '배터리 하우징 설계 엔지니어',
      department: '연구개발',
      type: '경력 3년 이상',
      location: '경기도 화성',
      deadline: '2024.04.30',
      requirements: [
        '기계공학 전공',
        'CAD/CAE 툴 사용 능숙자',
        '자동차 부품 설계 경험자 우대',
      ],
    },
    {
      title: '품질관리 엔지니어',
      department: '생산/품질',
      type: '신입/경력',
      location: '충남 아산',
      deadline: '2024.04.30',
      requirements: [
        '기계/금속공학 전공',
        '품질관리 자격증 보유자 우대',
        '자동차 부품 품질관리 경험자 우대',
      ],
    },
    {
      title: '해외영업 담당자',
      department: '영업/마케팅',
      type: '경력 5년 이상',
      location: '서울 강남',
      deadline: '2024.04.30',
      requirements: [
        '영어 능통자 필수',
        '해외 영업 경험자',
        '자동차 부품 산업 경험자 우대',
      ],
    },
    {
      title: '인사담당자',
      department: '경영지원',
      type: '경력 3년 이상',
      location: '서울 강남',
      deadline: '2024.04.30',
      requirements: [
        '인사/노무 관련 전공',
        '인사 실무 경험자',
        '관련 자격증 보유자 우대',
      ],
    },
  ];

  const filteredJobs = selectedCategory === '전체'
    ? jobs
    : jobs.filter(job => job.department === selectedCategory);

  const benefits = [
    {
      title: '교육/성장',
      items: [
        '신입사원 교육 프로그램',
        '직무 전문화 교육',
        '해외 연수 기회',
        '도서 구입비 지원',
      ],
      icon: 'fas fa-graduation-cap',
    },
    {
      title: '생활/복지',
      items: [
        '선택적 복리후생',
        '자녀 학자금 지원',
        '의료비 지원',
        '주택자금 대출',
      ],
      icon: 'fas fa-heart',
    },
    {
      title: '근무환경',
      items: [
        '유연근무제',
        '휴게공간',
        '피트니스 센터',
        '통근버스 운영',
      ],
      icon: 'fas fa-building',
    },
    {
      title: '보상/포상',
      items: [
        '성과급',
        '장기근속 포상',
        '우수사원 포상',
        '자격증 취득 지원',
      ],
      icon: 'fas fa-award',
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
              채용공고
            </h1>
            <p className="text-xl text-gray-300">
              LUMEX와 함께할 열정 가득한 인재를 모십니다
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="container mx-auto px-4 mb-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {filteredJobs.map((job, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-wrap items-start justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-gray-600">
                        <span>
                          <i className="fas fa-building mr-2"></i>
                          {job.department}
                        </span>
                        <span>
                          <i className="fas fa-user-tie mr-2"></i>
                          {job.type}
                        </span>
                        <span>
                          <i className="fas fa-map-marker-alt mr-2"></i>
                          {job.location}
                        </span>
                        <span>
                          <i className="fas fa-calendar-alt mr-2"></i>
                          ~{job.deadline}
                        </span>
                      </div>
                    </div>
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      지원하기
                    </button>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">자격요건</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">복리후생</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-4xl text-blue-600 mb-4">
                  <i className={benefit.icon}></i>
                </div>
                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                <ul className="space-y-2">
                  {benefit.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">채용 프로세스</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mb-4">
                1
              </div>
              <div className="text-center">
                <h4 className="font-bold mb-2">서류전형</h4>
                <p className="text-gray-600">2주 소요</p>
              </div>
            </div>
            <div className="hidden md:block text-gray-300">→</div>
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mb-4">
                2
              </div>
              <div className="text-center">
                <h4 className="font-bold mb-2">인적성검사</h4>
                <p className="text-gray-600">1주 소요</p>
              </div>
            </div>
            <div className="hidden md:block text-gray-300">→</div>
            <div className="flex flex-col items-center mb-8 md:mb-0">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mb-4">
                3
              </div>
              <div className="text-center">
                <h4 className="font-bold mb-2">실무면접</h4>
                <p className="text-gray-600">2주 소요</p>
              </div>
            </div>
            <div className="hidden md:block text-gray-300">→</div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl mb-4">
                4
              </div>
              <div className="text-center">
                <h4 className="font-bold mb-2">최종합격</h4>
                <p className="text-gray-600">1주 소요</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 