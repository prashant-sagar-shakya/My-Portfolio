import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import EngineeringApproach from "@/components/learning-journey";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 w-full">
      <Intro />
      <SectionDivider />
      <About />
      <EngineeringApproach />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}
