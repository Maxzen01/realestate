import React from 'react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Evaluate Property',
    icon: '🔍',
    description:
      'Evaluating a property in real estate involves determining its market value and condition, helping buyers, sellers, and investors make informed decisions.',
  },
  {
    title: "Let's Discuss",
    icon: '💬',
    description:
      'Meetings, whether in-person or virtual, involve clients and professionals discussing goals, preferences, and strategies to ensure smooth property transactions.',
  },
  {
    title: 'Close the Deal',
    icon: '🤝',
    description:
      'Deal & value services provide essential support in real estate, including loan assistance, legal agreements, and registration, ensuring a smooth transaction.',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-white text-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-blue-700 mb-14"
      >
        Why choose Topline Realty
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-4">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-gray-50 shadow-md rounded-xl p-6 hover:shadow-xl transition duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            variants={cardVariants}
          >
            <div className="text-5xl mb-5">{feature.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">{feature.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
