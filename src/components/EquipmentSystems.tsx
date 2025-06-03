import React from 'react';

interface System {
  name: string;
  englishName: string;
  description: string;
}

interface EquipmentSystemsProps {
  title: string;
  systems: System[];
}

const EquipmentSystems: React.FC<EquipmentSystemsProps> = ({ title, systems }) => {
  return (
    <section className="py-20 px-4 bg-white w-full">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {systems.map((system, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-2">
                {system.name}
              </h3>
              <p className="text-blue-600 font-medium mb-4">
                {system.englishName}
              </p>
              <p className="text-gray-600">
                {system.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EquipmentSystems; 