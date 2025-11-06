import React from 'react';
import { motion } from 'motion/react';

const achievementsData = [
  {
    title: '⚡ 60% Faster Deployments',
    description:
      'Implemented automated CI/CD pipelines and infrastructure optimization, reducing deployment time from manual processes to fully automated workflows.',
    metric: '60%',
    label: 'Time Saved',
  },
  {
    title: '🧪 80% Test Coverage',
    description:
      'Established comprehensive testing strategies across Angular and NestJS applications using Jest and Jasmine, ensuring robust and maintainable code.',
    metric: '80%',
    label: 'Coverage',
  },
  {
    title: '🏗️ 500+ Partners Served',
    description:
      'Architected and delivered scalable internal tools and platforms used by hundreds of partners and thousands of end users across multiple industries.',
    metric: '500+',
    label: 'Users Impacted',
  },
];

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="solution"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Impact & Results
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Recent Wins
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Real achievements from building scalable applications, optimizing
        performance, and delivering measurable impact.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 my-10"
      >
        {achievementsData.map(
          ({ title, description, metric, label }, index) => (
            <motion.div
              whileHover={{ scale: 1.03, y: -5 }}
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-2xl p-8 
                     bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900
                     hover:shadow-xl hover:shadow-purple-500/20 dark:hover:shadow-purple-400/20
                     cursor-pointer transition-all duration-300"
            >
              <div className="mb-6">
                <div className="text-5xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                  {metric}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {label}
                </p>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">
                {title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                {description}
              </p>
            </motion.div>
          )
        )}
      </motion.div>
    </motion.div>
  );
};

export default Services;
