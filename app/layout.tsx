import Header from "@/components/header";
import "./globals.css";
import { Inter, JetBrains_Mono } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains" });

export const metadata = {
    title: "Prashant Sagar Shakya | AI/ML Engineer & Full-Stack Developer",
    description:
        "Portfolio of Prashant Sagar Shakya, an AI/ML Engineer, Full-Stack Developer, and Competitive Programmer building intelligent, scalable systems.",
    keywords: [
        "AI/ML Engineer", "Machine Learning", "Full-Stack Developer", "React", "Next.js", 
        "Competitive Programming", "Prashant Sagar Shakya", "Portfolio"
    ],
    authors: [{ name: "Prashant Sagar Shakya" }],
    openGraph: {
        title: "Prashant Sagar Shakya — Full Stack Developer & AI Engineer",
        description: "Building scalable web apps, secure smart contracts, and intelligent AI systems.",
        type: "website",
    },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrains.variable} font-[family-name:var(--font-inter)] bg-[#fafbfc] text-gray-950 relative pt-28 sm:pt-36 dark:bg-neural-950 dark:text-gray-50 dark:text-opacity-90 overflow-x-hidden`}
      >
        {/* Optimized background layers (Separated to prevent CSS background collision) */}
        <div className="fixed inset-0 -z-20 bg-mesh-gradient pointer-events-none" />
        <div className="fixed inset-0 -z-10 neural-grid pointer-events-none" />

        {/* Lightweight Gradient Orbs (Static to ensure ZERO lag, 120 FPS performance) */}
        <div className="fixed top-[-10rem] right-[5rem] -z-10 h-[35rem] w-[35rem] rounded-full blur-[12rem] sm:w-[60rem] bg-[#dbeafe]/40 dark:bg-[#06182e]/20 pointer-events-none" />
        <div className="fixed top-[15rem] left-[-35rem] -z-10 h-[35rem] w-[50rem] rounded-full blur-[12rem] sm:w-[60rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#ede9fe]/30 dark:bg-[#0f0520]/20 pointer-events-none" />
        
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />
            <Toaster
              position="top-right"
              toastOptions={{
                style: {
                  background: 'rgba(15, 23, 42, 0.9)',
                  color: '#e2e8f0',
                  border: '1px solid rgba(6, 182, 212, 0.2)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '12px',
                },
              }}
            />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
