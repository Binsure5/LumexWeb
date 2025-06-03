'use client';

import React from 'react';
import TurnkeyExecution from '../../components/TurnkeyExecution';

export default function TurnkeyPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <TurnkeyExecution
        title="TURNKEY PROJECT EXECUTION"
        description="『LUMEX』는 고객의 요구사항을 반영하여 프로젝트의 기획부터 설계, 제작, 설치, 시운전, 그리고 사후 관리까지 모든 과정을 책임지는 턴키 솔루션을 제공합니다."
        steps={[
          "개념 설계 (Concept Design)",
          "상세 설계 (Detail Design)",
          "제작 및 조립 (Manufacturing & Assembly)",
          "설치 및 시운전 (Installation & Commissioning)",
          "사후 관리 및 지원 (After-sales Service)"
        ]}
      />
    </main>
  );
} 