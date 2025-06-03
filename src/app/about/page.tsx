'use client';

import React from 'react';
import Link from 'next/link';

export default function AboutPage() {
  const sections = [
    {
      title: 'CEO 인사말',
      description: '혁신과 도전으로 미래를 창조하는 LUMEX',
      link: '/about/ceo',
      icon: 'fas fa-user-tie',
    },
    {
      title: '연혁',
      description: '1994년부터 이어온 LUMEX의 발자취',
      link: '/about/history',
      icon: 'fas fa-history',
    },
    {
      title: '비전',
      description: '글로벌 자동차 부품 기술 선도기업',
      link: '/about/vision',
      icon: 'fas fa-lightbulb',
    },
    {
      title: '조직도',
      description: '효율적이고 전문적인 조직 구성',
      link: '/about/organization',
      icon: 'fas fa-sitemap',
    },
  ];

  const stats = [
    {
      number: '30년',
      label: '업력',
    },
    {
      number: '300+',
      label: '임직원',
    },
    {
      number: '5개국',
      label: '해외법인',
    },
    {
      number: '200+',
      label: '특허보유',
    },
  ];

  return (
    <main className="min-h-screen py-20">
      {/* Company Overview Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">About LUMEX</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-4">Company Overview</h2>
              <div className="space-y-4">
                <p className="text-gray-600">
                  LUMEX specializes in automotive production line automation, providing comprehensive solutions from engineering to mass production. We are committed to enhancing structural stability and precision in Body-in-White (BIW) welding systems.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-bold">Company Name</h3>
                    <p className="text-gray-600">LUMEX</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Established</h3>
                    <p className="text-gray-600">February 14, 2025</p>
                  </div>
                  <div>
                    <h3 className="font-bold">CEO</h3>
                    <p className="text-gray-600">Jang Min-ho</p>
                  </div>
                  <div>
                    <h3 className="font-bold">Employees</h3>
                    <p className="text-gray-600">10+</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">Core Values</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-blue-600">Innovation</h3>
                  <p className="text-gray-600">Leading technological advancement in automotive manufacturing automation</p>
                </div>
                <div>
                  <h3 className="font-bold text-blue-600">Reliability</h3>
                  <p className="text-gray-600">Delivering consistent quality and trustworthy solutions</p>
                </div>
                <div>
                  <h3 className="font-bold text-blue-600">Sustainable Growth</h3>
                  <p className="text-gray-600">Fostering continuous improvement and long-term development</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Vision & Mission</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Vision</h3>
              <p className="text-gray-600 mb-4">
                Based on 'Luminous Next', we are dedicated to technological innovation for efficient manufacturing. Our vision is to redefine the future of automotive manufacturing through intelligent automation and cutting-edge engineering.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Mission</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <strong>Maximize Efficiency</strong>
                    <p className="text-gray-600">Develop smart automation solutions that optimize production speed and cost efficiency</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <strong>Ensure Precision & Reliability</strong>
                    <p className="text-gray-600">Provide high-quality, future-oriented manufacturing technology</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <strong>Lead Industry 4.0 Transformation</strong>
                    <p className="text-gray-600">Support global manufacturers through AI-based, data-driven automation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <div>
                    <strong>Foster Sustainable Growth</strong>
                    <p className="text-gray-600">Develop eco-friendly and scalable manufacturing technologies</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Organization Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Organization</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Departments</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-blue-600">Engineering and R&D</h4>
                  <p className="text-gray-600">Technical innovation and advanced manufacturing system development</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600">Production & Quality</h4>
                  <p className="text-gray-600">Manufacturing process excellence and quality assurance</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600">Sales & Finance</h4>
                  <p className="text-gray-600">Business growth and financial stability</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600">HR</h4>
                  <p className="text-gray-600">Talent management and development</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4">Expertise Distribution</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span>Engineering</span>
                  <span className="text-blue-600">34%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Manufacturing & QC</span>
                  <span className="text-blue-600">25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Design</span>
                  <span className="text-blue-600">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Support</span>
                  <span className="text-blue-600">12%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Project Management</span>
                  <span className="text-blue-600">9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {sections.map((section, index) => (
                <Link 
                  key={index} 
                  href={section.link}
                  className="bg-white rounded-lg shadow-lg p-8 text-center transition-transform hover:transform hover:-translate-y-2"
                >
                  <div className="text-4xl text-blue-600 mb-4">
                    <i className={section.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                  <p className="text-gray-600">{section.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 