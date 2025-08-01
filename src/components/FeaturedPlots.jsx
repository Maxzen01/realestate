import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const plotData = [
  {
    id: 1,
    category: 'Residential',
    name: 'Premium Residency Plot',
    price: '₹35 Lakhs',
    location: 'Thullur',
    sqYards: 200,
    facing: 'East',
    extent: '50x36',
    call: '+91 9052693333',
    whatsapp: '9052693333',
  },
  {
    id: 2,
    category: 'Commercial',
    name: 'Main Road Business Plot',
    price: '₹75 Lakhs',
    location: 'Venkatapalem',
    sqYards: 300,
    facing: 'North',
    extent: '60x45',
    call: '+91 9052693333',
    whatsapp: '9052693333',
  },
  {
    id: 3,
    category: 'Land',
    name: 'Open Agriculture Land',
    price: '₹22 Lakhs',
    location: 'Rayapudi',
    sqYards: 500,
    facing: 'West',
    extent: '80x56',
    call: '+91 9052693333',
    whatsapp: '9052693333',
  },
];

const FeaturedPlots = () => {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mb-14"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4 sm:mb-0">
            Featured CRDA Plots
          </h2>
          <Link
            to="/all-plots"
            className="inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
          >
            View All
          </Link>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {plotData.map((plot, index) => (
          <motion.div
            key={plot.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="bg-white shadow-lg rounded-xl p-6 border hover:shadow-2xl transition h-full flex flex-col justify-between"
          >
            <div>
              <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 text-sm font-semibold rounded-full mb-3">
                {plot.category}
              </span>

              <h3 className="text-lg font-semibold text-blue-800 mb-1 hover:underline">
                <Link to={`/property/${plot.id}`}>{plot.name}</Link>
              </h3>

              <p className="text-green-600 font-bold mb-4">{plot.price}</p>

              <div className="grid grid-cols-2 text-sm text-gray-700 gap-y-2">
                <div>
                  <strong>📍 Location:</strong> {plot.location}
                </div>
                <div>
                  <strong>📏 Sq Yards:</strong> {plot.sqYards}
                </div>
                <div>
                  <strong>🧭 Facing:</strong> {plot.facing}
                </div>
                <div>
                  <strong>📐 Extent:</strong> {plot.extent}
                </div>
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

export default FeaturedPlots;
