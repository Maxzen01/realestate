import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const residentialPlots = [
  {
    id: 101,
    category: 'Residential',
    name: 'Capital Greens Residency',
    price: '₹40 Lakhs',
    location: 'Mandadam',
    sqYards: 250,
    facing: 'East',
    extent: '55x40',
    call: '+91 9052693333',
    whatsapp: '9052693333',
  },
  {
    id: 102,
    category: 'Residential',
    name: 'Riverfront Elite Plots',
    price: '₹60 Lakhs',
    location: 'Uddandarayunipalem',
    sqYards: 320,
    facing: 'North',
    extent: '65x50',
    call: '+91 9052693333',
    whatsapp: '9052693333',
  },
  {
    id: 103,
    category: 'Residential',
    name: 'Green Valley Phase-2',
    price: '₹30 Lakhs',
    location: 'Inavolu',
    sqYards: 180,
    facing: 'West',
    extent: '45x36',
    call: '+91 9052693333',
    whatsapp: '9052693333',
  },
];

const ResidentialPlots = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-2">
              Residential Plots - Amaravati Capital
            </h2>
          </div>
          <div>
            <Link
              to="/residential-plots"
              className="mt-2 sm:mt-0 inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              View All
            </Link>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {residentialPlots.map((plot, i) => (
          <motion.div
            key={plot.id}
            className="bg-gray-50 shadow-lg rounded-lg p-6 flex flex-col justify-between h-full border hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <div>
              <span className="inline-block bg-green-100 text-green-700 px-3 py-1 text-sm font-semibold rounded-full mb-2">
                {plot.category}
              </span>

              <h3 className="text-lg font-semibold text-blue-800 hover:underline mb-1">
                <Link to={`/property/${plot.id}`}>{plot.name}</Link>
              </h3>
              <p className="text-green-600 font-bold mb-4">{plot.price}</p>

              <div className="grid grid-cols-2 text-sm text-gray-700 gap-y-2">
                <div><strong>📍 Location:</strong> {plot.location}</div>
                <div><strong>📏 Sq Yards:</strong> {plot.sqYards}</div>
                <div><strong>🧭 Facing:</strong> {plot.facing}</div>
                <div><strong>📐 Extent:</strong> {plot.extent}</div>
              </div>
            </div>

            <div className="mt-6 flex justify-between gap-2">
              <a
                href={`tel:${plot.call}`}
                className="bg-blue-600 text-white px-4 py-2 rounded w-1/2 text-center hover:bg-blue-700"
              >
                📞 Call
              </a>
              <a
                href={`https://wa.me/91${plot.whatsapp}`}
                className="bg-green-600 text-white px-4 py-2 rounded w-1/2 text-center hover:bg-green-700"
              >
                💬 WhatsApp
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResidentialPlots;
