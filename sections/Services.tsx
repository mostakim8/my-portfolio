"use client";

import React from "react";
import { motion } from "framer-motion";
import { Layout, Code, Smartphone, Rocket } from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const SERVICES: Service[] = [
  {
    icon: <Layout size={24} />,
    title: "Frontend Development",
    description:
      "Modern, fast & responsive UI using React and Next.js ecosystem.",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: <Code size={24} />,
    title: "Backend Development",
    description: "Scalable server-side APIs and secure database management.",
    color: "bg-purple-500/10 text-purple-500",
  },
  {
    icon: <Smartphone size={24} />,
    title: "Full Stack Solutions",
    description: "End-to-end MERN stack web application development.",
    color: "bg-orange-500/10 text-orange-500",
  },
  {
    icon: <Rocket size={24} />,
    title: "Performance & SEO",
    description: "Optimizing web experiences for lightning speed and ranking.",
    color: "bg-green-500/10 text-green-500",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="py-16 md:py-20 bg-white dark:bg-slate-950 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black tracking-tighter text-center text-brand-darkest dark:text-white italic"
          > <span className="text-brand-medium not-italic">Services</span>
          </motion.h2>
         
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-6 md:p-8 bg-slate-50 dark:bg-slate-900 border border-brand-light/20 rounded-[2rem] hover:border-brand-medium/50 transition-all duration-300 flex flex-col justify-start"
            >
              <div
                className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center mb-6 ${service.color}`}
              >
                {service.icon}
              </div>

              <h3 className="text-base md:text-lg font-black text-brand-darkest dark:text-white mb-3 tracking-tight group-hover:text-brand-medium transition-colors">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
