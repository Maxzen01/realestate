import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const commercialPlots = [
  {
    id: 201,
    category: 'Commercial',
    name: 'Highway Business Park',
    price: '₹85 Lakhs',
    location: 'Venkatapalem',
    sqYards: 400,
    facing: 'North',
    extent: '80x60',
    call: '+91 9052693333',
    whatsapp: '9052693333',
  },
  {
    id: 202,
    category: 'Commercial',
    name: 'Metro Mall Plot',
    price: '₹95 Lakhs',
    location: 'Thullur',
    sqYards: 500,
    facing: 'East',
    extent: '90x70',
    call: '+91 9052693333',
    whatsapp: '9052693333',
  },
  {
    id: 203,
    category: 'Commercial',
    name: 'Amaravati Trade Hub',
    price: '₹1.2 Cr',
    location: 'Navuluru',
    sqYards: 600,
    facing: 'South',
    extent: '100x80',
    call: '+91 9052693333',
    whatsapp: '9052693333',
  },
];

const CommercialPlots = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold text-blue-900 mb-2"
            >
              Commercial Plots - Amaravati Capital
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Link
              to="/commercial-plots"
              className="mt-2 sm:mt-0 inline-block bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition"
            >
              View All
            </Link>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
      >
        {commercialPlots.map((plot) => (
          <motion.div
            key={plot.id}
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="bg-gray-50 shadow-lg rounded-lg p-6 flex flex-col justify-between h-full border hover:shadow-2xl transition"
          >
            <div>
              {/* Category */}
              <span className="inline-block bg-yellow-100 text-yellow-700 px-3 py-1 text-sm font-semibold rounded-full mb-2">
                {plot.category}
              </span>

              {/* Name & Price */}
              <h3 className="text-lg font-semibold text-blue-800 hover:underline mb-1">
                <Link to={`/property/${plot.id}`}>{plot.name}</Link>
              </h3>
              <p className="text-green-600 font-bold mb-4">{plot.price}</p>

              {/* Amenities */}
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

            {/* Call to Actions */}
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
      </motion.div>
    </section>
  );
};

export default CommercialPlots;
