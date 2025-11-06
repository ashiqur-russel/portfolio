import { assets } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-6 sm:px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-3xl sm:text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-16 my-10 sm:my-16"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[360px] mx-auto lg:mx-0
                   rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <div className="mb-6 sm:mb-10 max-w-2xl mx-auto sm:mx-0 space-y-4">
            <p className="font-Ovo text-base sm:text-lg leading-relaxed">
              I transform complex problems into elegant digital solutions. As a
              Full-Stack Developer at{' '}
              <span className="font-semibold text-purple-600 dark:text-purple-400">
                AFQ I Service GmbH
              </span>
              , I lead development initiatives that make applications faster,
              more scalable, and maintainable.
            </p>

            <p className="font-Ovo text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              My journey spans building ed-tech platforms at BIDI, architecting
              internal tools for 500+ partners at Bosch, and now restructuring
              legacy systems into modern, automated pipelines. I believe great
              code isn&apos;t just about what works—it&apos;s about what lasts.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {[
                'React',
                'Angular',
                'Next.js',
                'NestJS',
                'TypeScript',
                'DevOps',
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-xs sm:text-sm bg-gray-100 dark:bg-gray-800 
                           rounded-full text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Impact Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 my-8"
          >
            {[
              { number: '500+', label: 'Partners Served', emoji: '🤝' },
              { number: '3+', label: 'Companies', emoji: '🏢' },
              { number: '60%', label: 'Faster Deploys', emoji: '⚡' },
              { number: '2+', label: 'Years Experience', emoji: '💼' },
            ].map((stat, index) => (
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-2xl p-6 
                         text-center bg-gradient-to-br from-white to-gray-50 
                         dark:from-gray-800 dark:to-gray-900
                         hover:shadow-xl hover:shadow-purple-500/20 dark:hover:shadow-purple-400/20
                         transition-all duration-300"
              >
                <div className="text-3xl mb-2">{stat.emoji}</div>
                <div className="text-3xl sm:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                  {stat.number}
                </div>
                <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
