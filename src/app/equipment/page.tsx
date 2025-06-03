'use client';

import React from 'react';
import EquipmentSystems from '../../components/EquipmentSystems';

export default function EquipmentPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20">
      <EquipmentSystems
        title="공급가능 설비 및 시스템"
        systems={[
          {
            name: "롤러 헤밍 어플리케이션",
            englishName: "ROLLER HEMMING APPLICATION",
            description: "다양한 자동차 부품의 헤밍 공정에 사용되는 자동화 시스템"
          },
          {
            name: "클로저 피팅 라인",
            englishName: "CLOSURE FITTING LINE",
            description: "차량 도어, 후드, 트렁크 등 클로저 부품의 정밀 피팅 및 조립 라인"
          },
          {
            name: "체킹 픽스처",
            englishName: "CHECKING FIXTURE",
            description: "생산된 부품의 정확한 치수 및 품질 검사를 위한 정밀 픽스처"
          },
          {
            name: "피팅 게이지 & 지그",
            englishName: "FITTING GAUGE & JIG",
            description: "정확한 조립 및 검사를 위한 맞춤형 게이지 및 지그"
          }
        ]}
      />
    </main>
  );
} 