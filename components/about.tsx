"use client";

import React, { MouseEvent } from "react";
import SectionHeading from "./section-heading";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { LuTerminal, LuBrainCircuit } from "react-icons/lu";

const typewriterContainer = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.008, delayChildren: 0.3 }
    }
};

const charVariants = {
    hidden: { visibility: "hidden" as any },
    visible: { visibility: "visible" as any }
};

const AnimatedText = ({ text, className = "" }: { text: string; className?: string }) => (
    <span className={className}>
        {text.split("").map((char, index) => (
            <motion.span key={index} variants={charVariants}>
                {char}
            </motion.span>
        ))}
    </span>
);

export default function About() {
    const { ref } = useSectionInView("About", 0.4);

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        
        const width = rect.width;
        const height = rect.height;
        
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[65rem] sm:mb-40 scroll-mt-28 perspective-1000 px-4 w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
            id="about"
        >
            <SectionHeading>About Me</SectionHeading>

            {/* 3D Interactive Container (Boxless) */}
            <div className="flex justify-center mt-12 w-full perspective-[1500px]">
                <motion.div
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                        rotateX,
                        rotateY,
                        transformStyle: "preserve-3d",
                    }}
                    className="relative w-full rounded-[2rem] p-4 sm:p-8 group cursor-crosshair"
                >
                    {/* Glowing Ambient Aura (Subtle, no sharp borders) */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/0 via-neon-violet/0 to-synapse-pink/0 group-hover:from-cyber-cyan/5 group-hover:via-neon-violet/5 group-hover:to-synapse-pink/5 transition-colors duration-1000 blur-3xl -z-10" />
                    
                    {/* Floating Tech Icons */}
                    <motion.div 
                        style={{ translateZ: 80 }}
                        className="absolute top-0 right-10 text-gray-200 dark:text-white/5 text-9xl pointer-events-none"
                    >
                        <LuBrainCircuit />
                    </motion.div>
                    <motion.div 
                        style={{ translateZ: 50 }}
                        className="absolute bottom-0 left-10 text-gray-200 dark:text-white/5 text-8xl pointer-events-none"
                    >
                        <LuTerminal />
                    </motion.div>

                    {/* Content (Pushed forward on Z axis) */}
                    <motion.div 
                        style={{ translateZ: 100 }} 
                        className="relative z-10 text-center sm:text-left space-y-8 text-gray-700 dark:text-gray-300 font-medium max-w-[50rem] mx-auto"
                        variants={typewriterContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <p className="text-2xl sm:text-4xl leading-snug text-gray-900 dark:text-white font-extrabold tracking-tight drop-shadow-xl">
                            <AnimatedText text="I engineer " />
                            <AnimatedText text="autonomous intelligence" className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-neon-violet" />
                            <AnimatedText text=" and ship it to the edge." />
                        </p>
                        
                        <p className="text-lg sm:text-xl leading-relaxed">
                            <AnimatedText text="A " />
                            <AnimatedText text="Computer Science Engineer" className="font-bold text-gray-900 dark:text-white" />
                            <AnimatedText text=" obsessed with closing the gap between raw data and human interaction. My core engineering focus lies in architecting scalable Agentic AI workflows and deploying highly optimized machine learning models to production." />
                        </p>

                        <p className="text-lg sm:text-xl leading-relaxed">
                            <AnimatedText text="But backend intelligence is useless if it lives in a vacuum. I pair my AI architecture with elite " />
                            <AnimatedText text="Full-Stack Web" className="font-bold text-emerald-600 dark:text-emerald-400" />
                            <AnimatedText text=" skills using React, Next.js, and Node to build seamless, breathtaking user interfaces." />
                        </p>
                    </motion.div>

                </motion.div>
            </div>
        </motion.section>
    );
}
