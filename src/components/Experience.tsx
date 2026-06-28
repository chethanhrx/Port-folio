'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Clock } from 'lucide-react';
import { TIMELINE_DATA } from '../data/timeline';

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative z-10 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f1423] border border-cyan-500/30 text-accentCyan text-xs font-mono uppercase tracking-widest mb-6 shadow-sm">
          <Clock size={15} />
          <span className="font-bold">Professional Milestones</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
          Experience & <br />
          <span className="text-accentCyan">Academic Timeline</span>
        </h2>
        <p className="text-gray-400 max-w-xl text-base sm:text-lg leading-relaxed">
          A scroll-triggered trajectory of my formal architectural training and real-world freelance engineering deployments.
        </p>
      </div>

      <div className="relative border-l border-white/15 ml-4 sm:ml-32 md:ml-48 space-y-12">
        {TIMELINE_DATA.map((item, idx) => {
          const isEducation = item.type === 'education';
          const Icon = isEducation ? GraduationCap : Briefcase;

          return (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              key={idx}
              className="relative pl-8 sm:pl-12 group"
            >
              {/* Timeline Icon */}
              <div
                className="absolute -left-[21px] top-1 w-10 h-10 rounded-xl bg-[#0f1423] border border-cyan-500/40 flex items-center justify-center text-accentCyan group-hover:bg-accentCyan group-hover:text-black transition-all shadow-md z-10"
              >
                <Icon size={18} className="stroke-[2.5]" />
              </div>

              {/* Year Stamp for Desktop on Left side */}
              <div className="hidden md:block absolute -left-48 top-2 text-right w-36 font-mono text-sm font-bold text-accentCyan">
                {item.year}
              </div>

              {/* Card Container */}
              <div className="p-7 rounded-2xl bg-[#0f1423] border border-white/10 group-hover:border-accentCyan/50 transition-all duration-300 shadow-lg transform group-hover:-translate-y-1 space-y-3">
                {/* Mobile Year Badge */}
                <span className="md:hidden inline-block px-3 py-1 rounded bg-white/5 border border-white/10 text-accentCyan font-mono text-xs font-bold mb-1">
                  {item.year}
                </span>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-accentCyan transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono uppercase tracking-wider text-gray-300 font-bold bg-white/5 px-3 py-1 rounded border border-white/10 self-start sm:self-auto">
                    {item.company}
                  </span>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed pt-1">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
