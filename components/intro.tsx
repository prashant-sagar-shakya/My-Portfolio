"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

const roles = [
  "Building Intelligent AI Systems",
  "Developing Scalable Web Apps",
  "Training Machine Learning Models",
  "Solving DSA Problems in C++",
  "Crafting Clean User Interfaces",
];

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] relative z-10 w-full pt-12 sm:pt-20"
    >
      {/* Profile Image with Animated Gradient Ring */}
      <div className="flex items-center justify-center mb-6">
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 150,
            damping: 15,
            duration: 0.8,
          }}
        >
          {/* Animated glow behind image */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyber-cyan/30 via-neon-violet/30 to-synapse-pink/30 blur-2xl scale-150 animate-pulse-glow" />

          {/* Gradient Ring */}
          <div className="gradient-ring relative z-10 p-1.5 rounded-full bg-gradient-to-tr from-cyber-cyan via-neon-violet to-synapse-pink shadow-lg shadow-cyber-cyan/20">
            <div className="bg-neural-950 rounded-full p-1 h-[140px] w-[140px] sm:h-[180px] sm:w-[180px] relative z-20">
              <Image
                src="/me.png"
                alt="Prashant Portrait"
                width={192}
                height={192}
                quality="95"
                priority={true}
                className="rounded-full object-cover shadow-2xl h-full w-full pointer-events-none"
              />
            </div>
          </div>

          {/* Floating waving hand emoji */}
          <motion.span
            className="absolute -bottom-1 -right-1 text-3xl sm:text-4xl select-none z-20"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: [0, 14, -8, 14, -8, 0],
            }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.2,
              rotate: {
                delay: 0.8,
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 4,
              },
            }}
          >
            👋
          </motion.span>
        </motion.div>
      </div>

      {/* Name & Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.1 }}
      >
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-3">
          <span className="opacity-90 text-gray-900 dark:text-white">Hi, I'm </span>
          <span className="gradient-text-hero">Prashant</span>
        </h1>

        <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 font-medium mb-2">
          AI/ML Engineer{" "}
          <span className="text-gray-300 dark:text-gray-600 mx-1">•</span>{" "}
          Full-Stack Developer{" "}
          <span className="text-gray-300 dark:text-gray-600 mx-1">•</span>{" "}
          Competitive Programmer
        </p>
      </motion.div>

      {/* Typing Animation Terminal */}
      <motion.div
        className="mb-8 flex items-center justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm sm:text-base border border-black/5 dark:border-white/10">
          <span className="text-cyber-cyan font-mono font-bold text-xs">❯</span>
          <AnimatePresence mode="wait">
            <motion.span
              key={roleIndex}
              className="font-mono gradient-text-subtle font-semibold text-xs sm:text-sm"
              initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -8, filter: "blur(4px)" }}
              transition={{ duration: 0.35 }}
            >
              {roles[roleIndex]}
            </motion.span>
          </AnimatePresence>
          <span className="inline-block w-1.5 h-4 bg-gray-400 dark:bg-gray-300 ml-0.5 animate-typing-cursor"></span>
        </div>
      </motion.div>

      {/* Action Buttons */}
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 text-sm sm:text-base font-medium"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Link
          href="#contact"
          className="group btn-gradient text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none hover:scale-105 transition-transform"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-80 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group glass-card glass-card-hover px-7 py-3 flex items-center gap-2 rounded-full outline-none border border-black/5 dark:border-white/10 text-gray-900 dark:text-gray-100 font-semibold"
          href="/CV.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>

        <div className="flex gap-4 mt-2 sm:mt-0">
          <a
            className="glass-card glass-card-hover p-3 sm:p-4 text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-cyber-cyan flex items-center gap-2 rounded-full outline-none text-[1.2rem] sm:text-[1.35rem] border border-black/5 dark:border-white/10"
            href="https://linkedin.com/in/prashant-sagar-shakya01"
            target="_blank"
          >
            <BsLinkedin />
          </a>

          <a
            className="glass-card glass-card-hover p-3 sm:p-4 text-gray-700 hover:text-gray-950 dark:text-gray-300 dark:hover:text-white flex items-center gap-2 rounded-full outline-none text-[1.2rem] sm:text-[1.35rem] border border-black/5 dark:border-white/10"
            href="https://github.com/prashant-sagar-shakya"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </div>
      </motion.div>

      {/* Key Metrics / Stat Bar */}
      <motion.div
        className="mt-14 max-w-2xl mx-auto grid grid-cols-3 divide-x divide-gray-200 dark:divide-white/10 glass-card rounded-2xl py-5 border border-black/5 dark:border-white/10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        {[
          { label: "AI Models/Agents", value: "3+" },
          { label: "Web Apps Built", value: "10+" },
          { label: "Smart Contracts", value: "5+" },
        ].map(({ label, value }) => (
          <div key={label} className="flex flex-col items-center gap-0.5 px-2">
            <span className="text-lg sm:text-xl font-bold gradient-text-subtle">{value}</span>
            <span className="text-[0.65rem] sm:text-[0.75rem] uppercase tracking-wider text-gray-500 font-semibold">{label}</span>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
