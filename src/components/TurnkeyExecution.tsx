import React from 'react';

interface TurnkeyExecutionProps {
  title: string;
  description: string;
  steps: string[];
}

const TurnkeyExecution: React.FC<TurnkeyExecutionProps> = ({ title, description, steps }) => {
  return (
    <section className="py-20 px-4 bg-gray-50 w-full">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          {title}
        </h2>
        
        <p className="text-lg text-gray-600 text-center mb-12 max-w-4xl mx-auto">
          {description}
        </p>

        <div className="grid md:grid-cols-5 gap-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-lg p-6 shadow-lg h-full">
                <div className="text-3xl font-bold text-blue-600 mb-4">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {step}
                </h3>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TurnkeyExecution; 