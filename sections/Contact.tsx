"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Facebook, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-28 px-6 md:px-12 lg:px-24 bg-white dark:bg-slate-950 transition-colors duration-500 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left Content */}
          <div className="space-y-8 md:space-y-12">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tighter leading-none mb-6 text-brand-darkest dark:text-white"
              >
                Let’s <br />
                <span className="text-brand-medium italic font-serif">
                  Talk.
                </span>
              </motion.h2>
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                I'm currently looking for new opportunities and collaborations.
                Feel free to reach out to me!
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-brand-medium/10 text-brand-medium">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Email Me
                  </p>
                  <a
                    href="mailto:allmostakim13@gmail.com"
                    className="text-sm md:text-lg font-bold text-brand-darkest dark:text-white hover:text-brand-medium transition-colors"
                  >
                    allmostakim13@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-500">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                    Location
                  </p>
                  <p className="text-sm md:text-lg font-bold text-brand-darkest dark:text-white">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://www.facebook.com/your-profile"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-blue-600/10 text-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/all-mostakim/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3 rounded-xl bg-sky-700/10 text-sky-700 hover:bg-sky-700 hover:text-white transition-all duration-300"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 md:p-10 bg-slate-50 dark:bg-slate-900 rounded-[2.5rem] border border-brand-light/20 shadow-2xl"
          >
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >
              <input
                type="hidden"
                name="access_key"
                value="194e64a2-84d1-4c4d-99c7-4192c1a89f4b"
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className="w-full bg-white dark:bg-slate-950 p-4 rounded-2xl border border-brand-light/20 outline-none focus:border-brand-medium text-sm text-brand-darkest dark:text-white"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className="w-full bg-white dark:bg-slate-950 p-4 rounded-2xl border border-brand-light/20 outline-none focus:border-brand-medium text-sm text-brand-darkest dark:text-white"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">
                  Message
                </label>
                <textarea 
                  name="message"
                  required
                  className="w-full bg-white dark:bg-slate-950 p-4 rounded-3xl border border-brand-light/20 outline-none focus:border-brand-medium text-sm min-h-[140px] resize-none text-brand-darkest dark:text-white"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full h-14 bg-brand-medium text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-brand-darkest transition-all flex items-center justify-center gap-3"
              >
                Send Message <Send size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
