'use client';

import React from 'react';

export default function Patents() {
  const patents = [
    {
      category: '자동화 기술',
      items: [
        {
          title: '로봇 용접 제어 시스템',
          number: '10-2023-1234567',
          date: '2023.05',
          status: '등록',
        },
        {
          title: 'AI 기반 품질 검사 방법',
          number: '10-2023-2345678',
          date: '2023.07',
          status: '등록',
        },
        {
          title: '스마트 팩토리 운영 시스템',
          number: '10-2023-3456789',
          date: '2023.09',
          status: '출원',
        },
      ],
    },
    {
      category: '배터리 하우징',
      items: [
        {
          title: '고강도 배터리 케이스 구조',
          number: '10-2023-4567890',
          date: '2023.06',
          status: '등록',
        },
        {
          title: '배터리 냉각 시스템',
          number: '10-2023-5678901',
          date: '2023.08',
          status: '등록',
        },
        {
          title: '경량화 배터리 마운팅 구조',
          number: '10-2023-6789012',
          date: '2023.10',
          status: '출원',
        },
      ],
    },
  ];

  const certifications = [
    {
      category: '품질 인증',
      items: [
        {
          name: 'ISO 9001:2015',
          description: '품질경영시스템 인증',
          date: '2023.01',
          organization: 'TÜV SÜD',
        },
        {
          name: 'IATF 16949:2016',
          description: '자동차 품질경영시스템 인증',
          date: '2023.03',
          organization: 'TÜV SÜD',
        },
      ],
    },
    {
      category: '환경 인증',
      items: [
        {
          name: 'ISO 14001:2015',
          description: '환경경영시스템 인증',
          date: '2023.02',
          organization: 'TÜV SÜD',
        },
        {
          name: '녹색기업 인증',
          description: '환경부 녹색기업 지정',
          date: '2023.04',
          organization: '환경부',
        },
      ],
    },
    {
      category: '안전 인증',
      items: [
        {
          name: 'ISO 45001:2018',
          description: '안전보건경영시스템 인증',
          date: '2023.05',
          organization: 'TÜV SÜD',
        },
        {
          name: '안전보건 경영인증',
          description: '산업안전보건공단 인증',
          date: '2023.06',
          organization: 'KOSHA',
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
              특허 및 인증
            </h1>
            <p className="text-xl text-gray-300">
              LUMEX의 기술력을 입증하는 특허와 인증 현황
            </p>
          </div>
        </div>
      </section>

      {/* Patents Section */}
      <section className="container mx-auto px-4 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">특허</h2>
        <div className="space-y-8">
          {patents.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="bg-blue-600 text-white p-4">
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              <div className="p-4">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="py-2 px-4 text-left">특허명</th>
                        <th className="py-2 px-4 text-left">출원번호</th>
                        <th className="py-2 px-4 text-left">출원일</th>
                        <th className="py-2 px-4 text-left">상태</th>
                      </tr>
                    </thead>
                    <tbody>
                      {category.items.map((patent, patentIndex) => (
                        <tr key={patentIndex} className="border-b">
                          <td className="py-2 px-4">{patent.title}</td>
                          <td className="py-2 px-4">{patent.number}</td>
                          <td className="py-2 px-4">{patent.date}</td>
                          <td className="py-2 px-4">
                            <span className={`px-2 py-1 rounded text-sm ${
                              patent.status === '등록' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                            }`}>
                              {patent.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">인증</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {certifications.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="text-xl font-bold">{category.category}</h3>
                </div>
                <div className="p-4">
                  {category.items.map((cert, certIndex) => (
                    <div key={certIndex} className="mb-4 last:mb-0 p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-bold mb-2">{cert.name}</h4>
                      <p className="text-gray-600 text-sm mb-2">{cert.description}</p>
                      <div className="text-sm text-gray-500">
                        <div>인증기관: {cert.organization}</div>
                        <div>인증일: {cert.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
} 