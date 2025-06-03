import React from 'react';

interface GlobalNetworkProps {
  description: string;
}

const GlobalNetwork: React.FC<GlobalNetworkProps> = ({ description }) => {
  const partners = [
    {
      region: "Global OEM",
      companies: ["IGNATIO COMPANY"]
    },
    {
      region: "Europe & Africa",
      companies: ["BERKEM INDUSTRY"]
    },
    {
      region: "Asia",
      companies: ["TIANJIN MASTER", "TIANJIN MOLD", "DO DREAM", "HANUL"]
    },
    {
      region: "Southeast Asia",
      companies: ["GTG ENGINEERING", "INNOVATIVE ENGINEERING"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50 w-full">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
          Global Network
        </h2>
        
        <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
          {description}
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((region, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-blue-600">
                {region.region}
              </h3>
              <ul className="space-y-2">
                {region.companies.map((company, idx) => (
                  <li key={idx} className="text-gray-600">
                    {company}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">8+</div>
            <div className="text-gray-600">Global Partners</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">4+</div>
            <div className="text-gray-600">Regions</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork; 