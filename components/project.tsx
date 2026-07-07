"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { LuGithub, LuExternalLink } from "react-icons/lu";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: string;
  category: string;
  index: number;
  githubUrl?: string;
  projectUrl?: string | null;
  containerRef?: React.RefObject<HTMLDivElement | null>;
  isMobileView?: boolean;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  category,
  index,
  githubUrl,
  projectUrl,
  containerRef,
  isMobileView = false,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Track this specific card's position relative to the horizontal scrolling container
  const { scrollXProgress } = useScroll({
    target: ref,
    ...(containerRef ? { container: containerRef } : {}),
    axis: "x",
    offset: ["end start", "start end"],
  });

  // Track vertical scroll position for the mobile sticky effect (Old behavior)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.1 1"], // Takes longer to complete, making the fade smoother
  });

  // 3D center-pop effect (Desktop/Tablet)
  const scaleProgressX = useTransform(scrollXProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacityProgressX = useTransform(scrollXProgress, [0, 0.5, 1], [0.4, 1, 0.4]);

  // Smoother reveal effect (Mobile)
  const scaleProgressY = useTransform(scrollYProgress, [0, 1], [0.75, 1]);
  const opacityProgressY = useTransform(scrollYProgress, [0, 1], [0, 1]); // Fades from 0 to 1 beautifully

  return (
    <motion.div
      ref={ref}
      style={{
        scale: isMobileView ? scaleProgressY : scaleProgressX,
        opacity: isMobileView ? opacityProgressY : opacityProgressX,
        ...(isMobileView ? { "--card-top": `calc(10vh + ${index * 20}px)` } as any : {}),
      }}
      className={`w-full relative z-10 ${
        isMobileView 
          ? "mb-6 sticky top-[var(--card-top)] px-0" 
          : "min-w-[90vw] sm:min-w-[700px] md:min-w-[800px] lg:min-w-[900px] flex-shrink-0 snap-center px-4"
      }`}
    >
      <div className="group relative w-full sm:h-[30rem] md:h-[24rem] rounded-[2rem] bg-[rgba(255,255,255,0.95)] dark:bg-[rgba(3,7,18,0.9)] backdrop-blur-xl border border-black/5 dark:border-[rgba(255,255,255,0.08)] hover:border-black/20 dark:hover:border-[rgba(255,255,255,0.15)] transition-all duration-500 shadow-[0_4px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_0_40px_rgba(0,212,255,0.06),0_20px_60px_rgba(0,0,0,0.3)] overflow-hidden">
        
        {/* Subtle Background Glow behind the content */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 via-transparent to-neon-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        {/* Uniform layout: Content Left, Image Right */}
        <div className="flex flex-col md:flex-row-reverse p-5 sm:p-8 gap-6 md:gap-10 items-center h-full relative z-10">
          
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-full flex flex-col justify-center relative shrink-0">
            {/* Solid background container to prevent bleed-through */}
            <div className="relative rounded-xl bg-[#f8fafc] dark:bg-[#030712] border border-black/10 dark:border-white/10 shadow-2xl overflow-hidden group-hover:shadow-[0_0_50px_rgba(0,212,255,0.2)] transition-shadow duration-700">
              
              {/* Sleek Browser Header */}
              <div className="h-7 bg-[#f1f5f9] dark:bg-[#0a0e27] border-b border-black/5 dark:border-white/5 flex items-center px-3 gap-1.5 shrink-0">
                <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] shadow-sm" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] shadow-sm" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f] shadow-sm" />
              </div>
              
              {/* Image Container */}
              <div className="relative w-full aspect-[16/7.5] overflow-hidden bg-white dark:bg-[#030712]">
                <Image
                  src={imageUrl}
                  alt={title}
                  fill
                  className="object-cover object-top sm:object-contain p-0 sm:p-1.5 transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
                />
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col md:justify-center text-left relative z-10 py-1 h-full">
            
            {/* Header: Category & Links */}
            <div className="flex items-center justify-between w-full mb-4 gap-3">
              <span className="bg-gradient-to-r from-cyber-cyan/10 to-neon-violet/10 border border-cyber-cyan/20 text-cyber-cyan dark:text-cyber-cyan px-3 py-1 rounded-full text-[0.65rem] sm:text-xs font-bold uppercase tracking-widest shadow-sm">
                {category}
              </span>
              
              <div className="flex gap-2">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <LuGithub size={16} />
                  </a>
                )}
                {projectUrl && (
                  <a
                    href={projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-gray-50 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-cyber-cyan hover:text-white dark:hover:bg-cyber-cyan hover:border-cyber-cyan transition-all duration-300 hover:scale-110 shadow-sm"
                  >
                    <LuExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>

            {/* Title */}
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyber-cyan group-hover:to-neon-violet transition-all duration-500">
              {title}
            </h3>

            {/* Description */}
            <p className="leading-relaxed text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-5 font-medium line-clamp-4 text-left">
              {description}
            </p>

            {/* Tags */}
            <ul className="flex flex-wrap gap-2 justify-start">
              {tags.map((tag, tagIndex) => (
                <li
                  className="px-3 py-1.5 bg-gray-100 dark:bg-[#111338] text-[0.7rem] sm:text-xs font-semibold text-gray-800 dark:text-gray-200 rounded-lg border border-black/5 dark:border-white/5 hover:border-cyber-cyan/50 transition-colors shadow-sm"
                  key={tagIndex}
                >
                  {tag}
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </motion.div>
  );
}
