'use client';

import React, { useState } from 'react';

export default function News() {
  const news = [
    {
      id: 1,
      title: 'LUMEX, 차세대 배터리 하우징 생산라인 증설',
      date: '2024.03.15',
      category: '보도자료',
      content: 'LUMEX가 전기차 배터리 하우징 수요 증가에 대응하기 위해 생산라인을 증설했습니다. 이번 증설을 통해 연간 생산량이 50% 증가할 것으로 예상됩니다.',
      image: '/images/news1.jpg',
    },
    {
      id: 2,
      title: '베트남 현지법인 설립, 동남아 시장 본격 공략',
      date: '2024.02.20',
      category: '보도자료',
      content: 'LUMEX가 베트남 하노이에 현지법인을 설립하고 동남아 시장 공략을 본격화합니다. 현지 완성차 업체와의 협력을 통해 시장 점유율을 확대할 계획입니다.',
      image: '/images/news2.jpg',
    },
    {
      id: 3,
      title: '스마트팩토리 구축 완료, 생산성 30% 향상',
      date: '2024.01.25',
      category: '보도자료',
      content: 'LUMEX가 전 공장에 스마트팩토리 시스템 구축을 완료했습니다. AI 기반 생산관리 시스템 도입으로 생산성이 30% 향상될 것으로 기대됩니다.',
      image: '/images/news3.jpg',
    },
    {
      id: 4,
      title: '2024년 신입/경력 공채 실시',
      date: '2024.01.10',
      category: '채용',
      content: 'LUMEX가 2024년 신입 및 경력사원 공개채용을 실시합니다. 이번 채용에서는 연구개발, 생산관리, 품질관리 등 다양한 분야의 인재를 모집합니다.',
      image: '/images/news4.jpg',
    },
  ];

  const categories = ['전체', '보도자료', '채용', '공지사항'];
  const [selectedCategory, setSelectedCategory] = useState('전체');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredNews = news.filter(item => {
    const matchesCategory = selectedCategory === '전체' || item.category === selectedCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-900 text-white mb-16">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              뉴스
            </h1>
            <p className="text-xl text-gray-300">
              LUMEX의 최신 소식을 전해드립니다
            </p>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="w-full md:w-64">
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              className="w-full px-4 py-2 border rounded-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid gap-8">
            {filteredNews.map((item) => (
              <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {item.category}
                    </span>
                    <span className="text-gray-500">
                      <i className="fas fa-calendar-alt mr-2"></i>
                      {item.date}
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
                  <p className="text-gray-600 mb-4">{item.content}</p>
                  <button className="text-blue-600 hover:text-blue-800 transition-colors">
                    자세히 보기 <i className="fas fa-arrow-right ml-2"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-gray-50 py-16 mt-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">뉴스레터 구독</h2>
            <p className="text-lg text-gray-600 mb-8">
              LUMEX의 최신 소식을 이메일로 받아보세요.
              주요 뉴스와 채용 정보를 가장 먼저 전해드립니다.
            </p>
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                placeholder="이메일 주소를 입력하세요"
                className="flex-1 px-4 py-2 rounded-l-lg border-2 border-r-0 border-gray-200 focus:outline-none focus:border-blue-600"
              />
              <button className="px-6 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors">
                구독하기
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 