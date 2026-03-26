"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, ArrowUpRight, Projector, LucideProjector } from "lucide-react";

// Interface definition
interface Project {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  links: { live: string; github: string };
}

// Exporting PROJECT_DATA
export const PROJECT_DATA: Project[] = [
  {
    image: "/Projects Img/CSTicketSystem.png",
    title: "CS Ticket System",
    description:
      "A comprehensive real-time support ticketing system featuring live analytics, automated management, and user authentication for seamless tracking.",
    techStack: ["React", "Tailwind", "Firebase"],
    links: {
      live: "https://friendly-crepe-f0261b.netlify.app",
      github: "https://github.com/mostakim-aiub/cs-ticket-system",
    },
  },
  {
    image: "/Projects Img/GamingHub.png",
    title: "Gaming Hub",
    description:
      "An immersive gaming platform integrating multiple APIs for real-time stats, global leaderboards, and community-driven game ratings.",
    techStack: ["React", "Tailwind", "JS"],
    links: {
      live: "https://transcendent-haupia-e0ed5a.netlify.app",
      github: "https://github.com/mostakim-aiub/gaming-hub",
    },
  },
  {
    image: "/Projects Img/AIModelMarketplace.png",
    title: "AI Marketplace",
    description:
      "A sophisticated platform to discover, purchase, and deploy custom AI models with secure transaction gateways and user profiles.",
    techStack: ["React", "Tailwind", "Firebase", "MongoDB"],
    links: {
      live: "https://dulcet-fox-ad01e1.netlify.app/app",
      github: "https://github.com/mostakim-aiub/ai-marketplace",
    },
  },
];

const Projects = () => {
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
            <span className="text-brand-medium not-italic">
              Projects
            </span>
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {PROJECT_DATA.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-brand-light/20 shadow-lg bg-slate-100 dark:bg-slate-900"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-w-768px) 100vw, (max-w-1200px) 50vw, 33vw"
              />

              <div className="absolute inset-0 bg-brand-darkest/90 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-center items-center text-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                >
                  <h3 className="text-xl md:text-2xl font-black text-white mb-4 uppercase">
                    {project.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-200 leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-[9px] font-bold uppercase px-3 py-1 bg-white/10 text-brand-light border border-white/5 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 justify-center">
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-brand-medium text-white rounded-full text-xs font-black uppercase hover:bg-white hover:text-brand-medium transition-all"
                    >
                      <ExternalLink size={14} /> Live
                    </a>
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white border border-white/20 rounded-full text-xs font-black uppercase hover:bg-white hover:text-brand-darkest transition-all"
                    >
                      <Github size={14} /> Code
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
