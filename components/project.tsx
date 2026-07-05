"use client";

import { useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { LuExternalLink, LuGithub } from "react-icons/lu";

type ProjectProps = (typeof projectsData)[number] & { index: number };

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  category,
  index,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
        ...( { "--card-top": `calc(10vh + ${index * 40}px)` } as any ), // CSS variable for sticky stacking
      }}
      className="sm:sticky sm:top-[var(--card-top)] relative z-10 w-full mb-12 sm:mb-24 last:mb-0"
    >
      <div className={`group flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-12 items-center bg-gray-50/80 dark:bg-neural-950/80 backdrop-blur-xl border border-black/5 dark:border-white/10 p-5 sm:p-10 rounded-3xl sm:rounded-[2rem] shadow-2xl`}>
        
        {/* MacOS Browser Mockup for Image */}
        <div className="w-full md:w-1/2 relative">
          <div className="rounded-xl border border-black/10 dark:border-white/10 overflow-hidden shadow-xl bg-white dark:bg-neural-900 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-shadow duration-500">
            {/* Browser Header */}
            <div className="h-6 sm:h-8 bg-gray-100 dark:bg-neural-950 border-b border-black/5 dark:border-white/5 flex items-center px-3 sm:px-4 gap-1.5 sm:gap-2">
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-red-400" />
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-amber-400" />
              <div className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-emerald-400" />
            </div>
            
            {/* Image */}
            <div className="relative h-52 sm:h-72 w-full overflow-hidden bg-gray-100 dark:bg-neural-900">
              <div className="absolute inset-0 bg-gray-900/10 dark:bg-black/30 z-10 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
              <Image
                src={imageUrl}
                alt={title}
                quality={95}
                fill
                className="object-cover object-top transition-transform duration-700 ease-in-out group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className={`w-full md:w-1/2 flex flex-col ${isLeft ? 'text-left' : 'text-left md:text-right'} relative z-10`}>
          <div className={`flex items-center justify-between ${isLeft ? 'md:justify-start' : 'md:justify-end'} w-full mb-4 gap-3`}>
            <span className="tag-pill bg-white dark:bg-white/10 shadow-sm border border-black/5 dark:border-white/5 rounded-full px-3 py-1 text-[0.65rem] uppercase tracking-wider font-bold text-gray-800 dark:text-gray-200">
              {category}
            </span>
            <div className="flex gap-2">
              <button className="p-2 sm:p-1.5 rounded-full bg-white dark:bg-white/10 shadow-sm border border-black/5 dark:border-white/5 text-gray-700 dark:text-gray-300 hover:bg-cyber-cyan hover:text-white dark:hover:bg-cyber-cyan transition-colors">
                <LuGithub size={18} className="sm:w-4 sm:h-4" />
              </button>
              <button className="p-2 sm:p-1.5 rounded-full bg-white dark:bg-white/10 shadow-sm border border-black/5 dark:border-white/5 text-gray-700 dark:text-gray-300 hover:bg-neon-violet hover:text-white dark:hover:bg-neon-violet transition-colors">
                <LuExternalLink size={18} className="sm:w-4 sm:h-4" />
              </button>
            </div>
          </div>

          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-cyber-cyan transition-colors">
            {title}
          </h3>

          <p className="leading-relaxed text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 sm:mb-8">
            {description}
          </p>

          {/* Tags */}
          <ul className={`flex flex-wrap gap-2 ${isLeft ? 'justify-start' : 'justify-start md:justify-end'}`}>
            {tags.map((tag, tagIndex) => (
              <li
                className="px-3 py-1.5 bg-white/50 dark:bg-white/5 text-[0.75rem] font-semibold text-gray-800 dark:text-gray-300 rounded-md border border-black/5 dark:border-white/5 group-hover:border-cyber-cyan/30 transition-colors shadow-sm"
                key={tagIndex}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
