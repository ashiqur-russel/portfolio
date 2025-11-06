import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React from 'react';
import { motion } from 'motion/react';
import Link from 'next/link';

const Work = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My Portfolio
      </motion.h4>

      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        Some of My Projects
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Explore a collection of projects showcasing my expertise in full stack
        development, built with modern web technologies.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ y: -8, scale: 1.02 }}
            transition={{ duration: 0.3 }}
            key={index}
            className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden 
                     flex flex-col border border-gray-100 dark:border-gray-800
                     hover:shadow-2xl hover:shadow-purple-500/20 dark:hover:shadow-purple-400/20"
          >
            {/* Project Image */}
            <div className="relative w-full aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 hover:scale-110"
                priority={index < 3}
              />
            </div>

            {/* Project Details */}
            <div className="p-6 flex flex-col flex-grow">
              <h2 className="font-bold text-xl text-gray-900 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-medium text-purple-700 bg-purple-100 
                             rounded-full dark:bg-purple-900/30 dark:text-purple-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links - Aligned at bottom */}
              <div className="flex flex-wrap gap-3 mt-auto">
                <Link
                  href={`/projects/${encodeURIComponent(project.slug)}`}
                  className="flex-1 text-center px-4 py-2.5 text-sm font-semibold text-white 
                           bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg 
                           hover:from-purple-700 hover:to-purple-800 transition-all duration-300
                           shadow-lg shadow-purple-500/30"
                >
                  View Details
                </Link>
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-sm font-semibold text-gray-700 dark:text-gray-300
                           bg-gray-100 dark:bg-gray-800 rounded-lg 
                           hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300"
                  title="View on GitHub"
                >
                  GitHub
                </Link>
                <Link
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 text-sm font-semibold text-blue-600 dark:text-blue-400
                           bg-blue-50 dark:bg-blue-900/20 rounded-lg 
                           hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-all duration-300"
                  title="View Live Demo"
                >
                  Live
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.5 }}
        href="https://github.com/ashiqur-russel"
        target="_blank"
        className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover"
      >
        More
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Right arrow"
          className="w-4"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;
