"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  // ফর্ম সাবমিট হ্যান্ডলার (অ্যাডভান্সড কাজের জন্য)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message feature coming soon! You can email me directly.");
  };

  return (
    <section id="contact" className="py-28 bg-base-100 px-6 lg:px-24 border-t border-base-content/5 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[120px] -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Side: Text & Socials */}
          <div className="space-y-12">
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl md:text-7xl font-bold tracking-tighter leading-none mb-6"
              >
                Let’s <br />
                <span className="text-primary italic font-serif">Talk.</span>
              </motion.h2>
              <p className="text-sm font-medium opacity-50 max-w-sm leading-relaxed">
                I'm currently looking for new opportunities and collaborations. Reach out to me!
              </p>
            </div>

            <div className="space-y-8">
               <div className="group flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-30">Email Me</p>
                    <a href="mailto:allmostakim13@gmail.com" className="text-lg font-bold hover:text-primary transition-colors">allmostakim13@gmail.com</a>
                  </div>
               </div>

               <div className="group flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-base-200 text-base-content opacity-50">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest opacity-30">Location</p>
                    <p className="text-lg font-bold">Dhaka, Bangladesh</p>
                  </div>
               </div>

               <div className="pt-6 flex gap-2">
                  <a href="https://github.com/mostakim8" target="_blank" rel="noreferrer" className="p-4 rounded-2xl bg-base-200 hover:bg-base-content hover:text-base-100 transition-all">
                    <Github size={20} />
                  </a>
                  <a href="https://linkedin.com/in/all-mostakim/" target="_blank" rel="noreferrer" className="p-4 rounded-2xl bg-base-200 hover:bg-[#0077b5] hover:text-white transition-all">
                    <Linkedin size={20} />
                  </a>
               </div>
            </div>
          </div>

          {/* Right Side: Clean Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 bg-base-200/40 backdrop-blur-xl rounded-[2.5rem] border border-base-content/5 shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-30 ml-2">Name</label>
                  <input type="text" required placeholder="Full Name" className="w-full bg-base-100/50 p-4 rounded-2xl border-none outline-none focus:ring-2 focus:ring-primary/20 text-sm" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest opacity-30 ml-2">Email</label>
                  <input type="email" required placeholder="email@example.com" className="w-full bg-base-100/50 p-4 rounded-2xl border-none outline-none focus:ring-2 focus:ring-primary/20 text-sm" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest opacity-30 ml-2">Message</label>
                <textarea required placeholder="Tell me about your project..." className="w-full bg-base-100/50 p-4 rounded-3xl border-none outline-none focus:ring-2 focus:ring-primary/20 text-sm min-h-[150px] resize-none"></textarea>
              </div>

              <button type="submit" className="w-full h-14 bg-primary text-white rounded-2xl font-black uppercase tracking-widest text-xs hover:scale-[1.02] transition-all flex items-center justify-center gap-3">
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