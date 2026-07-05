"use client";

import React, { useRef, useState, useEffect } from "react";
import SectionHeading from "./section-heading";
import { engineeringApproachData } from "@/lib/data";
import { motion, useInView } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const ApproachCard = ({ item, index, startTyping }: { item: any; index: number; startTyping: boolean }) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (startTyping) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < item.description.length) {
          setDisplayedText(item.description.slice(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 15); // Fast typing speed
      return () => clearInterval(interval);
    }
  }, [startTyping, item.description]);

  return (
    <motion.div
      className="glass-card glass-card-hover p-8 relative overflow-hidden group cursor-default"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.1 * index,
      }}
    >
      {/* Huge Background Number */}
      <div className="absolute -bottom-6 right-4 text-[5rem] font-black text-gray-900/5 dark:text-white/5 pointer-events-none group-hover:scale-110 group-hover:-translate-y-4 transition-transform duration-700">
        0{item.step}
      </div>

      {/* Subtle Top Gradient Line */}
      <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${item.color} opacity-50 group-hover:opacity-100 transition-opacity`} />

      <div className="relative z-10">
        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center text-white text-2xl font-extrabold shadow-lg mb-6 group-hover:scale-110 transition-transform duration-500`}>
          {item.icon}
        </div>
        
        <h3 className="font-bold text-gray-900 dark:text-white text-xl mb-3">
          {item.title}
        </h3>
        
        <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed min-h-[80px]">
          {displayedText}
        </p>
      </div>
    </motion.div>
  );
};

export default function EngineeringApproach() {
  const { ref: sectionRef } = useSectionInView("Approach" as any, 0.2);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <section
      id="approach"
      ref={sectionRef}
      className="mb-28 max-w-[60rem] scroll-mt-28 sm:mb-40 w-full px-4"
    >
      <SectionHeading>My Engineering Approach</SectionHeading>
      <p className="text-center text-gray-500 dark:text-gray-500 mb-12 max-w-[42rem] mx-auto text-sm">
        Building state-of-the-art AI systems requires more than just calling APIs. Here is my rigorous, end-to-end process for transforming complex problems into production-grade solutions.
      </p>

      {/* Bento Box Grid Layout */}
      <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {engineeringApproachData.map((item, index) => (
          <ApproachCard key={item.step} item={item} index={index} startTyping={isInView} />
        ))}
      </div>
    </section>
  );
}
