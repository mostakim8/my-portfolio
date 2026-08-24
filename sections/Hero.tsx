"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin, ArrowUpRight, Download } from "lucide-react";
import Image from "next/image";
import MyPhoto from "../public/HeroImg.png";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      /* Mobile/Small/Medium (0px - 1023px): Image 2 styling */
      /* Large (lg: 1024px+): Image 4 styling */
      className="min-h-screen flex items-center pt-[42vh] sm:pt-[45vh] md:pt-[40vh] lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-32 relative overflow-hidden bg-[#0a0f1d] text-white px-4 sm:px-6 md:px-12 lg:px-20"
    >
      {/* 1. Background Image Container */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src={MyPhoto}
            alt="Mostakim"
            fill
            priority
            sizes="100vw"
            /* 
               Mobile, sm (640px), md (768px): object-center (Image 2 exact look)
               lg (1024px), xl (1280px), 2xl (1536px): object-right (Image 4 exact look)
            */
            className="object-cover object-center lg:object-right opacity-60 lg:opacity-75 filter contrast-125 mix-blend-luminosity"
          />
        </div>

        {/* Dynamic Responsive Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0f1d] via-[#0a0f1d]/80 lg:via-[#0a0f1d]/70 to-[#0a0f1d]/20 lg:to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1d] via-transparent to-[#0a0f1d]/80 lg:to-[#0a0f1d]/60 z-10" />
      </div>

      {/* 2. Cyber Glow Backgrounds */}
      <div className="absolute top-1/4 -left-20 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-500/10 blur-[130px] rounded-full pointer-events-none z-10" />
      <div className="absolute bottom-10 right-0 w-80 sm:w-[500px] h-80 sm:h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none z-10" />

      {/* 3. Main Hero Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full relative z-20"
      >
        <div className="max-w-xl md:max-w-xl lg:max-w-3xl text-left">
          {/* Top Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-slate-900/90 border border-slate-800/80 backdrop-blur-md text-[10px] sm:text-xs font-semibold tracking-wider sm:tracking-widest text-slate-300 uppercase mb-3 sm:mb-4 shadow-xl"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
            </span>
            Frontend-Focused Full-Stack Developer
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-black tracking-tight leading-[1.1] sm:leading-[1.05] mb-3 sm:mb-5 text-white"
          >
            Hi, I’m <br />
            <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent drop-shadow-[0_10px_20px_rgba(34,211,238,0.2)]">
              Mostakim
            </span>
          </motion.h1>

          {/* Typing Animation Subtitle */}
          <motion.div
            variants={itemVariants}
            className="text-sm sm:text-lg md:text-xl font-medium text-slate-300 mb-4 sm:mb-6 min-h-[32px] sm:min-h-[40px] flex items-center overflow-hidden"
          >
            <TypeAnimation
              sequence={[
                "Frontend-Focused Full-Stack Developer",
                2000,
                "CSE Student at AIUB",
                2000,
                "Building Scalable & Reliable Web Apps",
                2000,
                "Smart Workflow with AI Integration",
                2000,
              ]}
              repeat={Infinity}
            />
          </motion.div>

          {/* Bio Text */}
          <motion.p
            variants={itemVariants}
            className="text-xs sm:text-sm md:text-base text-slate-300 max-w-xl leading-relaxed mb-6 sm:mb-8 drop-shadow-sm"
          >
            Computer Science student at AIUB and a Frontend-Focused Full-Stack
            Developer. Specialized in building clean, high-performance web
            applications with{" "}
            <span className="text-cyan-400 font-bold underline decoration-cyan-500/30 underline-offset-4">
              React, Next.js, and TypeScript{" "}
            </span>
            with hands-on experience in real-world platforms like Asset
            Management Systems.
          </motion.p>

          {/* Tech Stack Pills */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-2 sm:gap-2.5 mb-6 sm:mb-8"
          >
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-[11px] sm:text-xs font-medium text-slate-300 backdrop-blur-md">
              <span className="text-cyan-400 font-bold">⚛</span> React
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-[11px] sm:text-xs font-medium text-slate-300 backdrop-blur-md">
              <span className="font-bold text-white">N</span> Next.js
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-[11px] sm:text-xs font-medium text-slate-300 backdrop-blur-md">
              <span className="text-blue-400 font-bold">TS</span> TypeScript
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-[11px] sm:text-xs font-medium text-slate-300 backdrop-blur-md">
              <span className="text-yellow-400 font-bold">JS</span> JavaScript
            </span>
          </motion.div>

          {/* Action CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-2.5 sm:gap-4"
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-semibold shadow-lg shadow-cyan-500/20 transition-all duration-300 active:scale-95"
            >
              View My Work{" "}
              <ArrowUpRight size={16} className="sm:w-[18px] sm:h-[18px]" />
            </button>

            <a
              href="/Resume/All_Mostakim.pdf"
              download
              className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 text-slate-200 text-xs sm:text-sm font-semibold backdrop-blur-md transition-all duration-300 active:scale-95"
            >
              Download CV{" "}
              <Download size={16} className="sm:w-[18px] sm:h-[18px]" />
            </a>

            <div className="flex items-center gap-2 sm:gap-3 ml-1 sm:ml-2">
              <a
                href="https://github.com/mostakim8"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 sm:p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-slate-400 hover:text-cyan-400 hover:border-slate-700 backdrop-blur-md transition-all"
              >
                <Github size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
              <a
                href="https://www.linkedin.com/in/all-mostakim/"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 sm:p-3.5 rounded-xl bg-slate-900/80 border border-slate-800/80 text-slate-400 hover:text-cyan-400 hover:border-slate-700 backdrop-blur-md transition-all"
              >
                <Linkedin size={16} className="sm:w-[18px] sm:h-[18px]" />
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
