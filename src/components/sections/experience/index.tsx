"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import data from "@/data";
import useCurSection from "@/hooks/use-cur-section";

const TIMELINE_VARIANTS = {
  hidden: { opacity: 0, y: 24 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.08,
      ease: "easeOut",
    },
  }),
};

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  useCurSection(ref, 0.25);

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full container flex flex-col gap-10 py-24"
    >
      <div className="text-center space-y-2">
        <h2 className="text-sm tracking-[0.35em] uppercase text-muted-foreground">
          Career Path
        </h2>
        <p className="text-3xl md:text-4xl font-semibold text-gradient-secondary">
          Experience
        </p>
      </div>

      <div className="relative pl-6 md:pl-10">
        <span className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

        <div className="flex flex-col gap-8">
          {data.experience.timeline.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.period}`}
              variants={TIMELINE_VARIANTS}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              custom={index}
              className="relative rounded-2xl border border-border/60 bg-card/80 backdrop-blur px-6 py-6 md:px-8 md:py-8 shadow-sm"
            >
              <span className="absolute -left-6 md:-left-8 top-6 h-3 w-3 rounded-full border border-background bg-primary" />

              <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                <div className="space-y-1">
                  <h3 className="text-xl font-semibold">
                    {item.role}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {item.company} &middot; {item.location}
                  </p>
                </div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground/80">
                  {item.type} &bull; {item.period}
                </div>
              </div>

              <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground list-disc pl-5">
                {item.highlights.map((point, idx) => (
                  <li key={`${item.company}-${idx}`}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

