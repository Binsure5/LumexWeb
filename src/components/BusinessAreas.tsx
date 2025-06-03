import React from 'react';

interface BusinessArea {
  title: string;
  description: string;
}

interface BusinessAreasProps {
  title: string;
  areas: BusinessArea[];
}

const BusinessAreas: React.FC<BusinessAreasProps> = ({ title, areas }) => {
  return (
    <section className="py-20 px-4 bg-gray-50 w-full">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          {title}
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">
                  {area.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {area.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessAreas; 