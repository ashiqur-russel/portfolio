"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";

const experienceData = [
  {
    title: "Full-Stack Developer (Full-time)",
    company: "BIDI Bildung Digital GmbH",
    location: "Dresden, Germany",
    duration: "May 2023 – Nov 2024",
    items: [
      "Built full-stack features to improve student engagement.",
      "Refactored APIs for better performance & scalability.",
      "Streamlined CI/CD, reducing deployment errors.",
      "Integrated HubSpot & Contentful for content workflows.",
      "Led code reviews to maintain code quality.",
    ],
  },
  {
    title: "Full-Stack Developer (Part-time)",
    company: "Bosch Rexroth AG",
    location: "Ulm, Germany",
    duration: "Oct 2022 – Apr 2023",
    items: [
      "Built features for 500+ sales partners.",
      "Integrated secure Single Sign-On.",
      "Boosted backend speed via query optimization.",
    ],
  },
  {
    title: "Full-Stack Developer (Intern)",
    company: "Bosch Rexroth AG",
    location: "Ulm, Germany",
    duration: "Apr 2022 – Sep 2022",
    items: [
      "Developed web shop for mobile hydraulics.",
      "Achieved 90+ Lighthouse score on performance.",
      "Implemented CI/CD pipelines for faster releases.",
    ],
  },
];

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="w-full px-6 sm:px-[12%] py-16 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center">
        <motion.h4
          className="mb-2 text-lg font-medium text-gray-500 dark:text-gray-400"
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Career Path
        </motion.h4>
        <motion.h2
          className="text-4xl sm:text-5xl font-bold font-Ovo"
          initial={{ y: -10, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Experience
        </motion.h2>
      </div>

      <div className="mt-16 space-y-12 relative before:absolute before:left-1 before:top-0 before:bottom-0 before:w-[2px] before:bg-gray-300 dark:before:bg-gray-600">
        {experienceData.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            className="relative pl-10"
          >
            <div className="absolute left-0 top-1 rounded-full w-5 h-5 border-4 border-white dark:border-gray-900 bg-blue-600 shadow-md" />

            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                {exp.title}
              </h3>
              <p className="text-sm text-gray-500">
                {exp.company} — {exp.location}
              </p>
              <p className="text-xs text-gray-400 mt-1">{exp.duration}</p>
              <ul className="mt-4 space-y-2 list-disc list-inside text-sm text-gray-700 dark:text-gray-300">
                {exp.items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Experience;
