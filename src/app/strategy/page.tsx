'use client';

import React from 'react';
import DevelopmentStrategy from '../../components/DevelopmentStrategy';

export default function StrategyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <DevelopmentStrategy
        title="Development Strategy"
        goal={{
          year: 2028,
          target: "USD 100M",
          current: "USD 10M"
        }}
        strategies={[
          {
            title: "인재 육성 : 인재는 루멕스의 자산",
            details: [
              "인재 풀(POOL) 확장: 2028년까지 직원 수를 60명에서 150명으로 확대",
              "최고의 전문성 개발: 최첨단 기술 역량을 갖춘 직원 양성을 위한 교육 프로그램 강화"
            ]
          },
          {
            title: "글로벌 확장 : 경영진은 루멕스의 강점",
            details: [
              "새로운 지사 개설: 글로벌 자동차 제조업체 지원을 위한 국제적 입지 강화",
              "핵심 파트너십 구축: OEM, 티어 1 공급업체 및 기술 혁신 기업과 협업"
            ]
          },
          {
            title: "인프라 개발 : 운영 능력은 루멕스의 유산",
            details: [
              "한국 내 신규 공장 설립: 증가하는 시장 수요에 대응하고 생산 효율성을 극대화하기 위한 새로운 제조 시설 구축",
              "연구 개발 (R&D) 역량 강화: 혁신적인 기술 개발 및 제품 개선을 위한 R&D 투자 확대"
            ]
          }
        ]}
      />
    </main>
  );
} 