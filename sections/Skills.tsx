"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SKILLS_DATA: any = {
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
      name: "Github",
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

  // less than 2 months
  if (diffMonths <= 2) return { label: `${diffMonths} Mos`, color: "#64748b" };
  // less than 12 months
  if (diffMonths < 12) return { label: `${diffMonths} Mos`, color: "#f59e0b" };
  // less than 36 months
  if (diffMonths < 36)
    return { label: `${(diffMonths / 12).toFixed(1)} Yrs`, color: "#10b981" };
  // more than 3 years
  return { label: "3+ Yrs", color: "#e11d48" };
};

const SkillNode = ({ skill, index }: { skill: any; index: number }) => {
  const exp = getExpDetails(skill.startDate);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="relative flex items-center justify-center group shrink-0"
      style={{ width: "130px", height: "130px" }}
    >
      {/* Rotating Border */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 10 + index, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-2 rounded-[40%_60%_70%_30%] opacity-40 group-hover:opacity-100 transition-opacity"
        style={{
          borderColor: exp.color,
          backgroundColor: `${exp.color}10`,
        }}
      />

      <div className="relative z-10 flex flex-col items-center text-center p-2">
        <img
          src={`https://cdn.simpleicons.org/${skill.icon}/auto`}
          className="w-8 h-8 mb-2 group-hover:scale-110 transition-transform duration-300"
          alt={skill.name}
        />
        <h3 className="text-[10px] md:text-xs font-black uppercase tracking-tight text-slate-800 dark:text-white">
          {skill.name}
        </h3>
        <span
          className="text-[8px] font-bold mt-1 uppercase tracking-widest"
          style={{ color: exp.color }}
        >
          {exp.label}
        </span>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-slate-950 px-6 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter  text-slate-900 dark:text-white">
          <span className="text-brand-medium not-italic">Skills</span>
          </h2>
          
          {/* Sub-headline added here */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-2xl mx-auto mt-4 text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
          >
            I specialize in the <span className="text-brand-medium font-bold">MERN stack</span> and modern frontend tools to build 
            scalable, fast, and <span className="text-brand-medium font-bold">user-centric</span> web applications.
          </motion.p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {Object.keys(SKILLS_DATA).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest transition-all duration-300 ${
                activeTab === tab
                  ? "bg-brand-medium text-white shadow-xl shadow-brand-medium/30 scale-105"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-500 hover:bg-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill Nodes Grid */}
        <div className=" flex flex-wrap justify-center gap-6 md:gap-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} // change tab key to trigger animation
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="flex flex-wrap justify-center gap-6 md:gap-12"
            >
              {SKILLS_DATA[activeTab].map((skill: any, index: number) => (
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
