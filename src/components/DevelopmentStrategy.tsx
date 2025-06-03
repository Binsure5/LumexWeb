import React from 'react';

interface Goal {
  year: number;
  target: string;
  current: string;
}

interface Strategy {
  title: string;
  details: string[];
}

interface DevelopmentStrategyProps {
  title: string;
  goal: Goal;
  strategies: Strategy[];
}

const DevelopmentStrategy: React.FC<DevelopmentStrategyProps> = ({ title, goal, strategies }) => {
  return (
    <section className="py-20 px-4 bg-gray-50 w-full">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {title}
        </h2>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">
            {goal.year}년 매출 1억불 달성 목표
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <p className="text-gray-600 mb-2">목표 매출</p>
              <p className="text-3xl font-bold text-blue-600">{goal.target}</p>
            </div>
            <div className="text-center">
              <p className="text-gray-600 mb-2">현재 매출</p>
              <p className="text-3xl font-bold text-blue-600">{goal.current}</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {strategies.map((strategy, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-xl font-bold mb-6">
                {strategy.title}
              </h3>
              <ul className="space-y-4">
                {strategy.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-600">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevelopmentStrategy; 