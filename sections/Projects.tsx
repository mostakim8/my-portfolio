"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  image: string;
  title: string;
  description: string;
  techStack: string[];
  links: { live: string; github: string };
}

export const PROJECT_DATA: Project[] = [
  {
    image: "/Projects Img/CSTicketSystem.png",
    title: "CS Ticket System",
    description:
      "A comprehensive real-time support ticketing system featuring live analytics, automated management, and user authentication for seamless tracking.",
    techStack: ["React", "Tailwind", "Firebase"],
    links: { live: "https://friendly-crepe-f0261b.netlify.app" }
  },
  {
    image: "/Projects Img/GamingHub.png",
    title: "Gaming Hub",
    description:
      "An immersive gaming platform integrating multiple APIs for real-time stats, global leaderboards, and community-driven game ratings.",
    techStack: ["React", "Tailwind", "JS"],
    links: {
      live: "https://transcendent-haupia-e0ed5a.netlify.app"
    },
  },
  {
    image: "/Projects Img/AIModelMarketplace.png",
    title: "AI Marketplace",
    description:
      "A sophisticated platform to discover, purchase, and deploy custom AI models with secure transaction gateways and user profiles.",
    techStack: ["React", "Tailwind", "Firebase", "MongoDB"],
    links: { live: "https://dulcet-fox-ad01e1.netlify.app/app" },
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-center tracking-tighter text-brand-darkest dark:text-white italic"
          >
            My <span className="text-brand-medium not-italic">Projects</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECT_DATA.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative h-[400px] rounded-[2.5rem] overflow-hidden border border-brand-light/20 shadow-lg"
            >
              {/* Background Image */}
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-brand-darkest/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-center items-center text-center">
                <h3 className="text-xl font-black text-white mb-4">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-200 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tech Stack in Overlay */}
                <div className="flex flex-wrap justify-center gap-2 mb-8">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-bold uppercase px-3 py-1 bg-white/10 text-white rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4">
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
                    className="flex items-center gap-2 px-6 py-3 bg-white/10 text-white rounded-full text-xs font-black uppercase hover:bg-white hover:text-brand-darkest transition-all"
                  >
                    <Github size={14} /> Code
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
