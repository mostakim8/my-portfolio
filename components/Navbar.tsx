"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Moon,
  Sun,
  Home,
  User,
  Code2,
  Briefcase,
  Mail,
} from "lucide-react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  // থিম লোড করা
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // থিম টগল করা
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // সেকশন ট্র্যাকিং
  useEffect(() => {
    const sections = ["home", "about", "tech-stack", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { root: null, rootMargin: "-40% 0px -40% 0px", threshold: 0 },
    );
    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
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
          ? "py-4 bg-base-100/80 backdrop-blur-2xl shadow-xl border-b border-[#0C7779]/10"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-xl font-black tracking-tighter">
          MOSTAKIM<span className="text-[#0C7779] italic">.dev</span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
          {navItems.map((item) => (
            <li key={item.id} className="relative group">
              <a
                href={`#${item.id}`}
                className={`flex items-center gap-2 transition-all duration-300 ${
                  activeSection === item.id
                    ? "text-[#0C7779]"
                    : "text-base-content opacity-50 hover:opacity-100"
                }`}
              >
                {item.icon} {item.label}
              </a>
              {activeSection === item.id && (
                <motion.div
                  layoutId="underline"
                  className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#0C7779] rounded-full"
                />
              )}
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="opacity-60 hover:opacity-100 transition-opacity"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <a
            href="#contact"
            className="hidden sm:flex px-6 py-2 bg-[#0C7779] text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:scale-105 transition-all"
          >
            Hire Me
          </a>
          <button className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            className="fixed inset-0 bg-base-100 z-[65] flex flex-col items-center justify-center lg:hidden"
          >
            <button
              className="absolute top-8 right-8"
              onClick={() => setIsOpen(false)}
            >
              <X size={32} />
            </button>
            <ul className="flex flex-col gap-8 text-center">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-black uppercase tracking-tighter hover:text-[#0C7779] transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
