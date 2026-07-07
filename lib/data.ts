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
        title: "CodeSageAI",
        category: "AI SaaS",
        description:
            "An AI-powered code review and pull request analysis platform. Simulates a senior engineer's review process with an autonomous 8-agent parallel architecture to detect bugs, security vulnerabilities, and performance issues with inline fix suggestions.",
        tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "LangGraph", "FastAPI", "PostgreSQL"],
        imageUrl: "/CodeSageAI.png",
        githubUrl: "https://github.com/prashant-sagar-shakya/CodeSageAI",
        projectUrl: "https://code-sage-ai-lake.vercel.app/",
    },
    {
        title: "TutorialHub",
        category: "AI SaaS",
        description:
            "An innovative AI-powered educational course creator generating detailed chapter contents, automated outlines, quizzes, payment checkouts (Razorpay), and relevant YouTube video integrations using Google Gemini.",
        tags: ["Next.js", "TypeScript", "Drizzle ORM", "NeonDB", "Gemini AI", "Razorpay", "Clerk"],
        imageUrl: "/tutorialhub.png",
        githubUrl: "https://github.com/prashant-sagar-shakya/Tutorial-Hub",
        projectUrl: "https://tutorial-hub.vercel.app/",
    },
    {
        title: "Brainwave",
        category: "AI Chat & Debugger",
        description:
            "A powerful AI-powered chat and debugging application with Clerk authentication and AWS Lambda serverless backend integration, delivering real-time responses and a customizable UI.",
        tags: ["React.js", "Vite", "Tailwind CSS", "Clerk", "AWS Lambda", "Gemini API"],
        imageUrl: "/brainwave.png",
        githubUrl: "https://github.com/prashant-sagar-shakya/Brainwave-AI-Debugger",
        projectUrl: "https://brainwave-ai-debugger.vercel.app/",
    },
    {
        title: "Writique",
        category: "Full Stack Blog",
        description:
            "A modern full-stack MERN blog platform with user authentication via Clerk, role-based access control, rich markdown support, and optimized image uploads using Cloudinary.",
        tags: ["React.js", "TypeScript", "Node.js", "Express", "MongoDB", "Clerk", "Cloudinary"],
        imageUrl: "/writique.png",
        githubUrl: "https://github.com/prashant-sagar-shakya/writique",
        projectUrl: "https://writique-eight.vercel.app/",
    },
    {
        title: "Imaginify",
        category: "AI Image SaaS",
        description:
            "An AI-powered SaaS for image restoration, background removal, object recoloring, and generative filling. Features subscription plans using Razorpay and secure MongoDB data storage.",
        tags: ["Next.js", "TypeScript", "Cloudinary", "MongoDB", "Razorpay", "Clerk"],
        imageUrl: "/Imaginify.png",
        githubUrl: "https://github.com/prashant-sagar-shakya/Imaginify",
        projectUrl: "https://imaginify-chi-two.vercel.app/",
    },
    {
        title: "Code-Alpha",
        category: "Online Code Editor",
        description:
            "An online code editor supporting Python, C, C++, and Java environments. Implements real-time editing, syntax highlighting via CodeMirror, and Gemini-powered AI code completion and bug fixing.",
        tags: ["HTML5", "Bootstrap", "JavaScript", "CodeMirror", "Node.js", "Gemini AI"],
        imageUrl: "/codealpha.png",
        githubUrl: "https://github.com/prashant-sagar-shakya/Code-Editor",
        projectUrl: "https://code-editor-bk6c.onrender.com/",
    },
    {
        title: "CF Buddy",
        category: "Competitive Programming",
        description:
            "A modern Codeforces progress analyzer and comparison tool for competitive programmers. Provides 3D Three.js visualizations, rating history graphs, and Gemini AI-curated Daily Practice Problems.",
        tags: ["React", "TypeScript", "Three.js", "Tailwind CSS", "Clerk", "MongoDB", "Gemini AI"],
        imageUrl: "/cf-buddy.png",
        githubUrl: "https://github.com/prashant-sagar-shakya/CF-Buddy",
        projectUrl: "https://cf-buddy.netlify.app/",
    },
    {
        title: "DeauthX",
        category: "Cyber Security",
        description:
            "A command-line Wi-Fi penetration testing utility written in Python. Automates scanning networks and executing targeted deauthentication attacks against clients using the aircrack-ng suite on Linux.",
        tags: ["Python", "Linux", "Aircrack-ng", "Penetration Testing", "Security"],
        imageUrl: "/deauthX.png",
        githubUrl: "https://github.com/prashant-sagar-shakya/DeauthX",
        projectUrl: null,
    },
] as const;

export const skillCategories = [
    {
        title: "AI Engineering",
        icon: LuBrainCircuit,
        color: "from-pink-500 to-rose-500",
        skills: [
            "OpenAI API",
            "LangChain",
            "LangGraph",
            "Prompt Engineering",
            "RAG",
            "AI Agents",
            "MCP",
            "Vector Databases",
            "Embeddings"
        ]
    },
    {
        title: "Backend Development",
        icon: LuTerminal,
        color: "from-blue-500 to-cyan-500",
        skills: [
            "FastAPI",
            "React.js",
            "Next.js",
            "Node.js",
            "Express.js",
            "REST APIs",
            "Authentication (JWT/OAuth)",
            "WebSockets"
        ]
    },
    {
        title: "Frontend Development",
        icon: LuGlobe,
        color: "from-emerald-500 to-teal-500",
        skills: [
            "React.js",
            "Next.js",
            "HTML5",
            "CSS3",
            "Tailwind CSS"
        ]
    },
    {
        title: "Programming Languages",
        icon: LuCode,
        color: "from-purple-500 to-violet-500",
        skills: [
            "Python",
            "JavaScript",
            "TypeScript",
            "Golang",
            "SQL",
            "C++"
        ]
    },
    {
        title: "Databases & Tools",
        icon: LuDatabase,
        color: "from-indigo-500 to-blue-500",
        skills: [
            "PostgreSQL",
            "MongoDB",
            "MySQL",
            "Git & GitHub",
            "GitHub Actions",
            "Docker",
            "Postman",
            "Linux",
            "VS Code"
        ]
    },
    {
        title: "Core Concepts",
        icon: LuNetwork,
        color: "from-orange-500 to-amber-500",
        skills: [
            "Data Structures & Algorithms",
            "OOP",
            "DBMS",
            "Operating Systems",
            "Computer Networks",
            "Software Engineering",
            "System Design"
        ]
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
