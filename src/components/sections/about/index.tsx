"use client";
import useCurSection from "@/hooks/use-cur-section";
import Image from "next/image";
import { useRef } from "react";
import { motion } from "framer-motion";
import profileImage from "@/public/imgs/ashiqur-rahman.png";

export default function AboutSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  useCurSection(ref);
  return (
    <div
      ref={ref}
      id="about"
      className="w-full py-12 my-32 bg-muted text-sm md:text-base"
    >
      <h1 className="text-center text-3xl md:text-5xl mb-12">
        <span className="text-gradient-primary">{"{ "}</span>
        About Me
        <span className="text-gradient-primary">{" }"}</span>
      </h1>

      <div className="flex gap-9 items-center flex-col  w-10/12 mx-auto p-5 rounded-lg container">
        <div className="relative flex-shrink-0">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1, ease: "easeIn" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-primary opacity-50 size-[120px] rounded-full blur-3xl"
          />
          <motion.div
            initial={{ x: "-200%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="rounded-full size-[200px] bg-gradient-primary p-0.5"
          >
            <Image
              className="size-full rounded-full grayscale hover:grayscale-0 transition-all object-cover"
              width={600}
              height={600}
              alt="Mohammad Ashiqur Rahman"
              src={profileImage}
            />
          </motion.div>
        </div>

        <div className="space-y-4 text-center lg:text-left">
          <h2 className="text-xl md:text-3xl font-bold">
            <span className="text-secondary">{"< "}</span>

            <span className="text-gradient-secondary">Who am I</span>
            <span className="text-secondary">{" />"}</span>
          </h2>
          <motion.p
            initial={{ y: "-20%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, ease: "easeIn", duration: 0.5 }}
            className="text-muted-foreground text-justify"
          >
            Hey, I&apos;m Mohammad Ashiqur Rahman—an end-to-end full stack
            engineer blending Next.js, React, Angular, Node/NestJS, Express.js,
            and cloud DevOps to ship resilient web platforms. I help teams
            modernize legacy codebases, launch new products faster, and automate
            delivery pipelines from commit to production.
            <br />
            <br />
            <span className="font-semibold">📌 What I Do Best:</span>
            <br />
            ✅ Fixing Bugs & Broken Code – eliminating production blockers,
            tightening APIs, and polishing broken UX flows.
            <br />
            ✅ Optimizing Performance – Speeding up apps, improving SEO, and
            delivering a smooth experience.
            <br />
            ✅ Scaling Web Apps – preparing platforms for traffic spikes with
            monitoring, SLOs, and battle-tested CI/CD.
            <br />
            ✅ Building from Scratch – delivering fast, accessible, maintainable
            Next.js applications from idea to launch.
            <br />
            ✅ AI-Powered Features – integrating LLM assistants, workflow
            automation, and human-in-the-loop experiences that feel native.
            <br />
            <br />
            <span className="font-semibold">📌 Why Work With Me?</span>
            <br />
            🔹 I focus on measurable outcomes: faster load times, healthier
            pipelines, and cleaner dashboards.
            <br />
            🔹 I work fast and efficiently. No endless back-and-forth, no
            unnecessary delays—just solutions that work.
            <br />
            🔹 I don’t just fix problems—I design guardrails. Whether optimizing
            an existing app or building something new, I make sure it stays
            scalable, maintainable, and easy to evolve.
            <br />
            <br />
            <span className="font-semibold">📌 Let&apos;s Talk</span>
            <br />
            If your platform needs new features, performance tuning, or a full
            rebuild, let&apos;s connect.
            <br />
            <a href="#contact" className="text-primary hover:underline">
              ✅ Get in Touch
            </a>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
