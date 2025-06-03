import React from 'react';

interface CoreTechnologyProps {
  title: string;
  technologies: string[];
}

const CoreTechnology: React.FC<CoreTechnologyProps> = ({ title, technologies }) => {
  return (
    <section className="py-20 px-4 bg-white w-full">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8">
              <div className="flex items-center">
                <span className="text-blue-600 mr-4 text-2xl">•</span>
                <p className="text-lg text-gray-700">{tech}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreTechnology; 