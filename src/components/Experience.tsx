'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Clock } from 'lucide-react';
import { TIMELINE_DATA } from '../data/timeline';

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative z-10 max-w-5xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.04] border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6">
          <Clock size={16} />
          <span className="font-extrabold">Professional Milestones</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
          Experience & <br />
          <span className="galaxy-text">Academic Timeline</span>
        </h2>
        <p className="text-white/40 max-w-xl text-base sm:text-lg leading-relaxed font-medium">
          A scroll-triggered trajectory of my formal architectural training and real-world freelance engineering deployments.
        </p>
      </div>

      <div className="relative border-l-2 border-cyan-500/20 ml-4 sm:ml-32 md:ml-48 space-y-12">
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
              <div className="absolute -left-[21px] top-1 w-11 h-11 rounded-2xl bg-black border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-600 group-hover:text-white group-hover:shadow-glow-cyan transition-all duration-300 z-10">
                <Icon size={20} className="stroke-[2.5]" />
              </div>

              {/* Year Stamp for Desktop on Left side */}
              <div className="hidden md:block absolute -left-48 top-2 text-right w-36 font-mono text-base font-extrabold text-cyan-400">
                {item.year}
              </div>

              {/* Card Container */}
              <div className="p-8 rounded-3xl glass-card group-hover:border-cyan-500/20 transition-all duration-500 transform group-hover:-translate-y-1 space-y-3.5">
                {/* Mobile Year Badge */}
                <span className="md:hidden inline-block px-3.5 py-1 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs font-extrabold mb-1">
                  {item.year}
                </span>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <h3 className="text-xl font-black text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono uppercase tracking-wider text-white/60 font-extrabold bg-white/[0.04] px-3.5 py-1.5 rounded-xl border border-white/[0.08] self-start sm:self-auto">
                    {item.company}
                  </span>
                </div>

                <p className="text-white/40 text-sm sm:text-base leading-relaxed pt-1 font-medium">
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
