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

//import project data  
import { PROJECT_DATA } from "./Projects";

const About = () => {
  const [activeTab, setActiveTab] = useState("journey");
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(
    null,
  );
  const [isExpanded, setIsExpanded] = useState(false);

  //  Real-time Dynamic Date & Project Calculation
  const { learningYears, intensiveMonths, totalProjects } = useMemo(() => {
    const journeyStartDate = new Date("2022-05-02");
    const intensiveStartDate = new Date("2024-06-01");
    const today = new Date();

    const diffInMs = today.getTime() - journeyStartDate.getTime();
    const years = (diffInMs / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);

    const monthDiff =
      (today.getFullYear() - intensiveStartDate.getFullYear()) * 12 +
      (today.getMonth() - intensiveStartDate.getMonth());

    const projectsCount = PROJECT_DATA.length;

    return {
      learningYears: years,
      intensiveMonths: monthDiff > 0 ? monthDiff : 7,
      totalProjects: projectsCount,
    };
  }, []);

  const tabData: any = {
    journey: {
      title: "Programming Journey",
      icon: <Code size={18} />,
      content: `My foundation in computing began at AIUB with C++ and Java, which sharpened my problem-solving core. However, my passion for the web led me to self-study HTML, CSS, and Tailwind. To bridge the gap to professional development, I completed a ${intensiveMonths}-month intensive grind at Programming Hero, where I mastered the MERN stack. Over the last ${learningYears} years, I've evolved into a developer who loves building scalable, real-world solutions.`,
      items: [
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
        { name: "Focus Areas", icon: "🎯 ", detail: "Web Development" },
      ],
    },
    skills: {
      title: "Technical Expertise",
      icon: <BookOpen size={18} />,
      content:
        "I thrive in the React ecosystem. My focus is on building high-performance web experiences using Next.js, TypeScript, and Tailwind CSS, while keeping the backend efficient and secure.",
      items: [
        { name: "React.js & Next.js", icon: "⚛️" },
        { name: "TypeScript", icon: " 🔷 " },
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
        { name: "Late-Night Coding", icon: "🌙" },
        { name: "Traveling & Exploring", icon: "🌍" },
        { name: "Football Tactics", icon: "⚽" },
        { name: "Reading Tech Blogs", icon: "📖" },
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
        { headline: "IT Essentials - CISCO", img: "/Achievement /CISCO.png" },
        {
          headline: "Responsive Web Design - FreeCodeCamp",
          img: "/Achievement /Responsive_Web_ Design.png",
        },
        { headline: "Google Ads - Coursera", img: "/Achievement /SEO.png" },
        {
          headline: "Data Analysis - Coursera",
          img: "/Achievement /Data_Anlaysis Using_Excel.png",
        },
      ],
    },
  };

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Side: Introduction */}
        <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tighter text-brand-darkest dark:text-white italic leading-tight">
              About <span className="text-brand-medium not-italic">Me</span>
            </h2>
            <div className="h-1.5 w-20 bg-brand-medium mt-4 mx-auto lg:mx-0 rounded-full" />
          </motion.div>

          <div className="text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed font-medium text-justify">
            <p className="inline">
              Hi, I&apos;m{" "}
              <span className="text-brand-darkest dark:text-white font-bold">
                Mostakim
              </span>
              . I&apos;m a Full Stack Web Developer and a CSE student at AIUB.
              While university taught me the fundamentals with C++ and Java, I
              spent my free time mastering modern web technologies.
            </p>

            {!isExpanded && (
              <button
                onClick={() => setIsExpanded(true)}
                className="text-brand-medium font-bold hover:underline inline-flex items-center gap-1 ml-1"
              >
                See More...
              </button>
            )}

            <AnimatePresence>
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="inline"
                >
                  <span className="block mt-4">
                    My journey started in 2022 with self-study. To sharpen my
                    skills, I completed an intensive 7-month program at
                    <span className="text-brand-medium font-bold ml-1">
                      Programming Hero
                    </span>
                    , where I spent 8 to 10 hours daily mastering the
                    <span className="text-brand-medium font-bold ml-1">
                      MERN stack
                    </span>
                    . This experience turned my passion into professional
                    expertise.
                  </span>

                  <span className="block mt-4">
                    Beyond coding, I am certified in
                    <span className="text-brand-medium font-bold ml-1">
                      {" "}
                      Responsive Web Design{" "}
                    </span>
                    from freeCodeCamp. I also believe in a data-driven approach,
                    earning professional certifications in
                    <span className="text-brand-medium font-bold ml-1">
                      {" "}
                      Data Analysis{" "}
                    </span>
                    and
                    <span className="text-brand-medium font-bold ml-1">
                      {" "}
                      Google Ads{" "}
                    </span>
                    via Coursera. This mix helps me build apps that are both
                    functional and business-focused.
                  </span>

                  <span className="block mt-4">
                    Currently, I focus on building clean and scalable
                    applications using
                    <span className="text-brand-medium font-bold">
                      {" "}
                      TypeScript{" "}
                    </span>
                    and
                    <span className="text-brand-medium font-bold">
                      {" "}
                      Next.js{" "}
                    </span>
                    . I love solving real-world problems with simple,
                    user-friendly designs.
                  </span>

                  <button
                    onClick={() => setIsExpanded(false)}
                    className="text-brand-medium font-bold hover:underline inline-flex items-center gap-1 mt-2"
                  >
                    See Less
                  </button>
                </motion.span>
              )}
            </AnimatePresence>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4">
            {[
              { label: "Projects Built", value: `${totalProjects}+` },
              { label: "Years Experience", value: `${learningYears}+` },
            ].map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="p-5 md:p-6 border border-brand-light/20 rounded-[2rem] bg-slate-50 dark:bg-slate-900/50 backdrop-blur-sm"
              >
                <h4 className="text-2xl md:text-3xl font-black text-brand-medium">
                  {stat.value}
                </h4>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Right Side: Interactive Tabs */}
        <div className="lg:col-span-7 w-full bg-white dark:bg-slate-900/40 rounded-[2.5rem] border border-brand-light/10 shadow-2xl overflow-hidden backdrop-blur-md">
          <div className="flex overflow-x-auto gap-1 p-3 bg-slate-50 dark:bg-slate-950/50 scrollbar-hide border-b border-brand-light/10">
            {Object.keys(tabData).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setSelectedAchievement(null);
                }}
                className={`flex items-center gap-2 mx-1 px-5 py-3 rounded-2xl text-[10px] md:text-xs font-black uppercase transition-all duration-300 ${activeTab === tab ? "bg-brand-medium text-white shadow-lg shadow-brand-medium/20 scale-105" : "text-slate-500 hover:bg-brand-light/10"}`}
              >
                {tabData[tab].icon} {tab}
              </button>
            ))}
          </div>

          <div className="p-8 md:p-10 min-h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="text-2xl md:text-3xl font-bold mb-5 text-brand-darkest dark:text-white">
                  {tabData[activeTab].title}
                </h3>
                <p className="text-sm md:text-base text-justify text-slate-600 dark:text-slate-300 mb-8 leading-relaxed font-medium">
                  {tabData[activeTab].content}
                </p>

                {activeTab === "achievement" ? (
                  <div className="space-y-3">
                    {tabData.achievement.items.map(
                      (item: any, index: number) => (
                        <div key={index} className="overflow-hidden">
                          <button
                            onClick={() =>
                              setSelectedAchievement(
                                selectedAchievement === index ? null : index,
                              )
                            }
                            className={`w-full flex items-center justify-between p-5 rounded-2xl border transition-all ${selectedAchievement === index ? "bg-brand-medium/10 border-brand-medium" : "bg-slate-50 dark:bg-slate-800/50 border-brand-light/10 hover:border-brand-medium/50"}`}
                          >
                            <span className="font-bold text-sm dark:text-slate-200">
                              {item.headline}
                            </span>
                            <ChevronRight
                              size={18}
                              className={`transition-transform duration-300 ${selectedAchievement === index ? "rotate-90 text-brand-medium" : "text-slate-400"}`}
                            />
                          </button>
                          <AnimatePresence>
                            {selectedAchievement === index && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="bg-slate-100 dark:bg-slate-800/80 rounded-b-2xl p-4"
                              >
                                <img
                                  src={item.img}
                                  alt={item.headline}
                                  className="rounded-xl w-full h-auto shadow-inner border border-white/10"
                                />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ),
                    )}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {tabData[activeTab].items?.map((item: any, i: number) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.02 }}
                        className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-brand-light/10 font-bold text-xs md:text-sm text-slate-700 dark:text-slate-200 flex items-center gap-4 group"
                      >
                        {typeof item === "string" ? (
                          <>
                            <div className="w-2.5 h-2.5 rounded-full bg-brand-medium group-hover:scale-125 transition-transform" />
                            {item}
                          </>
                        ) : (
                          <div className="flex items-center gap-3">
                            <span className="text-xl">{item.icon}</span>
                            <div className="flex flex-col">
                              <span>{item.name}</span>
                              {item.detail && (
                                <span className="text-[10px] text-slate-500 font-medium tracking-tight">
                                  {item.detail}
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
