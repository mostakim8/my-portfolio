"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Skill {
  name: string;
  level: string;
  startDate: string;
  icon: string;
  darkIconColor?: string;
}

interface SkillsData {
  [category: string]: Skill[];
}

const SKILLS_DATA: SkillsData = {
  Frontend: [
    {
      name: "React",
      level: "Advanced",
      startDate: "2024-07-01",
      icon: "react",
    },
    {
      name: "Next.js",
      level: "Medium",
      startDate: "2025-07-01",
      icon: "nextdotjs",
    },
    {
      name: "Tailwind",
      level: "Advanced",
      startDate: "2022-05-02",
      icon: "tailwindcss",
    },
    {
      name: "JavaScript",
      level: "Expert",
      startDate: "2022-07-11",
      icon: "javascript",
    },
    {
      name: "TypeScript",
      level: "Intermediate",
      startDate: "2026-01-10",
      icon: "typescript",
    },
  ],
  Backend: [
    {
      name: "Node.js",
      level: "Intermediate",
      startDate: "2025-10-14",
      icon: "nodedotjs",
    },
    {
      name: "Express.js",
      level: "Intermediate",
      startDate: "2025-10-20",
      icon: "express",
    },
  ],
  Database: [
    {
      name: "MongoDB",
      level: "Intermediate",
      startDate: "2025-11-12",
      icon: "mongodb",
    },
    {
      name: "Firebase",
      level: "Intermediate",
      startDate: "2025-11-12",
      icon: "firebase",
    },
  ],
  Tools: [
    {
      name: "GitHub",
      level: "Advanced",
      startDate: "2020-03-05",
      icon: "github",
    },
    {
      name: "Vercel",
      level: "Advanced",
      startDate: "2025-11-12",
      icon: "vercel",
    },
    {
      name: "Netlify",
      level: "Advanced",
      startDate: "2023-06-15",
      icon: "netlify",
    },
  ],
};

const getExpDetails = (date: string) => {
  const start = new Date(date);
  const now = new Date();
  const diffMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  if (diffMonths <= 2)
    return {
      label: `${diffMonths > 0 ? diffMonths : 1} Mos`,
      color: "#64748b",
    };
  if (diffMonths < 12) return { label: `${diffMonths} Mos`, color: "#06b6d4" };
  if (diffMonths < 36)
    return { label: `${(diffMonths / 12).toFixed(1)} Yrs`, color: "#10b981" };
  return { label: "3+ Yrs", color: "#f59e0b" };
};

const SkillNode = ({ skill, index }: { skill: Skill; index: number }) => {
  const exp = getExpDetails(skill.startDate);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.6 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="relative flex items-center justify-center group shrink-0"
      style={{ width: "130px", height: "130px" }}
    >
      {/* Rotating Shape Border */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 12 + index * 2,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 border-2 rounded-[40%_60%_70%_30%] opacity-40 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          borderColor: exp.color,
          backgroundColor: `${exp.color}12`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center p-2">
        <img
          src={`https://cdn.simpleicons.org/${skill.icon}`}
          className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform duration-300 dark:invert-0"
          alt={skill.name}
          loading="lazy"
        />
        <h3 className="text-[11px] md:text-xs font-black uppercase tracking-tight text-slate-800 dark:text-white leading-none">
          {skill.name}
        </h3>
        <span
          className="text-[9px] font-extrabold mt-1.5 uppercase tracking-widest"
          style={{ color: exp.color }}
        >
          {exp.label}
        </span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>("Frontend");

  return (
    <section
      id="skills"
      className="py-20 bg-slate-50 dark:bg-slate-950 px-6 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-slate-900 dark:text-white">
            <span className="text-cyan-500 not-italic">Skills</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="max-w-2xl mx-auto mt-4 text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
          >
            I specialize in the{" "}
            <span className="text-cyan-500 font-bold">MERN stack</span> and
            modern frontend tools to build scalable, fast, and{" "}
            <span className="text-cyan-500 font-bold">user-centric</span> web
            applications.
          </motion.p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2.5 mb-14">
          {Object.keys(SKILLS_DATA).map((tab) => (
            <button
              type="button"
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-[11px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                activeTab === tab
                  ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/25 scale-105"
                  : "bg-white dark:bg-slate-900/80 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Dynamic Skill Nodes Grid */}
        <div className="min-h-[200px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-wrap justify-center gap-6 md:gap-10 max-w-4xl"
            >
              {SKILLS_DATA[activeTab].map((skill, index) => (
                <SkillNode key={skill.name} skill={skill} index={index} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
