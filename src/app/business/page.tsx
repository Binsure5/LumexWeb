'use client';

import React from 'react';
import BusinessAreas from '../../components/BusinessAreas';

export default function BusinessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <BusinessAreas 
        title="사업분야 및 경쟁력"
        areas={[
          {
            title: "자동차 제조 자동화 설비",
            description: "최첨단 자동화 설비 및 시스템 구축"
          },
          {
            title: "스마트 팩토리 솔루션",
            description: "AI 기반 생산 최적화 및 데이터 분석"
          },
          {
            title: "턴키 솔루션",
            description: "설계부터 설치까지 완벽한 턴키 프로젝트 수행"
          }
        ]}
      />
    </main>
  );
} 