import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [keyword, setKeyword] = useState('');
  const [propertyType, setPropertyType] = useState('');

  const handleSearch = () => {
    if (!keyword && !propertyType) {
      alert("Please enter a keyword or select a property type.");
      return;
    }
    alert(`Searching for "${keyword}" in "${propertyType}"`);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      {/* 🔹 Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover brightness-50"
      >
        <source src="/background.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🔹 Hero Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="relative z-10 text-center px-6 py-10 max-w-3xl backdrop-blur-md bg-gradient-to-r from-white/20 to-white/10 border border-white/30 rounded-xl shadow-2xl"
      >
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-4xl sm:text-5xl font-extrabold text-yellow-400 mb-4 drop-shadow-lg"
        >
          Topline Realty!!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-lg sm:text-xl text-gray-200 mb-8"
        >
          Exclusive Real Estate Services in Amaravati City
        </motion.p>

        {/* 🔹 Search Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="flex flex-col md:flex-row gap-4 items-center justify-center"
        >
          <input
            type="text"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            placeholder="Enter keyword, area etc.,"
            className="px-5 py-3 rounded-md text-black w-full md:w-auto shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <select
            value={propertyType}
            onChange={(e) => setPropertyType(e.target.value)}
            className="px-5 py-3 rounded-md text-black w-full md:w-auto shadow-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Property Type</option>
            <option>Agricultural Land</option>
            <option>Commercial Plot</option>
            <option>Residential Plot</option>
          </select>
          <button
            onClick={handleSearch}
            className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-md shadow-lg transition duration-300"
          >
            🔍 Search
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
