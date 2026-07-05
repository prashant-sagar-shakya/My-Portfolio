"use client";

import React, { useState, MouseEvent } from "react";
import SectionHeading from "./section-heading";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact", 0.3);
  const [isPending, setIsPending] = useState(false);

  // 3D Tilt Logic for the Form Card
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-full max-w-[65rem] px-4 relative z-10 perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Let's Connect</SectionHeading>

      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mt-16 items-center lg:items-stretch">
        
        {/* Left Side: The Executive Pitch */}
        <div className="flex-1 flex flex-col justify-center w-full lg:w-[40%] relative z-10 text-center lg:text-left">
          
          <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-6 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            Available for new opportunities
          </div>

          <h3 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-6">
            Let's build <br className="hidden lg:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-neon-violet">
              something extraordinary.
            </span>
          </h3>
          
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-[35rem] mx-auto lg:mx-0">
            Whether you're a recruiter looking for a top-tier engineer, a founder needing a technical co-founder, or just want to discuss AI architecture<br></br>I'm always ready to chat.
          </p>
        </div>

        {/* Right Side: Hologram Form Card */}
        <div className="w-full lg:w-[60%] perspective-[1500px]">
          <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            className="w-full relative rounded-[2.5rem] overflow-hidden bg-gray-50/80 dark:bg-neural-950/80 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-2xl group"
          >
            {/* Ambient background glow inside the card */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/10 via-transparent to-neon-violet/10 opacity-50 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <form
              className="flex flex-col gap-4 p-6 sm:p-8 relative z-10"
              style={{ transform: "translateZ(40px)" }}
              action={async (formData) => {
                setIsPending(true);
                try {
                  const { error } = await sendEmail(formData);
                  if (error) {
                    toast.error(error);
                    return;
                  }
                  toast.success("Message transmitted successfully!");
                } catch (e: any) {
                  toast.error("Transmission failed. Please try again.");
                } finally {
                  setIsPending(false);
                }
              }}
            >
              <div className="space-y-1 relative z-20">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 ml-1">Your Email</label>
                <div className="relative group/input">
                  <input
                    className="w-full h-14 px-6 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-md transition-all outline-none focus:bg-white dark:focus:bg-black/60 focus:ring-2 focus:ring-cyber-cyan/50 focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-gray-600 text-sm sm:text-base text-gray-900 dark:text-gray-100 shadow-sm"
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="john@company.com"
                  />
                </div>
              </div>
              
              <div className="space-y-1 relative z-20">
                <label className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 ml-1">Your Message</label>
                <div className="relative group/textarea">
                  <textarea
                    className="w-full h-32 px-6 py-4 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/80 dark:bg-black/40 backdrop-blur-md transition-all outline-none focus:bg-white dark:focus:bg-black/60 focus:ring-2 focus:ring-neon-violet/50 focus:border-transparent placeholder:text-gray-400 dark:placeholder:text-gray-600 text-sm sm:text-base text-gray-900 dark:text-gray-100 resize-none shadow-sm leading-relaxed"
                    name="message"
                    placeholder="Hello Prashant, I was impressed by your portfolio and wanted to reach out regarding..."
                    required
                    maxLength={5000}
                  />
                </div>
              </div>

              <div className="mt-4 relative z-20 flex justify-end">
                <SubmitBtn pending={isPending} />
              </div>
            </form>
          </motion.div>
        </div>

      </div>
    </motion.section>
  );
}
