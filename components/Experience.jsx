"use client";

import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./ui/tracing-beam";
import { motion } from "framer-motion";

import React from 'react';
import calSans from "@/fonts/calsans";

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

        <TracingBeam className="px-6">
          <div className="max-w-3xl mx-auto antialiased pt-4 relative">
          <div className="text-center">
       
      </div>
            {careerExperience.map((item, index) => (
              <div key={`exp-${index}`} className="mb-16">
                <h2 className="bg-black text-white dark:bg-white dark:text-black rounded-full text-xs sm:text-sm w-fit px-4 py-1 mb-4">
                  {item.role}
                </h2>
    
                <p className={twMerge(calSans.className, "text-xl font-semibold mb-2 text-gray-800 dark:text-white")}>
                  {item.company}
                </p>
    
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                  {item.location} &middot; {item.period}
                </p>
    
                <ul className="list-disc pl-5 text-sm leading-6 text-gray-700 dark:text-gray-300">
              {item.highlights.map((point, idx) => (
                <li key={idx}>
                  {point.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </li>
              ))}
            </ul>
              </div>
            ))}
          </div>
        </TracingBeam>
        
        </>

        
      
      );
};

export default Experience;

const careerExperience = [
  {
    role: "Full-Stack Developer",
    company: "BIDI Bildung Digital GmbH",
    location: "Dresden, Germany",
    period: "May 2023 – Nov 2024",
    highlights: [
      "Built full-stack ed-tech features for better student engagement",
      "Refactored APIs and improved performance and scalability",
      "Integrated HubSpot & Contentful for dynamic content management",
      "Achieved ~80% test coverage across Angular and Nest.js components\nusing Jest and Jasmine, ensuring robust and maintainable code.",
      "Performed regular code reviews for clean, scalable codebase",
    ],
  },
  {
    role: "Full-Stack Developer (Part-time)",
    company: "Bosch Rexroth AG",
    location: "Ulm, Germany",
    period: "Oct 2022 – Apr 2023",
    highlights: [
      "Delivered internal tools used by 500+ partners",
      "Implemented secure session-based auth with SSO",
      "Improved backend logic and query performance",
    ],
  },
  {
    role: "Intern – Full Stack Developer",
    company: "Bosch Rexroth AG",
    location: "Ulm, Germany",
    period: "Apr 2022 – Sep 2022",
    highlights: [
      "Created admin dashboard for e-commerce CMS",
      "Achieved 90+ Lighthouse scores on core web vitals",
      "Automated CI/CD pipelines and GitLab deployments",
    ],
  },
];
