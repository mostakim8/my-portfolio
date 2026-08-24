"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Award,
  Code,
  BookOpen,
  Heart,
  GraduationCap,
} from "lucide-react";

// Import project data
import { PROJECT_DATA } from "./Projects";

// Types
type DetailedItem = {
  name: string;
  icon: string;
  detail?: string;
};

type AchievementItem = {
  headline: string;
  img: string;
};

type TabContent = {
  title: string;
  icon: React.ReactNode;
  content: string;
  items: (string | DetailedItem | AchievementItem)[];
};

const About = () => {
  const [activeTab, setActiveTab] = useState<string>("journey");
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(
    null,
  );
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Real-time Dynamic Date & Project Calculation
  const { learningYears, intensiveMonths, totalProjects } = useMemo(() => {
    const journeyStartDate = new Date("2022-05-02");
    const intensiveStartDate = new Date("2024-06-01");
    const today = new Date();

    const diffInMs = today.getTime() - journeyStartDate.getTime();
    const years = (diffInMs / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);

    const monthDiff =
      (today.getFullYear() - intensiveStartDate.getFullYear()) * 12 +
      (today.getMonth() - intensiveStartDate.getMonth());

    const projectsCount = PROJECT_DATA ? PROJECT_DATA.length : 0;

    return {
      learningYears: years,
      intensiveMonths: monthDiff > 0 ? monthDiff : 7,
      totalProjects: projectsCount,
    };
  }, []);

  const tabData: Record<string, TabContent> = {
    journey: {
      title: "Programming Journey",
      icon: <Code size={18} />,
      content: `My foundation in computing began at AIUB with C++ and Java, which sharpened my problem-solving core. However, my passion for the web led me to self-study HTML, CSS, and Tailwind. To bridge the gap to professional development, I completed a intensive program at Programming Hero, where I mastered the MERN stack. Over the last ${learningYears} years, I've evolved into a developer who loves building scalable, real-world solutions.`,
      items: [
        "Frontend-Focused Full-Stack Developer",
        "MERN Stack Developer",
        "Problem Solver",
        "Self-Taught Specialist",
      ],
    },
    education: {
      title: "Education",
      icon: <GraduationCap size={18} />,
      content:
        "I am currently focused on my academic growth alongside my professional development in software engineering at AIUB.",
      items: [
        { name: "B.Sc in CSE", icon: "🎓", detail: "AIUB (2022 - Present)" },
        { name: "Web Development", icon: "🎯", detail: "Programming Hero" },
      ],
    },
    skills: {
      title: "Technical Expertise",
      icon: <BookOpen size={18} />,
      content:
        "I thrive in the React ecosystem. My focus is on building high-performance web experiences using Next.js, TypeScript, and Tailwind CSS, while keeping the backend efficient and secure.",
      items: [
        { name: "React.js & Next.js", icon: "⚛️" },
        { name: "TypeScript", icon: "🔷" },
        { name: "Tailwind CSS", icon: "🎨" },
        { name: "Node.js", icon: "🟢" },
        { name: "MongoDB", icon: "🍃" },
        { name: "Firebase", icon: "🔥" },
      ],
    },
    hobbies: {
      title: "Life Outside Coding",
      icon: <Heart size={18} />,
      content:
        "When I'm not debugging, you'll find me on the tracks. I'm an endurance runner who recently finished a half marathon in 2 hours. I believe the discipline of training 5 days a week makes me a better, more focused developer.",
      items: [
        { name: "Traveling & Exploring", icon: "🌍" },
        { name: "Football Tactics", icon: "⚽" },
        { name: "Reading Tech Blogs", icon: "📖" },
        { name: "Late-Night Coding", icon: "🌙" },
      ],
    },
    achievement: {
      title: "Achievements",
      icon: <Award size={18} />,
      content:
        "Certifications and milestones that mark my growth as a developer and a professional.",
      items: [
        {
          headline: "Full Stack Web - Programming Hero",
          img: "/Achievement /Web.png",
        },
        {
          headline: "Frontend Developer (React) -HackerRank",
          img: "/Achievement /Frontend Dev.png",
        },
        {
          headline: "Responsive Web Design - FreeCodeCamp",
          img: "/Achievement /Responsive_Web_ Design.png",
        },
        { headline: "IT Essentials - CISCO", 
          img: "/Achievement /CISCO.png" },
        {
          headline: "Google Ads - Coursera",
          img: "/Achievement /SEO.png",
        },
      ],
    },
  };

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Left Side: Introduction */}
        <div className="lg:col-span-5 space-y-6 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white italic leading-tight">
              About <span className="text-cyan-500 not-italic">Me</span>
            </h2>
            <div className="h-1.5 w-20 bg-cyan-500 mt-3 rounded-full" />
          </motion.div>

          <div className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-normal text-justify">
            <p className="inline">
              Hi, I&apos;m{" "}
              <span className="text-slate-900 dark:text-white font-bold">
                Mostakim.
              </span>
              <br />
              I&apos;m a Computer Science student at AIUB and a Frontend-Focused
              Full-Stack Developer dedicated to building web applications that
              are practical, intuitive, and efficient.
            </p>

            {!isExpanded && (
              <button
                type="button"
                onClick={() => setIsExpanded(true)}
                className="text-cyan-600 dark:text-cyan-400 font-bold hover:underline inline-flex items-center gap-1 ml-1 cursor-pointer transition-colors"
              >
                See More...
              </button>
            )}

            <AnimatePresence>
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="block"
                >
                  <span className="block mt-4">
                    I am interested in building digital products that solve real
                    problems and deliver smooth user experiences. I enjoy
                    understanding user workflows before architectural design.
                    When starting a project, I break complex features into
                    modular, manageable tasks to choose the optimal approach.
                  </span>

                  <span className="block mt-4">
                    My core expertise centers on frontend development with{" "}
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                      React, Next.js, TypeScript, and Tailwind CSS
                    </span>
                    , where I focus on responsive interfaces and modular design.
                    I also bring practical experience in{" "}
                    <span className="text-cyan-600 dark:text-cyan-400 font-semibold">
                      Node.js, Express.js, and MongoDB
                    </span>
                    , enabling smooth full-stack integration.
                  </span>

                  <span className="block mt-4">
                    Continuous learning is central to my process—building
                    projects, evaluating feedback, and refining performance. I
                    am looking to contribute to a collaborative engineering team
                    where I can deliver impactful features while expanding my
                    technical depth.
                  </span>

                  <button
                    type="button"
                    onClick={() => setIsExpanded(false)}
                    className="text-cyan-600 dark:text-cyan-400 font-bold hover:underline inline-flex items-center gap-1 mt-3 cursor-pointer transition-colors"
                  >
                    See Less
                  </button>
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side: Interactive Tabs */}
        <div className="lg:col-span-7 w-full bg-white dark:bg-slate-900/60 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden backdrop-blur-md">
          {/* Tab Headers Navigation */}
          <div className="flex overflow-x-auto gap-2 p-3 bg-slate-100/80 dark:bg-slate-950/60 scrollbar-none border-b border-slate-200 dark:border-slate-800/80">
            {Object.keys(tabData).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedAchievement(null);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs md:text-xs font-bold uppercase tracking-wider transition-all duration-200 whitespace-nowrap cursor-pointer ${
                  activeTab === tab
                    ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/20 scale-[1.02]"
                    : "text-slate-600 dark:text-slate-400 hover:bg-slate-200/60 dark:hover:bg-slate-800/60 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {tabData[tab].icon}
                <span>{tab}</span>
              </button>
            ))}
          </div>

          {/* Tab Body */}
          <div className="p-6 sm:p-8 md:p-10 min-h-[380px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 text-slate-900 dark:text-white">
                  {tabData[activeTab].title}
                </h3>
                <p className="text-xs sm:text-sm md:text-base text-justify text-slate-600 dark:text-slate-300 mb-6 leading-relaxed font-normal">
                  {tabData[activeTab].content}
                </p>

                {activeTab === "achievement" ? (
                  <div className="space-y-3">
                    {(tabData.achievement.items as AchievementItem[]).map(
                      (item, index) => (
                        <div
                          key={index}
                          className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800"
                        >
                          <button
                            type="button"
                            onClick={() =>
                              setSelectedAchievement(
                                selectedAchievement === index ? null : index,
                              )
                            }
                            className={`w-full flex items-center justify-between p-4 sm:p-5 transition-colors cursor-pointer text-left ${
                              selectedAchievement === index
                                ? "bg-cyan-500/10 border-cyan-500/30"
                                : "bg-slate-50 dark:bg-slate-800/40 hover:bg-slate-100 dark:hover:bg-slate-800/80"
                            }`}
                          >
                            <span className="font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                              {item.headline}
                            </span>
                            <ChevronRight
                              size={18}
                              className={`transition-transform duration-300 shrink-0 ${
                                selectedAchievement === index
                                  ? "rotate-90 text-cyan-500"
                                  : "text-slate-400"
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {selectedAchievement === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                                className="bg-slate-100 dark:bg-slate-900/90 p-4 border-t border-slate-200 dark:border-slate-800"
                              >
                                <img
                                  src={item.img}
                                  alt={item.headline}
                                  className="rounded-xl w-full h-auto object-cover shadow-sm"
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ),
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {tabData[activeTab].items?.map((item, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.01 }}
                        className="p-3.5 sm:p-4 bg-slate-50 dark:bg-slate-800/40 rounded-2xl border border-slate-200 dark:border-slate-800 font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200 flex items-center gap-3 group"
                      >
                        {typeof item === "string" ? (
                          <>
                            <div className="w-2 h-2 rounded-full bg-cyan-500 group-hover:scale-125 transition-transform shrink-0" />
                            <span>{item}</span>
                          </>
                        ) : (
                          <div className="flex items-center gap-3">
                            <span className="text-lg sm:text-xl shrink-0">
                              {(item as DetailedItem).icon}
                            </span>
                            <div className="flex flex-col">
                              <span className="leading-snug">
                                {(item as DetailedItem).name}
                              </span>
                              {(item as DetailedItem).detail && (
                                <span className="text-[10px] sm:text-xs text-slate-500 dark:text-slate-400 font-normal mt-0.5">
                                  {(item as DetailedItem).detail}
                                </span>
                              )}
                            </div>
                          </div>
                        )}
                      </motion.div>
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
