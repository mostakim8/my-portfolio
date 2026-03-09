"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image"; // Next.js ইমেজ অপ্টিমাইজেশন

// ইন্টারফেস ডিফাইন করলাম (ভালো প্র্যাকটিস)
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
      "A comprehensive real-time support ticketing system featuring live analytics and automated management.",
    techStack: ["React", "Tailwind", "Firebase"],
    links: { live: "https://friendly-crepe-f0261b.netlify.app", github: "#" },
  },
  {
    image: "/Projects Img/GamingHub.png",
    title: "Gaming Hub",
    description:
      "An immersive gaming platform integrating multiple APIs for real-time stats and community ratings.",
    techStack: ["React", "Tailwind", "JS"],
    links: {
      live: "https://transcendent-haupia-e0ed5a.netlify.app",
      github: "#",
    },
  },
  {
    image: "/Projects Img/AIModelMarketplace.png",
    title: "AI Marketplace",
    description:
      "A sophisticated platform to discover, purchase, and deploy custom AI models with secure transactions.",
    techStack: ["React", "Tailwind CSS", "Firebase", "MongoDB"],
    links: { live: "https://dulcet-fox-ad01e1.netlify.app/app", github: "#" },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-base-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black tracking-tighter"
          >
            My <span className="text-primary italic">Projects.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECT_DATA.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative h-[500px] bg-base-200 rounded-[2.5rem] overflow-hidden border border-base-content/5 transition-all duration-500 hover:border-primary/30"
            >
              {/* Image Section */}
              <div className="h-[250px] w-full relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Static Content */}
              <div className="p-8 h-[250px] flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-3 tracking-tight">
                    {project.title}
                  </h3>
                  <p className="text-[12px] opacity-60 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-[9px] font-bold uppercase px-3 py-1 bg-base-300 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-primary/95 opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-8 flex flex-col justify-center text-white">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-[13px] leading-relaxed mb-6 opacity-90">
                  {project.description}
                </p>
                <a
                  href={project.links.live}
                  target="_blank"
                  rel="noreferrer"
                  className="py-3 bg-white text-primary text-center rounded-xl font-black uppercase text-[11px] hover:bg-white/90 transition-all"
                >
                  Live Demo
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
