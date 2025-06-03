'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const Hero = dynamic(() => import('../components/Hero'), { ssr: false });
const CompanyOverview = dynamic(() => import('../components/CompanyOverview'), { ssr: false });
const BusinessAreas = dynamic(() => import('../components/BusinessAreas'), { ssr: false });
const CoreTechnology = dynamic(() => import('../components/CoreTechnology'), { ssr: false });
const TurnkeyExecution = dynamic(() => import('../components/TurnkeyExecution'), { ssr: false });
const EquipmentSystems = dynamic(() => import('../components/EquipmentSystems'), { ssr: false });
const DevelopmentStrategy = dynamic(() => import('../components/DevelopmentStrategy'), { ssr: false });
const ContactUs = dynamic(() => import('../components/ContactUs'), { ssr: false });

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero 
        title="LUMEX"
        subtitle="Automation Solutions for Automotive Manufacturing"
        description="자동차 제조 산업의 혁신과 효율성을 극대화하기 위한 최첨단 자동화 솔루션"
      />
      
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

      <ContactUs
        title="문의하기"
        description="LUMEX에 대한 더 자세한 정보나 문의사항이 있으시면 언제든지 연락 주십시오."
        contactInfo={{
          email: "info@lumex.com",
          phone: "+82-XX-XXXX-XXXX",
          address: "경기도 광주시 ... (PPTX에 명시된 주소)"
        }}
      />
    </main>
  );
} 