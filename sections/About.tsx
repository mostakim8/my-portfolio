"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(
    null,
  );

  const totalProjects = 10;
  const learningYears = "3.2";

  const tabData: any = {
    skills: {
      title: "Technical Expertise",
      content:
        "I specialize in the React ecosystem, focusing on performance, accessibility, and clean architecture.",
      items: [
        "React.js",
        "Next.js",
        "JavaScript",
        "Tailwind CSS",
        "Node.js",
        "Firebase",
      ],
    },
    experience: {
      title: "Journey & Growth",
      content:
        "Building scalable web solutions with a focus on modern UI/UX design patterns.",
      items: [
        `${learningYears}+ Years`,
        `${totalProjects}+ Projects`,
        "MERN Stack",
        "Problem Solver",
      ],
    },
    achievement: {
      title: "Achievements",
      content: "Recognitions for my technical skills and dedication.",
      items: [
        { headline: "IT Essentials", img: "/Achievement /CISCO.png" },
        {
          headline: "Web Design",
          img: "/Achievement /Responsive Web Design.png",
        },
        { headline: "Web Development", img: "Achievement /Web.png" },
      ],
    },
    education: {
      title: "Education",
      content:
        "My academic background provides a solid foundation in software engineering.",
      items: ["B.Sc in CSE (Ongoing)", "Web Development"],
    },
  };

  return (
    <section
      id="about"
      className="py-16 md:py-20 px-6 md:px-12 lg:px-24 bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Side */}
        <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-brand-darkest dark:text-white italic">
            About <span className="text-brand-medium not-italic">Me</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            I’m a developer who loves turning complex problems into{" "}
            <span className="text-brand-medium font-bold">
              simple, beautiful interfaces
            </span>
            .
          </p>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            <div className="p-5 md:p-6 border-2 border-brand-light/20 rounded-3xl bg-brand-medium/5">
              <h4 className="text-2xl md:text-3xl font-black text-brand-medium">
                {totalProjects}+
              </h4>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-2">
                Projects
              </p>
            </div>
            <div className="p-5 md:p-6 border-2 border-brand-light/20 rounded-3xl bg-brand-medium/5">
              <h4 className="text-2xl md:text-3xl font-black text-brand-medium">
                {learningYears}+
              </h4>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-2">
                Years
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Tabs */}
        <div className="lg:col-span-7 w-full bg-white dark:bg-slate-900 rounded-[2rem] border border-brand-light/20 shadow-2xl overflow-hidden">
          {/* Tabs Navigation */}
          <div className="flex overflow-x-auto gap-2 p-2 bg-slate-50 dark:bg-slate-950 scrollbar-hide">
            {Object.keys(tabData).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedAchievement(null);
                }}
                className={`px-4 md:px-6 py-3 rounded-xl text-[10px] md:text-xs font-black uppercase whitespace-nowrap transition-all ${activeTab === tab ? "bg-brand-medium text-white shadow-lg" : "text-slate-500 hover:bg-brand-light/10"}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="p-6 md:p-8 min-h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-brand-darkest dark:text-brand-light capitalize">
                  {tabData[activeTab].title}
                </h3>
                <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mb-6 italic leading-relaxed">
                  "{tabData[activeTab].content}"
                </p>

                {activeTab === "achievement" ? (
                  tabData.achievement.items.map((item: any, index: number) => (
                    <div key={index} className="mb-3">
                      <button
                        onClick={() =>
                          setSelectedAchievement(
                            selectedAchievement === index ? null : index,
                          )
                        }
                        className="w-full flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-brand-light/20 hover:border-brand-medium transition-all"
                      >
                        <span className="font-bold text-sm">
                          {item.headline}
                        </span>
                        <ChevronRight
                          size={18}
                          className={`transition-transform ${selectedAchievement === index ? "rotate-90" : ""}`}
                        />
                      </button>

                      {selectedAchievement === index && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-3 p-2 bg-slate-50 dark:bg-slate-800 rounded-xl">
                            <img
                              src={item.img}
                              alt={item.headline}
                              className="rounded-lg w-full h-auto object-contain"
                            />
                          </div>
                        </motion.div>
                      )}
                    </div>
                  ))
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {tabData[activeTab].items.map((item: string, i: number) => (
                      <div
                        key={i}
                        className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-brand-light/20 font-bold text-xs md:text-sm text-slate-700 dark:text-slate-200 flex items-center gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-brand-medium" />
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
