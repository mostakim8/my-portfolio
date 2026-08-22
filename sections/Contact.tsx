"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Facebook, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 md:py-28 px-4 sm:px-6 lg:px-8 bg-slate-950 text-slate-100 transition-colors duration-500 overflow-hidden relative"
    >
      {/* Background Ambient Glow FX */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 -right-32 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 md:space-y-10">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-4 text-white"
              >
                Let’s <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 italic font-serif">
                  Talk.
                </span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-xs sm:text-sm md:text-base font-medium text-slate-400 max-w-md leading-relaxed"
              >
                I&apos;m currently looking for new opportunities and
                collaborations. Feel free to reach out to me!
              </motion.p>
            </div>

            {/* Contact Details */}
            <div className="space-y-5">
              {/* Email Card */}
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/40 transition-colors group shadow-lg"
              >
                <div className="p-3.5 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                  <Mail size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                    Email Me
                  </p>
                  <a
                    href="mailto:allmostakim13@gmail.com"
                    className="text-sm sm:text-base font-bold text-slate-200 hover:text-cyan-400 transition-colors"
                  >
                    allmostakim13@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Location Card */}
              <motion.div
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex items-center gap-4 p-4 rounded-2xl bg-slate-900/60 backdrop-blur-md border border-slate-800/80 hover:border-cyan-500/40 transition-colors group shadow-lg"
              >
                <div className="p-3.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-slate-300 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-slate-950 transition-all duration-300">
                  <MapPin size={22} />
                </div>
                <div>
                  <p className="text-[10px] font-mono font-bold uppercase tracking-widest text-slate-400">
                    Location
                  </p>
                  <p className="text-sm sm:text-base font-bold text-slate-200">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </motion.div>

              {/* Social Links */}
              <div className="flex items-center gap-3 pt-2">
                <a
                  href="https://www.facebook.com/your-profile"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg"
                  aria-label="Facebook Profile"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/all-mostakim/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-400 hover:text-white hover:bg-cyan-600 hover:border-cyan-400 hover:scale-110 active:scale-95 transition-all duration-300 shadow-lg"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 md:p-10 bg-slate-900/80 backdrop-blur-xl rounded-3xl border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.1)] relative"
          >
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-5"
            >
              <input
                type="hidden"
                name="access_key"
                value="194e64a2-84d1-4c4d-99c7-4192c1a89f4b"
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name Input */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 ml-1">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="your name"
                    className="w-full bg-slate-950/80 px-4 py-3.5 rounded-xl border border-slate-800 text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-xs sm:text-sm font-medium"
                  />
                </div>

                {/* Email Input */}
                <div className="space-y-1.5">
                  <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="abc@example.com"
                    className="w-full bg-slate-950/80 px-4 py-3.5 rounded-xl border border-slate-800 text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-xs sm:text-sm font-medium"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="space-y-1.5">
                <label className="text-[11px] font-mono font-bold uppercase tracking-wider text-cyan-400 ml-1">
                  Message
                </label>
                <textarea
                  name="message"
                  required
                  placeholder="Tell me about your project..."
                  className="w-full bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-slate-100 placeholder-slate-600 outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all text-xs sm:text-sm font-medium min-h-[140px] resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full h-12 sm:h-14 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black uppercase tracking-wider text-xs sm:text-sm rounded-xl transition-all duration-300 flex items-center justify-center gap-2.5 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] active:scale-98 group"
              >
                Send Message
                <Send
                  size={16}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
