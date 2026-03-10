"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SKILLS_DATA: any = {
  Frontend: [
    { name: "React", level: "Expert", startDate: "2024-07-01", icon: "react" },
    {
      name: "Tailwind",
      level: "Expert",
      startDate: "2022-05-02",
      icon: "tailwindcss",
    },
    {
      name: "JavaScript",
      level: "Expert",
      startDate: "2022-07-11",
      icon: "javascript",
    },
  ],
  Backend: [
    {
      name: "Next.js",
      level: "Medium",
      startDate: "2025-07-01",
      icon: "nextdotjs",
    },
    {
      name: "Node.js",
      level: "Medium",
      startDate: "2025-10-14",
      icon: "nodedotjs",
    },
  ],
  Database: [
    {
      name: "MongoDB",
      level: "Medium",
      startDate: "2025-11-12",
      icon: "mongodb",
    },
    {
      name: "Firebase",
      level: "Basic",
      startDate: "2025-11-12",
      icon: "firebase",
    },
  ],
  Tools: [
    {
      name: "Github",
      level: "Medium",
      startDate: "2020-03-05",
      icon: "github",
    },
    { name: "Figma", level: "Medium", startDate: "2022-03-15", icon: "figma" },
  ],
};

const getExpDetails = (date: string) => {
  const start = new Date(date);
  const now = new Date();
  const diffMonths =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());

  if (diffMonths < 5) return { label: "Fresh", color: "#64748b" };
  if (diffMonths >= 5 && diffMonths < 12)
    return { label: `${diffMonths} Mos`, color: "#f59e0b" };
  if (diffMonths >= 12 && diffMonths < 36)
    return { label: `${(diffMonths / 12).toFixed(1)} Yrs`, color: "#10b981" };
  return { label: "3+ Yrs", color: "#e11d48" };
};

const SkillNode = ({ skill, index }: { skill: any; index: number }) => {
  const exp = getExpDetails(skill.startDate);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative flex items-center justify-center group shrink-0"
      // মোবাইলে সাইজ ছোট এবং ডেস্কটপে বড়
      style={{ width: "130px", height: "130px" }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20 + index, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-2 rounded-[40%_60%_70%_30%]"
        style={{
          borderColor: `${exp.color}66`,
          backgroundColor: `${exp.color}05`,
        }}
      />
      <div className="relative z-10 flex flex-col items-center text-center p-2">
        <img
          src={`https://cdn.simpleicons.org/${skill.icon}`}
          className="w-8 h-8 mb-2 opacity-80"
          alt={skill.name}
        />
        <h3 className="text-[10px] md:text-sm font-black uppercase tracking-tight text-brand-darkest dark:text-white">
          {skill.name}
        </h3>
        <span
          className="text-[8px] font-bold mt-0.5 uppercase tracking-widest"
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
      className="py-20 bg-white dark:bg-slate-950 px-6 transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase text-center mb-12 text-brand-darkest dark:text-white"> <span className="text-brand-medium italic font-serif">Skills</span>
        </h2>

        {/* Tab Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {Object.keys(SKILLS_DATA).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all ${
                activeTab === tab
                  ? "bg-brand-medium text-white shadow-lg shadow-brand-medium/20"
                  : "bg-slate-100 dark:bg-slate-900 text-slate-500"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill Nodes Grid */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-16">
          <AnimatePresence mode="wait">
            {SKILLS_DATA[activeTab].map((skill: any, index: number) => (
              <SkillNode key={skill.name} skill={skill} index={index} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Skills;
