import React from 'react';

export default function ProjectsPage() {
  const projectExecution = {
    title: "Project Execution",
    steps: [
      {
        title: "S.E. Design & Feasibility",
        description: "Initial design review and feasibility studies for production planning",
        details: [
          "Product design review",
          "Assembly process analysis",
          "Equipment specification review",
          "Investment analysis",
          "Layout design"
        ]
      },
      {
        title: "Process Planning & Simulation",
        description: "Comprehensive process design and simulation for optimization",
        details: [
          "Layout design",
          "Work instructions",
          "Cycle time charts",
          "Manufacturing control planning",
          "Logistics planning",
          "3D simulation"
        ]
      },
      {
        title: "Equipment Design & Manufacturing",
        description: "Expert design and manufacturing of specialized equipment",
        details: [
          "Design software: CATIA V5, UG, AutoCAD",
          "Simulation: Siemens-Robcad",
          "Precision inspection: 3D CMM",
          "Pre-shipment testing"
        ]
      },
      {
        title: "Installation & Commissioning",
        description: "Professional installation and startup support",
        details: [
          "Equipment installation",
          "Quality target achievement",
          "Cycle time verification",
          "System reliability validation",
          "Process capability verification"
        ]
      }
    ]
  };

  const equipmentGallery = [
    {
      category: "Main Equipment",
      items: [
        "Main Buck",
        "Transfer Systems",
        "Robot Handling Applications",
        "Assembly Jigs"
      ]
    },
    {
      category: "Automation Systems",
      items: [
        "Auto Pallet Changing System",
        "Closures Fitting Line",
        "Hemming Press",
        "Table Top Hemming"
      ]
    },
    {
      category: "Quality Tools",
      items: [
        "Checking Fixtures",
        "Fitting Gauges & Jigs",
        "Roller Hemming Applications",
        "Closure Fitting Lines"
      ]
    }
  ];

  return (
    <main className="min-h-screen py-20">
      {/* Project Execution Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">Projects</h1>
          
          <div className="space-y-12">
            <h2 className="text-3xl font-bold mb-8">{projectExecution.title}</h2>
            
            <div className="space-y-8">
              {projectExecution.steps.map((step, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                  <div className="flex items-start">
                    <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                      <p className="text-gray-600 mb-4">{step.description}</p>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {step.details.map((detail, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <span className="text-blue-600 mr-2">•</span>
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Gallery Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Equipment Gallery</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {equipmentGallery.map((category, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4 text-blue-600">
                  {category.category}
                </h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="text-blue-600 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project References Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold mb-8">Project References</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Domestic Alliances</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-blue-600">Equipment Design</h4>
                  <p className="text-gray-600">Specialized partners for jig design, frame systems, and conveyor design</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600">Manufacturing</h4>
                  <p className="text-gray-600">Expert manufacturing partners with advanced facilities</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600">Commissioning</h4>
                  <p className="text-gray-600">Professional installation and startup support</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold mb-4">Overseas Alliances</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-blue-600">Engineering</h4>
                  <p className="text-gray-600">Global engineering expertise and support</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600">Manufacturing</h4>
                  <p className="text-gray-600">International manufacturing capabilities</p>
                </div>
                <div>
                  <h4 className="font-bold text-blue-600">Installation & Commissioning</h4>
                  <p className="text-gray-600">Worldwide installation and commissioning services</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 