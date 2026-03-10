"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 bg-white dark:bg-slate-950 border-t border-brand-light/20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
        {/* Branding */}
        <div className="order-1 md:order-none">
          <p className="text-sm font-black text-brand-darkest dark:text-white uppercase tracking-wider">
            Mostakim <span className="text-brand-medium">.</span>
          </p>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mt-1">
            Frontend Developer
          </p>
        </div>

        {/* Copyright */}
        <div className="order-3 md:order-none">
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-600">
            © {new Date().getFullYear()} All Rights Reserved.
          </p>
        </div>

        {/* Built With */}
        <div className="order-2 md:order-none">
          <p className="text-[10px] font-bold uppercase tracking-widest text-brand-darkest dark:text-slate-400">
            Built with <span className="text-brand-medium">Next.js</span> &{" "}
            <span className="text-brand-medium">Tailwind</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
