"use client";

import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="relative w-full bg-slate-950 text-slate-400 border-t border-slate-900/80 py-8 px-4 sm:px-6 lg:px-8 overflow-hidden transition-colors duration-500">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:2.5rem_2.5rem] pointer-events-none" />

      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[500px] h-[60px] bg-cyan-500/10 blur-[90px] pointer-events-none rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-center sm:text-left">
        {/* Left: Brand Name & Title */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center gap-1 sm:gap-0"
        >
          <span className="font-bold text-white tracking-widest uppercase text-xs sm:text-sm font-mono">
            Mostakim<span className="text-cyan-400">.</span>
          </span>
          <span className="hidden sm:inline text-slate-800 mx-3">|</span>
          <span className="text-slate-500 text-[10px] sm:text-xs">
            Frontend Focus Full-Stack Developer 
          </span>
        </motion.div>

        {/* Center: Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-500 text-[10px] sm:text-xs tracking-wide font-mono"
        >
          © {new Date().getFullYear()} All Rights Reserved.
        </motion.div>

        {/* Right: Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-slate-500 text-[10px] sm:text-xs tracking-wide"
        >
          Built with{" "}
          <span className="text-slate-200 font-semibold hover:text-cyan-400 transition-colors">
            Next.js
          </span>{" "}
          &{" "}
          <span className="text-slate-200 font-semibold hover:text-cyan-400 transition-colors">
            Tailwind CSS
          </span>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
