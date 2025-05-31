'use client';

import React from 'react';

export default function Vision() {
  const visionData = {
    mission: {
      title: '미션',
      description: '혁신적인 기술로 더 나은 미래를 창조합니다',
      details: [
        '고객 가치 창출',
        '기술 혁신 선도',
        '지속 가능한 성장',
        '사회적 책임 실현',
      ],
    },
    vision2030: {
      title: 'Vision 2030',
      description: '글로벌 자동차 부품 기술 선도기업',
      goals: [
        {
          title: '매출 1조원 달성',
          description: '글로벌 시장 점유율 확대',
        },
        {
          title: '기술 혁신 선도',
          description: '핵심 기술 특허 200건 확보',
        },
        {
          title: '글로벌 네트워크',
          description: '해외 거점 10개국 확대',
        },
        {
          title: '인재 육성',
          description: '글로벌 전문인력 500명 양성',
        },
      ],
    },
    coreValues: [
      {
        title: '도전정신',
        description: '끊임없는 혁신과 도전으로 미래를 개척',
        icon: 'fas fa-flag',
      },
      {
        title: '전문성',
        description: '최고의 기술력과 품질로 고객 만족 실현',
        icon: 'fas fa-star',
      },
      {
        title: '창의성',
        description: '창의적 사고로 새로운 가치 창출',
        icon: 'fas fa-lightbulb',
      },
      {
        title: '협력',
        description: '상생과 협력으로 함께 성장',
        icon: 'fas fa-hands-helping',
      },
    ],
  };

  return (
    <main className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gray-900 text-white mb-16">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto px-4 h-full flex items-center relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              비전
            </h1>
            <p className="text-xl text-gray-300">
              LUMEX가 그리는 미래
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">{visionData.mission.title}</h2>
          <p className="text-xl mb-8">{visionData.mission.description}</p>
          <div className="grid md:grid-cols-2 gap-4">
            {visionData.mission.details.map((detail, index) => (
              <div key={index} className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision 2030 Section */}
      <section className="bg-gray-50 py-16 mb-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            {visionData.vision2030.title}
          </h2>
          <p className="text-xl text-center mb-12">
            {visionData.vision2030.description}
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {visionData.vision2030.goals.map((goal, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">{goal.title}</h3>
                <p className="text-gray-600">{goal.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">핵심가치</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {visionData.coreValues.map((value, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl text-blue-600 mb-4">
                <i className={value.icon}></i>
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
} 