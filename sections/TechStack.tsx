"use client";

import React from "react";
import { motion } from "framer-motion";

const TECH_DATA = [
  {
    name: "React",
    level: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    level: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "MongoDB",
    level: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Tailwind",
    level: "Design",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Next.js",
    level: "Fullstack",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Firebase",
    level: "Cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
];

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="py-20 bg-base-100 relative overflow-hidden"
    >
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-black opacity-[0.03] pointer-events-none select-none">
        STACK
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 0.4, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl font-black uppercase tracking-[0.5em] mb-4"
          >
            Technologies
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {TECH_DATA.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -5 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative p-8 bg-base-200/50 backdrop-blur-xl border border-base-content/5 rounded-[2.5rem] flex flex-col items-center justify-center text-center hover:border-primary/30 transition-all duration-500"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity rounded-[2.5rem]" />

              <div className="relative z-10">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-12 h-12 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                />
                <h3 className="text-sm font-black tracking-tight mb-1">
                  {tech.name}
                </h3>
                <p className="text-[9px] font-bold uppercase tracking-widest opacity-30 group-hover:text-primary group-hover:opacity-100 transition-all">
                  {tech.level}
                </p>
              </div>

              {/* Decor */}
              <div className="absolute bottom-4 flex gap-1">
                <div className="w-1 h-1 rounded-full bg-base-content/10 group-hover:bg-primary transition-colors" />
                <div className="w-4 h-1 rounded-full bg-base-content/10 group-hover:bg-primary/40 transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
