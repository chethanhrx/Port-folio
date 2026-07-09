'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Clock } from 'lucide-react';
import { TIMELINE_DATA } from '../data/timeline';

export default function Experience() {
  return (
    <section id="experience" className="py-28 px-6 relative z-10 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-20 relative border-b border-[#262223] pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-[#181617] border border-[#9BCEC1]/40 text-[#9BCEC1] text-xs font-mono font-black uppercase tracking-widest mb-6 shadow-sm">
          <Clock size={14} className="text-[#FFB6A6]" />
          <span>CAREER TRAJECTORY // MILESTONES</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-[#FFEBD3] tracking-tight mb-6 uppercase">
          Experience & <br />
          <span className="text-[#FFB6A6]">Academic Timeline</span>
        </h2>
        <p className="text-[#FFEBD3]/75 max-w-xl text-base sm:text-lg leading-relaxed font-normal">
          A scroll-triggered trajectory of my formal architectural training and real-world high-concurrency engineering deployments.
        </p>
      </div>

      {/* Solid Architectural Timeline */}
      <div className="relative border-l border-[#262223] ml-4 sm:ml-32 md:ml-48 space-y-12">
        {TIMELINE_DATA.map((item, idx) => {
          const isEducation = item.type === 'education';
          const Icon = isEducation ? GraduationCap : Briefcase;

          return (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={idx}
              className="relative pl-8 sm:pl-12 group"
            >
              {/* Timeline Icon Badge */}
              <div className="absolute -left-[21px] top-1 w-11 h-11 rounded-sm bg-[#141213] border border-[#9BCEC1]/60 flex items-center justify-center text-[#9BCEC1] group-hover:bg-[#FFB6A6] group-hover:text-[#141213] group-hover:border-[#FFB6A6] group-hover:scale-110 transition-all duration-300 shadow-md z-10">
                <Icon size={18} className="stroke-[2.5]" />
              </div>

              {/* Year Stamp for Desktop on Left side */}
              <div className="hidden md:block absolute -left-48 top-2 text-right w-36 font-mono text-sm font-black text-[#67A2C5] tracking-widest uppercase">
                [{item.year}]
              </div>

              {/* Solid Card Container */}
              <div className="p-8 rounded-sm bg-[#181617] border border-[#262223] group-hover:border-[#FFB6A6] group-hover:bg-[#1C1A1B] transition-all duration-500 shadow-2xl space-y-4">
                {/* Mobile Year Badge */}
                <span className="md:hidden inline-block px-3 py-1 rounded-sm bg-[#141213] border border-[#67A2C5]/40 text-[#67A2C5] font-mono text-xs font-black tracking-widest uppercase mb-1">
                  [{item.year}]
                </span>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#262223] pb-4">
                  <h3 className="text-xl font-black text-[#FFEBD3] tracking-tight group-hover:text-[#FFB6A6] transition-colors uppercase">
                    {item.title}
                  </h3>
                  <span className="text-xs font-mono uppercase tracking-wider text-[#141213] font-black bg-[#FFEBD3] px-3.5 py-1.5 rounded-sm self-start sm:self-auto shadow-sm">
                    {item.company}
                  </span>
                </div>

                <p className="text-[#FFEBD3]/80 text-sm sm:text-base leading-relaxed pt-1 font-normal">
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
