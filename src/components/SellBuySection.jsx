import React from 'react';
import { motion } from 'framer-motion';

const SellBuySection = () => {
  return (
    <section className="bg-blue-50 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Content with Animation */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Buy/Sell CRDA Plots in Amaravathi?
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Buy or sell your Amaravati polling plots for sale in Amaravati with{' '}
            <strong className="text-blue-700">Topline Realty</strong>. Our comprehensive platform connects buyers and sellers,
            providing a seamless and transparent process.
          </p>
          <a
            href="tel:+919052693333"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            📞 Contact Us
          </a>
        </motion.div>

        {/* Right Side Video with Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full aspect-video"
        >
          <iframe
            className="w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/BMheSj5SnsI?controls=1"
            title="Topline Realty Amaravati"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default SellBuySection;
