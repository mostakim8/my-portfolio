"use client"; // এটি অবশ্যই লাগবে

import React from "react";
import { motion } from "framer-motion";
import { Layout, Code, Smartphone, Rocket, ArrowUpRight } from "lucide-react";

// ডেটার টাইপ ডিফাইন করা (TypeScript এর জন্য)
interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const SERVICES: Service[] = [
  {
    icon: <Layout size={20} />,
    title: "Frontend",
    description: "Modern, fast & responsive UI using React/Next.js.",
    color: "from-blue-500/20 to-cyan-400/20",
  },
  {
    icon: <Code size={20} />,
    title: "Backend",
    description: "Scalable APIs and secure database management.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: <Smartphone size={20} />,
    title: "Full Stack",
    description: "End-to-end MERN stack web applications.",
    color: "from-orange-500/20 to-amber-400/20",
  },
  {
    icon: <Rocket size={20} />,
    title: "Optimization",
    description: "SEO and performance for lightning speed.",
    color: "from-green-500/20 to-emerald-400/20",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-base-100 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black tracking-tighter"
          >
            My <span className="text-primary italic">Services</span>
          </motion.h2>
          <div className="w-12 h-1 bg-primary mt-2"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-6 bg-base-200/40 backdrop-blur-sm border border-base-content/5 rounded-3xl hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div
                    className={`p-3 rounded-2xl bg-gradient-to-br ${service.color} text-primary`}
                  >
                    {service.icon}
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="opacity-0 group-hover:opacity-40 transition-opacity"
                  />
                </div>

                <h3 className="text-lg font-bold mb-2 tracking-tight group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs opacity-50 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-6 w-0 group-hover:w-full h-[1px] bg-primary/20 transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
