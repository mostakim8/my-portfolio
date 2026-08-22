"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Layout,
  Code,
  Server,
  Zap,
  X,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface Service {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
  badgeColor: string;
  features: string[];
}

const SERVICES: Service[] = [
  {
    id: "frontend",
    icon: <Layout className="w-6 h-6" />,
    title: "Frontend Development",
    description:
      "Building modern, responsive, and performance-optimized UIs using React, Next.js, and Tailwind CSS.",
    color: "text-cyan-500 dark:text-cyan-400",
    badgeColor: "bg-cyan-500/10 dark:bg-cyan-500/20 border-cyan-500/20",
    features: [
      "Responsive & Mobile-First Design",
      "React / Next.js Ecosystem & TypeScript",
      "Tailwind CSS & Glassmorphic UI Aesthetics",
      "Smooth Motion & Animations (Framer Motion)",
      "Clean, Modular & Maintainable Code Architecture",
    ],
  },
  {
    id: "backend",
    icon: <Server className="w-6 h-6" />,
    title: "Backend Development",
    description:
      "Developing secure, scalable RESTful APIs, authentication systems, and optimized database architectures.",
    color: "text-blue-500 dark:text-blue-400",
    badgeColor: "bg-blue-500/10 dark:bg-blue-500/20 border-blue-500/20",
    features: [
      "RESTful API Design & Express.js Routes",
      "Secure JWT & NextAuth Integration",
      "Database Schema Design & MongoDB Aggregations",
      "Stripe Payment Gateway Integration",
      "Third-Party API & Webhook Integrations",
    ],
  },
  {
    id: "mern",
    icon: <Code className="w-6 h-6" />,
    title: "MERN Stack Solutions",
    description:
      "Delivering end-to-end full-stack web applications seamlessly integrating MongoDB, Express, React, and Node.",
    color: "text-indigo-500 dark:text-indigo-400",
    badgeColor: "bg-indigo-500/10 dark:bg-indigo-500/20 border-indigo-500/20",
    features: [
      "Complete Full-Stack Web Application Architecture",
      "Real-Time State Management & Dynamic Data Flow",
      "Role-Based Access Control (Admin/User Dashboards)",
      "Automated Report & PDF Generation Capabilities",
      "Firebase / Vercel Cloud Deployment & Management",
    ],
  },
  {
    id: "seo",
    icon: <Zap className="w-6 h-6" />,
    title: "Performance & SEO",
    description:
      "Optimizing web speed, Core Web Vitals, and search engine visibility for maximal user engagement.",
    color: "text-amber-500 dark:text-amber-400",
    badgeColor: "bg-amber-500/10 dark:bg-amber-500/20 border-amber-500/20",
    features: [
      "Core Web Vitals & PageSpeed Optimization",
      "Next.js Server-Side Rendering (SSR) & Static Generation",
      "Dynamic Open Graph & Meta Tag Setup for Social Sharing",
      "Image & Asset Optimization for Fast Loading",
      "Clean Semantic HTML for Search Engine Crawlers",
    ],
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const handleContactScroll = () => {
    setSelectedService(null);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-slate-50 dark:bg-slate-950 transition-colors duration-500 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="text-center mb-14 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white"
          >
            My <span className="text-cyan-500 not-italic">Services</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="max-w-2xl mx-auto mt-4 text-sm md:text-base text-slate-600 dark:text-slate-400 font-medium leading-relaxed"
          >
            Crafting{" "}
            <span className="text-cyan-500 font-bold">
              seamless digital experiences
            </span>{" "}
            through clean code, modern architecture, and precision-driven
            development.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
              onClick={() => setSelectedService(service)}
              className="group p-6 md:p-8 bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 rounded-3xl hover:border-cyan-500/50 dark:hover:border-cyan-500/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between backdrop-blur-sm cursor-pointer"
            >
              <div>
                <div
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl border flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${service.badgeColor} ${service.color}`}
                >
                  {service.icon}
                </div>

                <h3 className="text-lg md:text-xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-cyan-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-normal">
                  {service.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5 text-xs font-bold text-cyan-600 dark:text-cyan-400 group-hover:translate-x-1 transition-transform duration-300">
                <span>Core Focus</span>
                <span>→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail Modal / Popup */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl z-10 overflow-hidden"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors cursor-pointer"
              >
                <X size={18} />
              </button>

              {/* Modal Header */}
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${selectedService.badgeColor} ${selectedService.color}`}
                >
                  {selectedService.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    Key Features & Deliverables
                  </p>
                </div>
              </div>

              {/* Features List */}
              <div className="space-y-3 mb-8">
                {selectedService.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-medium leading-tight">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* Modal Action Footer */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                <button
                  type="button"
                  onClick={() => setSelectedService(null)}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleContactScroll}
                  className="px-5 py-2.5 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-600 text-white shadow-lg shadow-cyan-500/20 inline-flex items-center gap-2 transition-all cursor-pointer"
                >
                  <span>Discuss Project</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Services;
