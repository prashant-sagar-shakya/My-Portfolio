"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillCategories } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15,
      staggerChildren: 0.05,
      delayChildren: 0.1
    },
  },
};

const skillVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 250, 
      damping: 25,
    },
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Skills", 0.3);

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[65rem] scroll-mt-28 w-full px-4"
    >
      <SectionHeading>Technical Arsenal</SectionHeading>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-16 max-w-[42rem] mx-auto text-sm sm:text-base">
        A comprehensive overview of my technical skills across{" "}
        <span className="font-semibold text-gray-800 dark:text-gray-200">AI</span>,{" "}
        <span className="font-semibold text-gray-800 dark:text-gray-200">Data</span>, and{" "}
        <span className="font-semibold text-gray-800 dark:text-gray-200">Software Engineering</span>.
      </p>

      <motion.div
        className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {skillCategories.map((category) => (
          <motion.div
            key={category.title}
            variants={cardVariants}
            className="group relative overflow-hidden bg-gray-50/50 dark:bg-neural-950/50 backdrop-blur-xl border border-black/5 dark:border-white/5 rounded-3xl p-6 hover:shadow-[0_0_40px_rgba(0,212,255,0.1)] transition-all duration-500 flex flex-col sm:flex-row gap-6 items-start"
          >
            {/* Massive Background Watermark Icon */}
            <div className="absolute right-2 bottom-2 text-black/5 dark:text-white/5 text-[8rem] transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none">
              <category.icon />
            </div>

            {/* Glowing Icon (Left Side on Desktop) */}
            <div className={`shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
              <category.icon className="text-3xl" />
            </div>

            {/* Content (Right Side on Desktop) */}
            <div className="flex-1 relative z-10">
              <h3 className="font-bold text-xl text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>

              {/* Skills Pills */}
              <ul className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={skillVariants}
                    className="bg-white/60 dark:bg-black/20 border border-black/5 dark:border-white/10 rounded-lg px-3 py-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 group-hover:border-black/10 dark:group-hover:border-white/20 transition-colors shadow-sm"
                  >
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
