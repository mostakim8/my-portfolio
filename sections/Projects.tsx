"use client";

import React,{useState} from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight, Projector, LucideProjector } from "lucide-react";


// Interface definition
interface Project {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  keyChallenges: string;
  links: { live: string; github: string };
}

// Exporting PROJECT_DATA
export const PROJECT_DATA: Project[] = [
  {
    image: "/Projects Img/Untitled design.png", // আপনার প্রজেক্টের একটি স্ক্রিনশট লিঙ্ক এখানে দিন
    title: "AssetVerse–Smart Corporate Asset Management",
    description:
      "I built this B2B SaaS platform to bridge the gap between HR Managers and Employees. It simplifies how companies track their equipment, manage requests, and monitor stock levels in real-time, moving away from messy spreadsheets to a streamlined digital dashboard.",
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
      "The toughest part was a complex data synchronization bug in the real-time tracking system. It was frustrating, but I didn't give up—after 18 days of persistent debugging and refactoring my state management logic, I finally ensured 100% data accuracy across all user roles.",
    links: {
      live: "https://inspiring-medovik-fc9331.netlify.app",
      github:
        "https://github.com/mostakim8/client-side-assetverse-ms011a011.git",
    },
  },
  {
    image: "/Projects Img/AIModelMarketplace.png",
    title: "AI Model Inventory & Marketplace",
    description:
      "A sophisticated full-stack platform built with the MERN stack for discovering and managing AI models. It features a secure marketplace with real-time inventory tracking, multi-role dashboards, and seamless payment integration for a premium user experience.",
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
      "Engineered a robust synchronization layer between Firestore's real-time listeners and local React state to ensure zero-latency inventory updates.",
    links: {
      live: "https://dulcet-fox-ad01e1.netlify.app/app",
      github:
        "https://github.com/mostakim8/clinet-side-ai-model-inventory-manager-ms010a010.git",
      // server:
      //   "https://github.com/mostakim8/-server-side-aI-model-inventory-manager-ms010a010-.git",
    },
  },
  {
    image: "/Projects Img/CSTicketSystem.png",
    title: "CS Ticket System",
    description:
      "A pixel-perfect, modern customer support dashboard designed to manage the ticket lifecycle (Open, In-Progress, Resolved). It prevents work duplication and enhances team productivity.",
    techStack: [
      "React.js",
      "Tailwind CSS",
      "DaisyUI",
      "React-Toastify",
      "JavaScript (ES6+)",
    ],
    keyChallenges:
      "The primary challenges of this project involved filtering tickets across various columns through real-time state synchronization and successfully resolving 'Invalid Hook Call' errors resulting from environmental conflicts.",
    links: {
      live: "https://friendly-crepe-f0261b.netlify.app",
      github:
        "https://github.com/mostakim8/Joruri_Seba_Emergency_Service_MS05A05_PH.git",
    },
  },
  // {
  //   image: "/Projects Img/GamingHub.png",
  //   title: "Gaming Hub",
  //   description:
  //     "An immersive gaming platform integrating multiple APIs for real-time stats, global leaderboards, and community-driven game ratings.",
  //   techStack: ["React", "Tailwind", "JS"],
  //   links: {
  //     live: "https://transcendent-haupia-e0ed5a.netlify.app",
  //     github: "https://github.com/mostakim-aiub/gaming-hub",
  //   },
  // },
];

const Projects = () => {

  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter  text-slate-900 dark:text-white">
            {" "}
            <span className="text-brand-medium not-italic">Projects</span>
          </h2>

          {/* Your Chosen Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-xl mx-auto mt-4 text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
          >
            A collection of my{" "}
            <span className="text-brand-medium font-bold italic">favorite</span>{" "}
            projects. Each one was a new challenge that helped me become a{" "}
            <span className="text-brand-medium font-bold italic">
              better developer
            </span>{" "}
            and designer.
          </motion.p>
        </div>

        {/* Projects Grid */}
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 w-full">
          {PROJECT_DATA.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              // w-full যোগ করা হয়েছে যাতে কার্ড কন্টেইনারের পুরো উইডথ নেয়
              className="group relative w-full h-[480px] md:h-[500px] rounded-[2.5rem] overflow-hidden border border-brand-light/20 shadow-lg bg-slate-100 dark:bg-slate-900"
            >
              {/* Project Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-fill transition-transform duration-700 group-hover:scale-110"
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />

              {/* Overlay Content */}
              <div className="absolute inset-0 bg-brand-darkest/95 backdrop-blur-md opacity-0 group-hover:opacity-90 transition-all duration-500 p-6 md:p-8 flex flex-col justify-center items-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="w-full flex flex-col items-center"
                >
                  <h3 className="text-lg md:text-xl font-black text-white mb-3 uppercase tracking-tighter text-center">
                    {project.title}
                  </h3>

                  {/* Content Area */}
                  <div className="w-full flex flex-col gap-4">
                    {/* 1. Description with See More */}
                    <div className="relative">
                      <p
                        className={`text-[11px] md:text-xs text-slate-200 leading-relaxed text-justify ${expandedIndex !== index ? "line-clamp-3" : ""}`}
                      >
                        {project.description}
                      </p>
                      {project.description.length > 100 && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            setExpandedIndex(
                              expandedIndex === index ? null : index,
                            );
                          }}
                          className="text-brand-medium text-[10px] font-black mt-1 hover:text-white transition-colors uppercase tracking-wider"
                        >
                          {expandedIndex === index
                            ? "Show Less"
                            : "See More..."}
                        </button>
                      )}
                    </div>

                    {/* 2. Key Challenge with Independent Scroll */}
                    <div className="bg-white/5 p-3 rounded-2xl border border-white/10 text-justify">
                      <span className="font-black not-italic text-[10px] text-white block mb-1 underline decoration-brand-medium uppercase tracking-widest">
                        Key Challenge:
                      </span>
                      <div className="max-h-[80px] overflow-y-auto pr-2 custom-scrollbar">
                        <p className="text-[10px] md:text-[11px] text-brand-light italic leading-snug">
                          {project.keyChallenges}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap justify-center gap-1.5 mb-6 mt-4">
                    {project.techStack.slice(0, 5).map((tech, i) => (
                      <span
                        key={i}
                        className="text-[8px] font-bold uppercase px-2.5 py-1 bg-white/10 text-brand-light border border-white/5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links Section remains same */}
                  <div className="flex gap-3 justify-center w-full">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-brand-medium text-white rounded-full text-[10px] font-black uppercase hover:bg-white hover:text-brand-medium transition-all max-w-[120px]"
                    >
                      <ExternalLink size={12} /> Live
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-white/10 text-white border border-white/20 rounded-full text-[10px] font-black uppercase hover:bg-white hover:text-brand-darkest transition-all max-w-[120px]"
                    >
                      <Github size={12} /> Code
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Action Buttons  */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
        >
          <a
            href="https://github.com/mostakim8"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all hover:scale-105 active:scale-95 shadow-xl"
          >
            <LucideProjector size={18} />
            Show All Projects
          </a>

          <a
            href="#contact"
            className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-900 text-slate-900 dark:text-white border-2 border-slate-200 dark:border-slate-800 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all hover:border-brand-medium active:scale-95 shadow-sm"
          >
            Let's Start a Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
