"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Code2,
  Briefcase,
  Mail,
  ArrowRight,
  Download,
} from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", id: "home", icon: <Home size={14} /> },
    { label: "About", id: "about", icon: <User size={14} /> },
    { label: "Tech", id: "tech-stack", icon: <Code2 size={14} /> },
    { label: "Projects", id: "projects", icon: <Briefcase size={14} /> },
    { label: "Contact", id: "contact", icon: <Mail size={14} /> },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-[60] transition-all duration-500 ${
        scrolled
          ? "py-4 bg-white/80 dark:bg-slate-950/80 backdrop-blur-lg border-b border-slate-200 dark:border-slate-800"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-black tracking-tighter text-brand-darkest dark:text-white"
        >
          MOSTAKIM<span className="text-brand-medium italic">.dev</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={() => setActiveSection(item.id)}
                className={`flex items-center gap-2 transition-colors ${
                  activeSection === item.id
                    ? "text-brand-medium"
                    : "text-slate-500 hover:text-brand-darkest dark:hover:text-white"
                }`}
              >
                {item.icon} {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="#contact"
            className="flex items-center gap-2 px-5 py-2.5 bg-brand-medium text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-brand-darkest transition-all shadow-md"
          >
            Hire Me
          </a>
          <a
            href="/Resume.pdf"
            download
            className="flex items-center gap-2 px-5 py-2.5 border border-brand-medium text-brand-medium rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-brand-medium hover:text-white transition-all"
          >
            <Download size={12} /> Resume
          </a>
        </div>

        {/* Mobile Menu Toggle  */}
        <button
          className="lg:hidden p-2 text-brand-darkest dark:text-white transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            className="fixed right-0 top-0 h-full w-[280px] bg-white dark:bg-slate-950 z-[80] p-8 shadow-2xl flex flex-col"
          >
            <div className="flex justify-end mb-12">
              <button
                className="text-brand-darkest dark:text-white"
                onClick={() => setIsOpen(false)}
              >
                <X size={28} />
              </button>
            </div>
            <div className="flex flex-col gap-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-bold uppercase tracking-widest text-slate-600 dark:text-slate-300 hover:text-brand-medium"
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-slate-200 dark:border-slate-800" />
              <a
                href="/Profile (4).pdf"
                download
                className="flex items-center gap-2 text-sm font-bold uppercase text-brand-medium"
              >
                <Download size={16} /> Download Resume
              </a>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-4 bg-brand-medium text-white rounded-2xl font-bold uppercase tracking-tighter text-xs"
              >
                Hire Me <ArrowRight size={14} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
