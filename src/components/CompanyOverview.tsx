import React from 'react';

interface Value {
  title: string;
  description: string;
}

interface CompanyOverviewProps {
  title: string;
  description: string;
  values: Value[];
}

const CompanyOverview: React.FC<CompanyOverviewProps> = ({ title, description, values }) => {
  return (
    <section className="py-20 px-4 bg-white w-full">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">
                {value.title}
              </h3>
              <p className="text-gray-600">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview; 