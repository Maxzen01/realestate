import React from 'react';

const properties = [
  {
    type: 'Agricultural Land',
    image: '/agriculture.jpg',
    description: 'Fertile land perfect for farming in Amaravati outskirts.',
  },
  {
    type: 'Commercial Plot',
    image: '/commercial.jpg',
    description: 'Ideal commercial space for business and startups.',
  },
  {
    type: 'Residential Plot',
    image: '/residential.jpg',
    description: 'Premium housing plots with clear documentation.',
  },
];

const PropertyTypes = () => {
  return (
    <section className="py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold text-blue-700 mb-10">Explore Property Types</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {properties.map((prop, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img
              src={prop.image}
              alt={prop.type}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{prop.type}</h3>
              <p className="text-gray-600 mb-4">{prop.description}</p>
              <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PropertyTypes;
