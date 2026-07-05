import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="relative mt-8 py-5 px-4 text-center overflow-hidden w-full bg-white dark:bg-[#030712] border-t border-black/5 dark:border-white/10 z-20">
            {/* Soft blending top gradient */}
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent opacity-50" />

            <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                
                {/* Social Links */}
                <div className="flex items-center justify-center gap-6 mb-3">
                    <a
                        href="https://linkedin.com/in/prashant-sagar-shakya01"
                        target="_blank"
                        className="text-gray-400 hover:text-blue-600 dark:text-gray-500 dark:hover:text-cyber-cyan transition-colors text-2xl"
                    >
                        <BsLinkedin />
                    </a>
                    <a
                        href="https://github.com/prashant-sagar-shakya"
                        target="_blank"
                        className="text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white transition-colors text-[1.7rem]"
                    >
                        <FaGithubSquare />
                    </a>
                </div>

                <div className="text-xs text-gray-400 dark:text-gray-500 space-y-1.5 font-medium">
                    <p>
                        &copy; {new Date().getFullYear()} Prashant Sagar Shakya. All systems nominal.
                    </p>
                    <p className="opacity-80">
                        Built with <span className="font-bold text-gray-700 dark:text-gray-300">Next.js 15</span> & <span className="font-bold text-gray-700 dark:text-gray-300">Tailwind v4</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}
