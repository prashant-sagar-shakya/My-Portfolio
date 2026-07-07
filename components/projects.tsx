"use client";

import React, { useRef, useEffect, useState } from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

export default function Projects() {
  const { ref: sectionRef } = useSectionInView("Projects", 0.5);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate the array 3 times to create a seamless infinite loop
  const duplicatedProjects = [...projectsData, ...projectsData, ...projectsData];

  // Initialize scroll position to the start of the middle set
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      setTimeout(() => {
        const singleSetWidth = container.scrollWidth / 3;
        container.scrollLeft = singleSetWidth;
      }, 100);
    }
  }, []);

  // Smart Auto-play behavior (Matches Experience Tab)
  useEffect(() => {
    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
      }, 8000);
      return () => clearTimeout(timeout);
    }

    const interval = setInterval(() => {
      if (scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        const singleSetWidth = container.scrollWidth / 3;
        
        // If we have scrolled into the 3rd set, instantly jump back to the exact same visual spot in the 2nd set
        if (container.scrollLeft >= singleSetWidth * 2 - 200) {
          container.scrollBy({ left: -singleSetWidth, behavior: "auto" });
        }
        
        // Then smoothly scroll forward
        setTimeout(() => {
          container.scrollBy({ left: 850, behavior: "smooth" });
        }, 30);
      }
    }, 4000); // Auto-scroll every 4 seconds
    
    return () => clearInterval(interval);
  }, [isPaused]);

  const handleManualScroll = (direction: 'left' | 'right') => {
    setIsPaused(true); 
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const singleSetWidth = container.scrollWidth / 3;
      const scrollAmount = direction === 'left' ? -850 : 850;

      // Handle infinite boundaries for manual scrolling too
      if (direction === 'right' && container.scrollLeft >= singleSetWidth * 2 - 200) {
        container.scrollBy({ left: -singleSetWidth, behavior: "auto" });
      } else if (direction === 'left' && container.scrollLeft <= singleSetWidth + 200) {
        container.scrollBy({ left: singleSetWidth, behavior: "auto" });
      }

      setTimeout(() => {
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      }, 30);
    }
  };

  return (
    <section ref={sectionRef} id="projects" className="scroll-mt-28 mb-8 sm:mb-12 w-full max-w-[100vw] overflow-hidden">
      <SectionHeading>My Projects</SectionHeading>
      <p className="text-center mb-10 text-gray-600 dark:text-gray-400 max-w-[40rem] mx-auto px-4">
        A curated selection of my technical work, showcasing expertise in <br className="hidden sm:block" />
        <span className="font-semibold text-gray-800 dark:text-gray-200">Full-Stack Development</span>.
      </p>

      {/* MOBILE VIEW (Restored original vertical stacked list) */}
      <div className="flex flex-col gap-4 sm:hidden px-4">
        {projectsData.map((project, index) => (
          <Project 
            key={index} 
            {...project} 
            index={index} 
            isMobileView={true}
          />
        ))}
      </div>

      {/* DESKTOP & TABLET VIEW (3D Infinite Auto-Scrolling Gallery) */}
      <div 
        className="w-full relative pt-12 pb-4 group hidden sm:block"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onTouchStart={() => setIsPaused(true)}
        onTouchEnd={() => setIsPaused(false)}
      >
        {/* Left Navigation Button */}
        <button
          onClick={() => handleManualScroll('left')}
          className="absolute left-2 sm:left-[calc(50%-380px)] md:left-[calc(50%-450px)] lg:left-[calc(50%-520px)] top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 text-gray-800 dark:text-white shadow-2xl hover:scale-110 hover:bg-white dark:hover:bg-black transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 hidden sm:block"
          aria-label="Scroll Left"
        >
          <LuChevronLeft size={28} />
        </button>

        {/* Scrollable Gallery Container */}
        <div 
          ref={scrollContainerRef}
          className="w-full flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-6 sm:gap-10 items-center px-[50vw]"
          style={{ scrollBehavior: "smooth" }}
        >
          {duplicatedProjects.map((project, index) => (
            <Project 
              key={index} 
              {...project} 
              index={index} 
              containerRef={scrollContainerRef} 
            />
          ))}
        </div>

        {/* Right Navigation Button */}
        <button
          onClick={() => handleManualScroll('right')}
          className="absolute right-2 sm:right-[calc(50%-380px)] md:right-[calc(50%-450px)] lg:right-[calc(50%-520px)] top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/80 dark:bg-black/60 backdrop-blur-md border border-black/10 dark:border-white/10 text-gray-800 dark:text-white shadow-2xl hover:scale-110 hover:bg-white dark:hover:bg-black transition-all opacity-0 group-hover:opacity-100 disabled:opacity-0 hidden sm:block"
          aria-label="Scroll Right"
        >
          <LuChevronRight size={28} />
        </button>
      </div>
    </section>
  );
}
