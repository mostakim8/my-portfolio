"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  ExternalLink,
  Github,
  X,
  ChevronLeft,
  ChevronRight,
  LucideProjector,
} from "lucide-react";

interface Project {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  keyChallenges: string;
  problemSolution: string;
  technicalDiscussion: string;
  whatILearned: string;
  links: { live: string; github: string };
}

export const PROJECT_DATA: Project[] = [
  {
    image: "/Projects Img/Asset_Verse.png",
    title: "AssetVerse – Smart Corporate Asset Management",
    description:
      "I built this B2B SaaS platform to bridge the gap between HR Managers and Employees. It simplifies how companies track equipment, manage requests, and monitor stock levels in real-time.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase",
      "Stripe",
      "TanStack Query",
    ],
    keyChallenges:
      "A complex data synchronization bug in the real-time tracking system required persistent debugging and state refactoring to achieve 100% data accuracy across user roles.",
    problemSolution:
      "Companies struggle with asset tracking via spreadsheets, leading to lost inventory. AssetVerse automates approval workflows and real-time inventory tracking.",
    technicalDiscussion:
      "Built with MERN architecture using TanStack Query for server-state management, dynamic PDF report generation, and secure Stripe billing integration.",
    whatILearned:
      "Mastered deep asynchronous state debugging, role-based security patterns, and scalable database architecture for corporate SaaS products.",
    links: {
      live: "https://inspiring-medovik-fc9331.netlify.app",
      github:
        "https://github.com/mostakim8/client-side-assetverse-ms011a011.git",
    },
  },
  {
    image: "/Projects Img/AI Model.png",
    title: "AI Model Inventory & Marketplace",
    description:
      "A full-stack platform built for discovering and managing AI models with real-time tracking, multi-role dashboards, and seamless payment integration.",
    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Firebase Auth",
      "Firestore",
      "Tailwind CSS",
      "DaisyUI",
      "Stripe API",
      "TanStack Query",
      "Axios",
    ],
    keyChallenges:
      "Engineered a synchronization layer between Firestore's real-time listeners and local React state to ensure zero-latency inventory updates.",
    problemSolution:
      "Developers lack a centralized ecosystem to test, track, and license custom AI models easily.",
    technicalDiscussion:
      "Utilized Firestore real-time dynamic sync combined with MongoDB aggregation pipelines for performant querying and filtering.",
    whatILearned:
      "Learned how to harmonize NoSQL databases with real-time state listeners while keeping client-side bundle sizes lean.",
    links: {
      live: "https://dulcet-fox-ad01e1.netlify.app/app",
      github:
        "https://github.com/mostakim8/clinet-side-ai-model-inventory-manager-ms010a010.git",
    },
  },
  {
    image: "/Projects Img/CSTicketSystem.png",
    title: "CS Ticket System",
    description:
      "A modern customer support dashboard designed to manage the ticket lifecycle (Open, In-Progress, Resolved) efficiently.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "React-Toastify",
      "JavaScript (ES6+)",
    ],
    keyChallenges:
      "Filtering tickets across various columns through real-time state synchronization and resolving environment hook conflicts.",
    problemSolution:
      "Support teams face work duplication when multiple agents tackle the same client ticket simultaneously.",
    technicalDiscussion:
      "Implemented client-side reactive filtering and persistent storage models with optimized re-rendering logic.",
    whatILearned:
      "Strengthened advanced React hook lifecycles, state isolation, and UI layout optimization.",
    links: {
      live: "https://friendly-crepe-f0261b.netlify.app",
      github:
        "https://github.com/mostakim8/Joruri_Seba_Emergency_Service_MS05A05_PH.git",
    },
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? PROJECT_DATA.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === PROJECT_DATA.length - 1 ? 0 : prev + 1,
    );
  };

  const prevIndex =
    (currentIndex - 1 + PROJECT_DATA.length) % PROJECT_DATA.length;
  const nextIndex = (currentIndex + 1) % PROJECT_DATA.length;
  const currentProject = PROJECT_DATA[currentIndex];

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-slate-950 text-slate-100 transition-colors duration-500 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="max-w-xl mx-auto mt-3 text-xs sm:text-sm md:text-base text-slate-400 font-medium">
            Click on the main project card to inspect key technical insights,
            architectural challenges, and solutions.
          </p>
        </div>

        {/* Canvas Area */}
        <div className="relative w-full max-w-5xl mx-auto flex flex-col items-center">
          {/* Main Visual Carousel Workspace */}
          <div className="relative w-full min-h-[380px] sm:min-h-[460px] md:min-h-[520px] flex items-center justify-center my-4">
            {/* PREVIOUS CARD (Desktop Only) */}
            <div
              onClick={handlePrev}
              className="hidden lg:flex absolute left-0 top-4 z-10 w-[200px] h-[150px] rounded-2xl overflow-hidden border border-slate-800 opacity-60 hover:opacity-100 transition-all cursor-pointer shadow-2xl group hover:scale-105 bg-slate-900"
            >
              <Image
                src={PROJECT_DATA[prevIndex].image}
                alt="Previous Project"
                fill
                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-slate-950/70 flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-300 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700">
                  Prev Project
                </span>
              </div>
            </div>

            {/* CURRENT MAIN PROJECT CARD */}
            <div className="z-20 w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] h-[280px] sm:h-[360px] md:h-[420px] relative">
              <motion.div
                key={currentIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedProject(currentProject)}
                className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden border border-cyan-500/40 shadow-[0_0_40px_rgba(6,182,212,0.15)] relative bg-slate-900 cursor-pointer group"
              >
                <Image
                  src={currentProject.image}
                  alt={currentProject.title}
                  fill
                  priority
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center p-6 text-center">
                  <span className="text-xs font-bold text-slate-900 bg-cyan-400 px-4 py-2 rounded-full shadow-lg font-mono">
                    View Technical Details
                  </span>
                </div>

                {/* Title Badge */}
                <div className="absolute top-3 left-3 right-3 bg-slate-950/80 backdrop-blur-md px-3.5 py-2 rounded-xl border border-slate-800/80">
                  <h3 className="text-xs sm:text-sm font-bold text-white tracking-wide truncate">
                    {currentProject.title}
                  </h3>
                </div>
              </motion.div>
            </div>

            {/* NEXT CARD (Desktop Only) */}
            <div
              onClick={handleNext}
              className="hidden lg:flex absolute right-0 bottom-4 z-10 w-[200px] h-[150px] rounded-2xl overflow-hidden border border-slate-800 opacity-60 hover:opacity-100 transition-all cursor-pointer shadow-2xl group hover:scale-105 bg-slate-900"
            >
              <Image
                src={PROJECT_DATA[nextIndex].image}
                alt="Next Project"
                fill
                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute inset-0 bg-slate-950/70 flex items-center justify-center">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-300 bg-slate-900/90 px-3 py-1 rounded-full border border-slate-700">
                  Next Project
                </span>
              </div>
            </div>
          </div>

          {/* PROJECT METADATA & LINKS BAR */}
          <div className="w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-none flex flex-col lg:flex-row items-center justify-between gap-4 mt-2 px-1">
            {/* Live & Git Links */}
            <div className="flex items-center gap-3 bg-slate-900/90 backdrop-blur-md border border-slate-800 px-4 py-2 rounded-xl shadow-lg w-full lg:w-auto justify-center">
              <a
                href={currentProject.links.live}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:text-cyan-400 transition-colors uppercase tracking-wider"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
              <span className="text-slate-700 font-bold">|</span>
              <a
                href={currentProject.links.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 text-xs font-bold text-slate-200 hover:text-cyan-400 transition-colors uppercase tracking-wider"
              >
                <Github size={14} /> GitHub
              </a>
            </div>

            {/* Navigation Controls (Only for Small & Medium Displays: flex lg:hidden) */}
            <div className="flex lg:hidden items-center justify-between w-full gap-4 bg-slate-900/90 border border-slate-800 px-4 py-1.5 rounded-xl">
              <button
                onClick={handlePrev}
                className="p-1.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition-colors active:scale-95"
                aria-label="Previous Project"
              >
                <ChevronLeft size={20} />
              </button>
              <span className="font-mono text-xs text-cyan-400 font-bold">
                0{currentIndex + 1} / 0{PROJECT_DATA.length}
              </span>
              <button
                onClick={handleNext}
                className="p-1.5 rounded-lg text-slate-300 hover:bg-slate-800 hover:text-cyan-400 transition-colors active:scale-95"
                aria-label="Next Project"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          {/* TECH STACK BADGES */}
          <div className="mt-4 w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] lg:max-w-2xl flex flex-wrap gap-1.5 justify-center bg-slate-900/60 backdrop-blur-md p-3 rounded-2xl border border-slate-800/80">
            {currentProject.techStack.map((tech, i) => (
              <span
                key={i}
                className="text-[10px] font-mono font-medium text-cyan-300 px-2.5 py-1 bg-cyan-950/40 border border-cyan-800/40 rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* MODAL SYSTEM */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-slate-900 border border-slate-800 w-full max-w-2xl max-h-[85vh] rounded-2xl md:rounded-3xl p-5 md:p-8 overflow-y-auto custom-scrollbar text-slate-200 relative shadow-2xl"
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-slate-800/80 rounded-full hover:bg-slate-700 text-slate-300 transition-colors"
                >
                  <X size={18} />
                </button>

                <h3 className="text-lg md:text-2xl font-bold text-cyan-400 mb-4 pr-8">
                  {selectedProject.title}
                </h3>

                <div className="space-y-3.5 text-xs md:text-sm">
                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                    <h4 className="font-mono font-bold text-cyan-300 mb-1 uppercase text-[11px] tracking-wider">
                      Problem & Solution
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      {selectedProject.problemSolution}
                    </p>
                  </div>

                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                    <h4 className="font-mono font-bold text-cyan-300 mb-1 uppercase text-[11px] tracking-wider">
                      Technical Architecture
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      {selectedProject.technicalDiscussion}
                    </p>
                  </div>

                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                    <h4 className="font-mono font-bold text-cyan-300 mb-1 uppercase text-[11px] tracking-wider">
                      Key Challenges & Debugging
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      {selectedProject.keyChallenges}
                    </p>
                  </div>

                  <div className="bg-slate-950/60 p-4 rounded-xl border border-slate-800">
                    <h4 className="font-mono font-bold text-cyan-300 mb-1 uppercase text-[11px] tracking-wider">
                      Core Learnings
                    </h4>
                    <p className="text-slate-300 leading-relaxed">
                      {selectedProject.whatILearned}
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs transition-colors"
                  >
                    Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Footer CTA */}
        <div className="flex justify-center mt-12 md:mt-16">
          <a
            href="https://github.com/mostakim8"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2.5 px-6 py-3.5 bg-slate-900 border border-slate-800 hover:border-cyan-500/50 text-slate-200 hover:text-cyan-400 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all shadow-lg hover:scale-105"
          >
            <LucideProjector size={16} />
            Explore All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
