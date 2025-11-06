'use client';

import { twMerge } from 'tailwind-merge';
import { TracingBeam } from './ui/tracing-beam';
import { motion } from 'framer-motion';

import React from 'react';
import calSans from '@/fonts/calsans';
import { Button } from './ui/moving-border';

const Experience = () => {
  return (
    <>
      <div className="mb-6 text-center">
        <motion.h4
          className="text-center mb-2 text-lg font-Ovo"
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Career Path
        </motion.h4>
        <motion.h2
          className="text-center text-3xl sm:text-5xl font-Ovo"
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Experience
        </motion.h2>
      </div>

      <TracingBeam className="max-w-4xl mx-auto relative">
        {careerExperience.map((item, index) => (
          <motion.div
            key={index}
            className="mb-12 p-4 rounded-2xl border border-white/10 dark:border-black/10 bg-white dark:bg-black shadow-md dark:shadow-sm"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <Button
                borderRadius="1.75rem"
                className="bg-black text-white dark:bg-white dark:text-black border-neutral-200 dark:border-slate-800"
              >
                {item.role}
              </Button>
              <span className="text-xs text-black dark:text-white italic">
                {item.type}
              </span>
            </div>

            <p
              className={twMerge(
                calSans.className,
                'text-xl font-semibold mb-1'
              )}
            >
              {item.company}
            </p>

            <p className="text-sm text-neutral-400 dark:text-neutral-600 mb-3">
              {item.location} &middot; {item.period}
            </p>

            <ul className="list-disc pl-5 text-sm leading-6 text-black dark:text-white">
              {item.highlights.map((point, idx) => (
                <li key={idx}>
                  {point.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </TracingBeam>
    </>
  );
};

export default Experience;

const careerExperience = [
  {
    role: 'Full-Stack Developer',
    type: 'Full-Time',
    company: 'AFQ I Service GmbH',
    location: 'Karlsruhe, Germany',
    period: 'Aug 2024 – Present',
    highlights: [
      'Leading a development team in restructuring legacy applications for improved scalability and maintainability',
      'Architecting and implementing modern full-stack solutions with focus on performance optimization',
      'Establishing DevOps practices and CI/CD pipelines to automate deployment processes',
      'Driving technical decisions and code quality standards across the team',
      'Implementing automated testing strategies and monitoring solutions',
      'Reducing deployment time by 60% through infrastructure automation',
    ],
  },
  {
    role: 'Full-Stack Developer',
    type: 'Full-Time',
    company: 'BIDI Bildung Digital GmbH',
    location: 'Dresden, Germany',
    period: 'May 2023 – Jul 2024',
    highlights: [
      'Built full-stack ed-tech features for better student engagement',
      'Refactored APIs and improved performance and scalability',
      'Integrated HubSpot & Contentful for dynamic content management',
      'Achieved ~80% test coverage across Angular and Nest.js components\nusing Jest and Jasmine, ensuring robust and maintainable code.',
      'Performed regular code reviews for clean, scalable codebase',
    ],
  },
  {
    role: 'Full-Stack Developer',
    type: 'Werkstudent',

    company: 'Bosch Rexroth AG',
    location: 'Ulm, Germany',
    period: 'Oct 2022 – Apr 2023',
    highlights: [
      'Delivered internal tools used by 500+ partners',
      'Implemented secure session-based auth with SSO',
      'Improved backend logic and query performance',
    ],
  },
  {
    role: 'Full Stack Developer',
    type: 'Internship',
    company: 'Bosch Rexroth AG',
    location: 'Ulm, Germany',
    period: 'Apr 2022 – Sep 2022',
    highlights: [
      'Created admin dashboard for e-commerce CMS',
      'Achieved 90+ Lighthouse scores on core web vitals',
      'Automated CI/CD pipelines and GitLab deployments',
    ],
  },
];
