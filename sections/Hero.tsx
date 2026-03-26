"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import CommonButton from "../components/CommonButton";
import MyPhoto from "../public/MyPhoto.png";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 lg:px-24 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-brand-medium/5 blur-[120px] rounded-full -z-10"></div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center"
      >
        {/* Left Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-medium/10 text-brand-medium text-[10px] font-black uppercase tracking-[0.2em] mb-6 border border-brand-medium/20"
          >
            <span className="h-2 w-2 rounded-full bg-brand-medium animate-ping"></span>
            Available for new challenges
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] mb-8 text-brand-darkest dark:text-white"
          >
            <span
              className="text-brand-medium italic font-serif"
              style={{
                WebkitTextStroke: "1px currentColor",
                WebkitTextFillColor: "transparent",
              }}
            >
              I am <br />
            </span>{" "}
            <span className="bg-gradient-to-r from-brand-light via-brand-medium to-brand-darkest bg-clip-text text-transparent">
              Mostakim
            </span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="text-base md:text-xl font-bold text-slate-600 dark:text-slate-400 mb-8 h-8"
          >
            <TypeAnimation
              sequence={[
                "Clean Code Enthusiast.",
                2000,
                "Frontend Developer.",
                2000,
                "Next.js & TypeScript Expert.",
                2000,
                "MERN Stack Developer.",
                2000,
              ]}
              repeat={Infinity}
            />
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col items-center lg:items-start gap-8"
          >
            <p className="text-sm md:text-base text-center lg:text-justify text-slate-500 dark:text-slate-400 max-w-md leading-relaxed">
              CSE student at AIUB and a MERN developer. I focus on making fast,
              clean, and useful websites. My goal is to solve real-world
              problems with simple and smart designs.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <CommonButton
                text="View Projects"
                onClick={() =>
                  document
                    .getElementById("projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
              />

              <div className="flex items-center gap-6 border-l border-slate-200 dark:border-slate-800 pl-6">
                <a
                  href="https://github.com/mostakim8"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-brand-medium transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://linkedin.com/in/all-mostakim/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-400 hover:text-brand-medium transition-colors"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Content (Image) */}
        <motion.div
          variants={itemVariants}
          className="order-1 lg:order-2 flex justify-center lg:justify-end"
        >
          <div className="relative w-[280px] h-[350px] md:w-[350px] md:h-[450px] group">
            <div className="relative w-full h-full bg-slate-200 dark:bg-slate-800 rounded-[2.5rem] overflow-hidden shadow-2xl transition-all duration-700 group-hover:rounded-[3.5rem]">
              <Image
                src={MyPhoto}
                alt="Mostakim"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 350px"
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105"
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

