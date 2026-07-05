"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-16 w-full max-w-[65rem] mx-auto px-4">
      <SectionHeading>Featured Projects</SectionHeading>
      <p className="text-center text-gray-500 dark:text-gray-400 mb-16 max-w-[40rem] mx-auto text-sm sm:text-base">
        A selection of my best work in{" "}
        <span className="font-semibold text-gray-800 dark:text-gray-200">AI Engineering</span>,{" "}
        <span className="font-semibold text-gray-800 dark:text-gray-200">Machine Learning</span>, and{" "}
        <span className="font-semibold text-gray-800 dark:text-gray-200">Full-Stack Development</span>.
      </p>

      <div className="relative">
        {projectsData.map((project, index) => (
          <Project key={index} {...project} index={index} />
        ))}
      </div>
    </section>
  );
}
