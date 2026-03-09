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

const calculateExp = (date: string) => {
  const start = new Date(date);
  const now = new Date();
  const diff =
    (now.getFullYear() - start.getFullYear()) * 12 +
    (now.getMonth() - start.getMonth());
  return diff < 1
    ? `Fresh`
    : diff < 12
      ? `${diff} Mos`
      : `${(diff / 12).toFixed(1)} Yrs`;
};

const SkillNode = ({ skill, index }: { skill: any; index: number }) => {
  const colorMap: any = {
    Expert: "#3b82f6",
    Medium: "#10b981",
    Basic: "#f59e0b",
  };
  const themeColor = colorMap[skill.level] || "#6366f1";

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="relative flex items-center justify-center group"
      style={{ width: "160px", height: "160px" }}
    >
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20 + index, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 border-2 rounded-[40%_60%_70%_30%]"
        style={{
          borderColor: `${themeColor}66`,
          backgroundColor: `${themeColor}05`,
        }}
      />
      <div className="relative z-10 flex flex-col items-center text-center p-4">
        <img
          src={`https://cdn.simpleicons.org/${skill.icon}/${themeColor.replace("#", "")}`}
          className="w-10 h-10 mb-2"
          alt={skill.name}
        />
        <h3 className="text-sm font-black uppercase tracking-tight">
          {skill.name}
        </h3>
        <span className="text-[8px] font-bold opacity-30 mt-1 uppercase tracking-widest">
          {calculateExp(skill.startDate)}
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
      className="py-20 bg-base-100 px-6 flex flex-col items-center overflow-hidden"
    >
      <div className="max-w-7xl w-full">
        <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase text-center mb-16">
          My <span className="text-primary italic font-serif">Skills</span>
        </h2>

        <div className="flex justify-center gap-2 mb-16">
          {Object.keys(SKILLS_DATA).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeTab === tab ? "bg-primary text-white" : "bg-base-200"}`}
            >
              {tab}
            </button>
          ))}
        </div>

        <motion.div
          key={activeTab}
          className="flex flex-wrap justify-center gap-16"
        >
          {SKILLS_DATA[activeTab].map((skill: any, index: number) => (
            <SkillNode key={skill.name} skill={skill} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
