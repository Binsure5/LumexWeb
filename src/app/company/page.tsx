'use client';

import React from 'react';
import CompanyOverview from '../../components/CompanyOverview';

export default function CompanyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <CompanyOverview 
        title="『LUMEX』 회사 개요"
        description="『LUMEX』는 자동차 제조 산업의 혁신과 효율성을 극대화하기 위해 최첨단 자동화 솔루션을 제공합니다. 스마트 팩토리 기술과 AI 기반 자동화를 통해 생산 공정을 최적화하고, 글로벌 자동차 산업에 완벽하게 통합될 수 있는 턴키 솔루션을 제공합니다."
        values={[
          {
            title: "혁신",
            description: "Innovation - 자동차 제조 자동화 기술의 혁신을 선도"
          },
          {
            title: "신뢰성",
            description: "Reliability - 일관된 품질과 신뢰할 수 있는 솔루션 제공"
          },
          {
            title: "탁월함",
            description: "Excellence - 지속적인 기술 개발과 장기적인 성장 추구"
          }
        ]}
      />
    </main>
  );
} 