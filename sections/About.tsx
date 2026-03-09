"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import Image from "next/image";
// import { PROJECT_DATA } from "../sections/Projects"; // এটি তোমার প্রজেক্ট থেকে ইমপোর্ট করো

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const [selectedAchievement, setSelectedAchievement] = useState<number | null>(null);
  const [fullscreenImg, setFullscreenImg] = useState<string | null>(null);

  const totalProjects = 10; // এখানে তোমার প্রজেক্ট কাউন্ট বসাও

  const calculateLearningYears = () => {
    const startDate = new Date("2021-01-01");
    const today = new Date();
    return ((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
  };

  const tabData: any = {
    skills: {
      title: "Technical Expertise",
      content: "I specialize in the React ecosystem, focusing on performance, accessibility, and clean architecture.",
      items: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Node.js", "Firebase"],
    },
    experience: {
      title: "Journey & Growth",
      content: `Over the past ${Math.floor(Number(calculateLearningYears()))}+ years, I have built several full-stack projects.`,
      items: [`${Math.floor(Number(calculateLearningYears()))}+ Years Learning`, `${totalProjects}+ Projects Done`, "MERN Stack Focused", "Active Problem Solver"],
    },
    Achievement: {
      title: "My Achievements",
      content: "Recognitions for my technical skills and dedication.",
      items: [
        { headline: "IT Essentials", topic: "Computer Hardware", img: "/Achievement /CISCO.png" },
        { headline: "Web Design", topic: "FreeCodeCamp", img: "/Achievement /Responsive Web Design.png" },
      ],
    },
    education: {
      title: "Education",
      content: "My academic background provides a solid foundation in software engineering.",
      items: ["B.Sc in Computer Science (Ongoing)", "Web Development by Programming Hero"],
    },
  };

  return (
    <section id="about" className="py-20 px-6 lg:px-24 bg-base-100 transition-colors duration-500 relative">
      <motion.div className="max-w-6xl mx-auto relative z-10" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.1 }}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <motion.div variants={itemVariants}>
              <h2 className="text-5xl font-black tracking-tighter text-base-content italic">About <span className="text-primary not-italic">Me</span></h2>
              <div className="h-1.5 w-24 bg-primary rounded-full mt-4" />
            </motion.div>
            <motion.p variants={itemVariants} className="text-lg text-base-content/70 leading-relaxed">
              I’m a developer who loves turning complex problems into <span className="text-primary font-bold">simple, beautiful interfaces</span>.
            </motion.p>
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
              {[{ val: `${totalProjects}+`, label: "Projects" }, { val: `${calculateLearningYears()}+`, label: "Years" }].map((stat, i) => (
                <div key={i} className="p-6 border border-base-content/10 rounded-3xl bg-base-200/50">
                  <h4 className="text-3xl font-black text-primary">{stat.val}</h4>
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-50 mt-2 text-base-content/60">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="lg:col-span-7 bg-base-200/50 p-2 rounded-[2.5rem] border border-base-content/5">
            <div className="flex flex-wrap gap-2 p-2 bg-base-100 rounded-[1.8rem]">
              {Object.keys(tabData).map((tab) => (
                <button key={tab} onClick={() => { setActiveTab(tab); setSelectedAchievement(null); }} className={`px-6 py-3 rounded-2xl text-xs font-black uppercase transition-all ${activeTab === tab ? "bg-primary text-white" : "hover:bg-secondary/20 text-base-content/60"}`}>
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-8 min-h-[400px]">
              <AnimatePresence mode="wait">
                <motion.div key={activeTab} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  <h3 className="text-2xl font-bold mb-4 text-primary">{tabData[activeTab].title}</h3>
                  <p className="text-base-content/70 mb-8 italic">"{tabData[activeTab].content}"</p>

                  {activeTab === "Achievement" ? (
                    tabData.Achievement.items.map((item: any, index: number) => (
                      <div key={index} className="mb-3">
                        <button onClick={() => setSelectedAchievement(selectedAchievement === index ? null : index)} className="w-full flex items-center justify-between p-4 rounded-xl bg-base-100 border border-base-content/10 hover:border-primary transition-all">
                          <span className="font-bold text-base-content">{item.headline}</span>
                          <ChevronRight size={18} className={`text-primary transition-transform ${selectedAchievement === index ? "rotate-90" : ""}`} />
                        </button>
                        {selectedAchievement === index && (
                          <div className="p-4 grid gap-2">
                            <div className="relative w-full h-40">
                              <Image src={item.img} alt={item.headline} fill className="rounded-lg cursor-pointer hover:opacity-80 object-cover" onClick={() => setFullscreenImg(item.img)} />
                            </div>
                            <p className="text-xs text-base-content/50">Topic: {item.topic}</p>
                          </div>
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      {tabData[activeTab].items.map((item: string, i: number) => (
                        <div key={i} className="p-4 bg-base-100 rounded-xl border border-base-content/10 font-bold text-sm text-base-content flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {fullscreenImg && (
        <div className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm" onClick={() => setFullscreenImg(null)}>
          <X className="absolute top-6 right-6 text-white cursor-pointer hover:text-primary" size={32} />
          <Image src={fullscreenImg} alt="Fullscreen" width={800} height={600} className="rounded-xl object-contain" />
        </div>
      )}
    </section>
  );
};

export default About;