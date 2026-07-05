import React from "react";
import { LuGraduationCap, LuBrainCircuit, LuCode, LuRocket, LuTerminal, LuShieldAlert, LuUsers, LuGlobe, LuDatabase, LuNetwork } from "react-icons/lu";
import { FaSchool } from "react-icons/fa";
import { BiSolidSchool } from "react-icons/bi";

// Assuming you've moved the generated images to public/
// If not, Next.js will show alt text until they are copied.
export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "QuadB Technologies — Blockchain Development Intern",
        location: "Remote",
        description: [
            "Engineered and deployed gas-optimized smart contracts on testnets, reducing transaction fees by 30%.",
            "Led a 4-person team to conduct extensive security audits, enhancing protocol compliance by 40%."
        ],
        icon: React.createElement(LuTerminal),
        date: "Feb 2025 – Jun 2025",
    },
    {
        title: "SURE Trust — Cyber Security Intern",
        location: "Remote",
        description: [
            "Completed rigorous hands-on training in Linux administration, networking protocols, and advanced cryptography.",
            "Executed 10+ simulated penetration tests against secure lab environments.",
            "Achieved a 9/10 CGPA, demonstrating mastery of core cybersecurity offensive and defensive concepts.",
            "Delivered project excellence in real-time network monitoring and threat detection."
        ],
        icon: React.createElement(LuShieldAlert),
        date: "May 2024 – Sep 2024",
    },
    {
        title: "B.Tech Computer Science & Engineering",
        location: "Punjab Technical University, Punjab, India",
        description: [
            "Maintained a strong academic record with an 8.12/10 CGPA.",
            "Mastered core fundamentals: Data Structures, Algorithms, DBMS, OOP, and Operating Systems.",
            "Actively participated in competitive coding events and inter-college campus hackathons.",
            "Applied theoretical knowledge to build scalable full-stack applications and intelligent AI models."
        ],
        icon: React.createElement(LuGraduationCap),
        date: "2021 - 2025",
    },
    {
        title: "President — Crosslinks Club",
        location: "University Campus",
        description: [
            "Directed a technical club of 10+ core members to foster a culture of innovation on campus.",
            "Successfully managed and executed 4+ major inter-college technical events and hackathons.",
            "Increased overall club participation and active event attendance by 50%.",
            "Mentored junior students in core programming concepts and system design."
        ],
        icon: React.createElement(LuUsers),
        date: "Dec 2022 – Aug 2024",
    },
] as const;

export const projectsData = [
    {
        title: "Data Chronicles",
        category: "AI Knowledge Base",
        description:
            "A centralized AI Engineering learning repository with structured notes, code implementations, projects, and real-world applications covering Data Analytics, Agentic AI, ML, and MLOps.",
        tags: ["Python", "LangChain", "Scikit-Learn", "FastAPI", "Docker"],
        imageUrl: "/brainwave.png",
    },
    {
        title: "Imaginify",
        category: "AI Image SaaS",
        description:
            "An AI-powered image enhancement tool for restoring textures and background removal. Improved visual clarity of 200+ images by 70%. Achieved a 95+ Lighthouse performance score.",
        tags: ["Next.js", "AI Models", "TailwindCSS", "Performance", "Cloudinary"],
        imageUrl: "/Imaginify.png",
    },
    {
        title: "TutorialHub",
        category: "Full Stack + AI",
        description:
            "An AI-Powered Platform for Automated Educational Course Creation and Delivery. Generated automated course content, quizzes, and YouTube-integrated video lessons using Gemini AI.",
        tags: ["React", "Node.js", "Clerk", "Gemini AI", "Razorpay"],
        imageUrl: "/Code-Alpha.png",
    },
    {
        title: "Krypt: Crypto-Exchange",
        category: "Web3 & Blockchain",
        description:
            "A past Web3.0 experiment for secure Ethereum transactions. Processed 100+ test transactions integrating smart contracts for on-chain record-keeping.",
        tags: ["Solidity", "Smart Contracts", "Web3.js", "Ethereum"],
        imageUrl: "/Netflix.png",
    },
] as const;

export const skillCategories = [
    {
        title: "AI & Machine Learning",
        icon: LuBrainCircuit,
        color: "from-pink-500 to-rose-500",
        skills: ["Machine Learning", "Agentic AI", "Data Science", "Python", "Scikit-Learn"]
    },
    {
        title: "Web Development",
        icon: LuGlobe,
        color: "from-blue-500 to-cyan-500",
        skills: ["React.js", "Next.js", "Node.js", "Express.js", "HTML5", "CSS3"]
    },
    {
        title: "Languages",
        icon: LuCode,
        color: "from-purple-500 to-violet-500",
        skills: ["C", "C++", "Python", "JavaScript", "TypeScript"]
    },
    {
        title: "Cloud & DevOps",
        icon: LuRocket,
        color: "from-emerald-500 to-teal-500",
        skills: ["AWS", "Docker", "Linux", "Git", "Cyber Security Basics"]
    },
    {
        title: "Databases & Tools",
        icon: LuDatabase,
        color: "from-indigo-500 to-blue-500",
        skills: ["MongoDB", "MySQL", "VS Code", "Postman", "System Design"]
    },
    {
        title: "Blockchain",
        icon: LuTerminal,
        color: "from-gray-500 to-slate-500",
        skills: ["Solidity", "Smart Contracts", "Web3.js", "Ethereum"]
    }
];

export const competitiveProgrammingLinks = [
    { name: "LinkedIn", url: "https://linkedin.com/in/prashant-sagar-shakya01" },
    { name: "GitHub", url: "https://github.com/prashant-sagar-shakya" },
];

export const engineeringApproachData = [
    {
        step: 1,
        title: "Architecture & Data",
        description: "Designing scalable system architectures and robust data pipelines to ensure the foundation is absolutely flawless.",
        icon: React.createElement(LuDatabase),
        color: "from-blue-500 to-cyan-500"
    },
    {
        step: 2,
        title: "Model Intelligence",
        description: "Training and fine-tuning AI models, focusing on precision, speed, and real-world applicability.",
        icon: React.createElement(LuBrainCircuit),
        color: "from-purple-500 to-violet-500"
    },
    {
        step: 3,
        title: "Agentic Integration",
        description: "Giving AI autonomy. Building intelligent agent systems that can reason, plan, and execute complex workflows.",
        icon: React.createElement(LuNetwork),
        color: "from-pink-500 to-rose-500"
    },
    {
        step: 4,
        title: "Full-Stack Deployment",
        description: "Wrapping the intelligence in a beautiful, high-performance web application and deploying it to the edge.",
        icon: React.createElement(LuRocket),
        color: "from-emerald-500 to-teal-500"
    }
] as const;
