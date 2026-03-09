"use client"; // এটি অবশ্যই দিতে হবে

import React, { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image"; // Next.js এর ইমেজ কম্পোনেন্ট
import CommonButton from "../components/CommonButton";
import MyPhoto from "../public/icon.png"; // ইমেজটি 'public' ফোল্ডারে রাখলে এভাবে ইমপোর্ট হবে

const Hero = () => {
  const [showRemaining, setShowRemaining] = useState(false);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (customDelay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
        delay: customDelay,
      },
    }),
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 lg:px-24 bg-base-100 relative overflow-hidden"
    >
      <div className="absolute top-1/4 -left-20 w-[400px] h-[400px] bg-[#0C7779]/10 blur-[120px] rounded-full -z-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10 pt-20">
        <div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0.1}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0C7779]/10 text-[#0C7779] text-[10px] font-bold uppercase tracking-widest mb-6 border border-[#0C7779]/20"
          >
            <span className="h-2 w-2 rounded-full bg-[#3BC1A8] animate-ping"></span>
            Available for new challenges
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0.2}
            className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
          >
            I am <br />{" "}
            <span className="text-[#0C7779] italic font-serif">Mostakim</span>
          </motion.h1>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            custom={0.3}
            className="text-xl md:text-2xl font-medium text-base-content/70 mb-8 h-8"
          >
            <TypeAnimation
              sequence={[
                "Frontend Developer.",
                () => setShowRemaining(true),
                2000,
                "React & Next.js Specialist.",
                2000,
                "Clean Code Enthusiast.",
                2000,
              ]}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            initial="hidden"
            animate={showRemaining ? "visible" : "hidden"}
            variants={fadeInUp}
            custom={0}
            className="text-lg text-base-content/60 max-w-md mb-10 leading-relaxed"
          >
            Turning complex problems into elegant, high-performance web
            experiences. Focused on precision, speed, and modern design.
          </motion.p>

          <motion.div
            initial="hidden"
            animate={showRemaining ? "visible" : "hidden"}
            variants={fadeInUp}
            custom={0.2}
            className="flex flex-wrap items-center gap-6"
          >
            <CommonButton
              text="View Projects"
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
            />

            <div className="flex items-center gap-6 border-l border-base-content/10 pl-6">
              <a href="https://github.com/mostakim8" className="text-base-content/40 hover:text-[#0C7779] transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/all-mostakim/" className="text-base-content/40 hover:text-[#0C7779] transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="relative flex justify-center lg:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={showRemaining ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-full max-w-[400px] aspect-[4/5] group">
            <div className="w-full h-full bg-[#0C7779]/20 overflow-hidden relative shadow-2xl transition-all duration-700 rounded-[2rem] group-hover:rounded-[3rem] group-hover:shadow-[#0C7779]/20 group-hover:shadow-2xl">
              <Image
                src={MyPhoto}
                alt="Mostakim"
                fill
                className="object-cover grayscale transition-all duration-1000 group-hover:grayscale-0 scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;