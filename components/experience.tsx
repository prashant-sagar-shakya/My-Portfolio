"use client";

import React, { useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, AnimatePresence } from "framer-motion";

export default function Experience() {
  const { ref } = useSectionInView("Experience", 0.3);
  const [activeTab, setActiveTab] = useState(0);

  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  // Auto-play the tabs every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % experiencesData.length);
    }, 4000); // 4000ms = 4 seconds
    return () => clearInterval(interval);
  }, []);

  // Auto-scroll to active tab on mobile
  useEffect(() => {
    if (scrollContainerRef.current) {
      // The first child is the animated line, so tabs start at index + 1
      const activeElement = scrollContainerRef.current.children[activeTab + 1] as HTMLElement;
      if (activeElement) {
        const container = scrollContainerRef.current;
        const scrollLeft = activeElement.offsetLeft - container.clientWidth / 2 + activeElement.clientWidth / 2;
        container.scrollTo({ left: scrollLeft, behavior: 'smooth' });
      }
    }
  }, [activeTab]);

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-16 sm:mb-24 w-full max-w-[65rem] px-4">
      <SectionHeading>Experience & Education</SectionHeading>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-12 max-w-[42rem] mx-auto text-sm sm:text-base">
        My professional journey, engineered into an interactive dashboard.
      </p>
      
      <div className="relative flex flex-col md:flex-row gap-8 mt-12 p-4 sm:p-8">
        {/* Glassmorphism Background (Separated to fix Safari/mobile scroll blur glitches) */}
        <div className="absolute inset-0 bg-gray-50/50 dark:bg-neural-950/50 backdrop-blur-md border border-black/5 dark:border-white/5 rounded-2xl shadow-xl z-0 transform-gpu" />
        
        {/* Left Side: Tab List */}
        <div 
          ref={scrollContainerRef}
          className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 md:w-1/3 shrink-0 relative scroll-smooth z-10"
        >
          {/* Animated active indicator line (desktop) */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-white/10" />
          
          {experiencesData.map((item, index) => {
            const isActive = activeTab === index;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`relative flex flex-col items-start px-4 py-3 text-left transition-colors duration-300 rounded-lg md:rounded-none md:rounded-r-lg whitespace-nowrap md:whitespace-normal group ${
                  isActive
                    ? "bg-white dark:bg-neural-900 shadow-sm md:shadow-none"
                    : "hover:bg-gray-100 dark:hover:bg-white/5"
                }`}
              >
                {/* Active Line (Desktop) */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-cyber-cyan"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                
                <h3 className={`font-bold text-sm sm:text-base transition-colors ${isActive ? 'text-cyber-cyan' : 'text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200'}`}>
                  {item.title.split(' ')[0]} {/* Shorten for tab */}
                </h3>
                <span className={`text-[0.65rem] uppercase tracking-wider font-semibold mt-1 transition-colors ${isActive ? 'text-gray-900 dark:text-white' : 'text-gray-400 dark:text-gray-500'}`}>
                  {item.date}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Side: Tab Content */}
        <div className="flex-1 relative h-[400px] sm:h-[350px] overflow-y-auto overscroll-none pr-2 scrollbar-hide transform-gpu z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <div className="flex items-center gap-4 mb-2">
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-neural-900 border border-black/5 dark:border-white/10 flex items-center justify-center shadow-sm text-cyber-cyan">
                   {experiencesData[activeTab].icon}
                </div>
                <div>
                  <h3 className="font-bold text-xl sm:text-2xl text-gray-900 dark:text-white">
                    {experiencesData[activeTab].title}
                  </h3>
                  <p className="text-sm font-semibold uppercase tracking-wider text-neon-violet mt-1">
                    {experiencesData[activeTab].location}
                  </p>
                </div>
              </div>
              
              <div className="mt-6 h-px w-full bg-gradient-to-r from-gray-200 dark:from-white/10 to-transparent" />
              
              <ul className="mt-6 space-y-3">
                {(experiencesData[activeTab].description as unknown as string[]).map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm sm:text-base leading-relaxed text-gray-600 dark:text-gray-300">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyber-cyan shrink-0" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
