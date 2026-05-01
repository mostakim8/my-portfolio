"use client";

import React from "react";
import { motion } from "framer-motion";

const TECH_DATA = [
  {
    name: "HTML5",
    level: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS3",
    level: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "Bootstrap",
    level: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  {
    name: "Tailwind",
    level: "Design",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },

  {
    name: "React",
    level: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    level: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Next.js",
    level: "Fullstack",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "Express.js",
    level: "Backend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  {
    name: "Stripe",
    level: "Payment Gateway",
    icon: "https://www.vectorlogo.zone/logos/stripe/stripe-icon.svg",
  },
  {
    name: "TypeScript",
    level: "Frontend",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },

  {
    name: "MongoDB",
    level: "Database",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Firebase",
    level: "Cloud",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },

  {
    name: "GitHub",
    level: "Version Control",
    icon: "https://www.svgrepo.com/show/394174/github.svg",
  },

  {
    name: "Netlify",
    level: "Deployment",
    icon: "https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg",
  },
  {
    name: "Vercel",
    level: "Deployment",
    icon: "https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg",
  },

  {
    name: "Figma",
    level: "UI/UX Design",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  },
  {
    name: "Canva",
    level: "Basic",
    icon: "https://www.vectorlogo.zone/logos/canva/canva-icon.svg",
  },
  {
    name: "Pixso",
    level: "Design Tool",
    icon: "https://logosandtypes.com/wp-content/uploads/2025/02/pixso.svg",
  },
  {
    name: "Dribbble",
    level: "Inspiration",
    icon: "https://staging.svgrepo.com/show/22048/dribbble.svg",
  },
  {
    name: "Framer Motion",
    level: "Animation",
    icon: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const TechStack = () => {
  return (
    <section
      id="tech-stack"
      className="py-16 md:py-20 bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      <div className=" mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {/* Header */}
          <div className="mb-12 md:mb-16 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-black text-center tracking-tighter text-brand-darkest dark:text-white italic">
              <span className="text-brand-medium not-italic">Technology</span>
            </h2>
            <p className="text-sm md:text-base text-slate-600 dark:text-slate-300 mt-4 text-center">
              I use a modern and reliable set of tools to build fast, scalable
              web apps. From frontend design to backend logic, I focus on
              delivering clean code.
            </p>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-4 ">
            {TECH_DATA.map((tech, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group p-6 bg-slate-50 dark:bg-slate-900 border border-brand-light/20 rounded-3xl flex flex-col items-center justify-center text-center hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-8 h-8 md:w-10 md:h-10 mb-4 grayscale group-hover:grayscale-0 transition-all duration-500 "
                />
                <h3 className="text-[10px] md:text-xs font-black uppercase tracking-widest text-brand-darkest dark:text-white">
                  {tech.name}
                </h3>
                <p className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-brand-medium mt-1">
                  {tech.level}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
