'use client';

import React from 'react';
import CoreTechnology from '../../components/CoreTechnology';

export default function TechnologyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <CoreTechnology 
        title="보유 기술력 및 솔루션"
        technologies={[
          "다양한 산업 분야의 고객 맞춤형 자동화 시스템 개발",
          "정밀 제어 기술 및 로봇 통합 솔루션",
          "데이터 기반 생산성 향상 솔루션",
          "공정 자동화 (Process Automation)",
          "조립 자동화 (Assembly Automation)",
          "품질 검사 시스템 (Quality Inspection Systems)"
        ]}
      />
    </main>
  );
} 