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

interface NavItem {
  label: string;
  id: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", id: "home", icon: <Home size={14} /> },
  { label: "About", id: "about", icon: <User size={14} /> },
  { label: "Skills", id: "skills", icon: <Code2 size={14} /> },
  { label: "Projects", id: "projects", icon: <Briefcase size={14} /> },
  { label: "Contact", id: "contact", icon: <Mail size={14} /> },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // Dynamic Scroll & ScrollSpy Listener via IntersectionObserver
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Auto-detect active section on screen scroll
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -60% 0px",
      threshold: 0,
    };

    const handleObserver = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleObserver, observerOptions);

    NAV_ITEMS.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (id: string) => {
    setActiveSection(id);
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/60 shadow-xl shadow-cyan-950/10"
            : "py-5 bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex justify-between items-center">
          {/* Brand Logo with Ambient Glow */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("home");
            }}
            className="group relative flex flex-col transition-all duration-300"
          >
            <div className="text-xl sm:text-2xl md:text-3xl font-black tracking-tight text-white leading-none flex items-center gap-0.5">
              <span className="text-cyan-400 group-hover:text-blue-400 transition-colors">
                M
              </span>
              <span>O</span>
              <span className="text-cyan-400 group-hover:text-blue-400 transition-colors">
                S
              </span>
              <span>TAKI</span>
              <span className="text-cyan-400 group-hover:text-blue-400 transition-colors">
                M
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-1 animate-pulse" />
            </div>
            <p className="text-[9px] sm:text-[10px] md:text-[11px] font-medium text-slate-400 tracking-wider mt-1 group-hover:text-cyan-300 transition-colors">
              Frontend-Focused Full-Stack Developer
            </p>
          </a>

          {/* Floating Pill Nav Links (Desktop) */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 p-1.5 rounded-full backdrop-blur-md shadow-inner">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-[11px] font-extrabold uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-white"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {/* Sliding Active Background Pill */}
                  {isActive && (
                    <motion.div
                      layoutId="activePill"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                      className="absolute inset-0 bg-cyan-500/10 border border-cyan-500/30 rounded-full"
                    />
                  )}
                  <span
                    className={`relative z-10 transition-colors ${
                      isActive ? "text-cyan-400" : "text-slate-500"
                    }`}
                  >
                    {item.icon}
                  </span>
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/Resume/All_Mostakim_Full_Stack_Developer_Resume.pdf"
              download="Mostakim_Resume.pdf"
              className="group relative flex items-center gap-2 px-4 py-2.5 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 text-slate-200 hover:text-cyan-400 rounded-full text-[10px] font-extrabold uppercase tracking-widest transition-all duration-300 active:scale-95 cursor-pointer"
            >
              <Download
                size={13}
                className="group-hover:-translate-y-0.5 transition-transform"
              />
              <span>Resume</span>
            </a>

            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("contact");
              }}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-[10px] font-black uppercase tracking-widest rounded-full group bg-gradient-to-br from-cyan-400 to-blue-600 group-hover:from-cyan-400 group-hover:to-blue-600 hover:text-white text-slate-950 shadow-lg shadow-cyan-500/20 active:scale-95 transition-all cursor-pointer"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-cyan-400 group-hover:bg-opacity-0 rounded-full group-hover:text-white text-slate-950 font-black">
                Hire Me
              </span>
            </a>
          </div>

          {/* Mobile Navigation Trigger Button */}
          <button
            type="button"
            className="lg:hidden relative p-2.5 text-slate-300 hover:text-cyan-400 bg-slate-900/80 border border-slate-800 rounded-2xl transition-colors cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Drawer & Blur Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop Layer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-slate-950/70 backdrop-blur-md z-50 lg:hidden"
            />

            {/* Side Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed right-0 top-0 h-full w-[290px] bg-slate-950 border-l border-slate-800/80 z-50 p-6 shadow-2xl flex flex-col justify-between lg:hidden overflow-y-auto"
            >
              <div>
                {/* Drawer Header - Fixed Alignment */}
                <div className="flex justify-between items-start pb-6 border-b border-slate-800/80 mb-6">
                  <div className="flex flex-col">
                    <div className="text-xl font-black tracking-tight text-white leading-none flex items-center gap-0.5">
                      <span className="text-cyan-400">M</span>
                      <span>O</span>
                      <span className="text-cyan-400">S</span>
                      <span>TAKI</span>
                      <span className="text-cyan-400">M</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 ml-1 animate-pulse" />
                    </div>
                    <p className="text-[9px] font-medium text-slate-400 tracking-wider mt-1.5">
                      Frontend Focus Full-Stack Developer
                    </p>
                  </div>

                  <button
                    type="button"
                    className="p-1.5 text-slate-400 hover:text-white bg-slate-900 rounded-xl cursor-pointer transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Nav Links List */}
                <div className="flex flex-col gap-2">
                  {NAV_ITEMS.map((item) => {
                    const isActive = activeSection === item.id;
                    return (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick(item.id);
                        }}
                        className={`flex items-center gap-3.5 px-4 py-3 rounded-2xl text-xs font-extrabold uppercase tracking-widest transition-all ${
                          isActive
                            ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                            : "text-slate-300 hover:bg-slate-900 hover:text-white"
                        }`}
                      >
                        <span
                          className={
                            isActive ? "text-cyan-400" : "text-slate-500"
                          }
                        >
                          {item.icon}
                        </span>
                        {item.label}
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Action Buttons */}
              <div className="flex flex-col gap-3 pt-6 border-t border-slate-800/80 mt-6">
                <a
                  href="/public/Resume/All_Mostakim.pdf"
                  download="Mostakim_Resume.pdf"
                  className="flex items-center justify-center gap-2 py-3 border border-slate-800 rounded-2xl text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white bg-slate-900/60 transition-colors"
                >
                  <Download size={14} />
                  <span>Resume</span>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick("contact");
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3.5 bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-black uppercase tracking-wider text-xs rounded-2xl shadow-lg shadow-cyan-500/20 active:scale-95 transition-transform"
                >
                  <span>Hire Me</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
