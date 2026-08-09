'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { TIMELINE_DATA } from '../data/timeline';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white border-y border-gray-100">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-sm font-medium text-accent mb-3 block">Experience</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-4">
            Background & education.
          </h2>
          <p className="text-gray-500 max-w-lg text-base leading-relaxed">
            My journey through education and professional work.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative ml-4 sm:ml-0">
          {/* Vertical line */}
          <div className="absolute left-[7px] sm:left-[7px] top-2 bottom-2 w-[1.5px] bg-gray-200" />

          <div className="space-y-10">
            {TIMELINE_DATA.map((item, idx) => {
              const isEducation = item.type === 'education';
              const Icon = isEducation ? GraduationCap : Briefcase;

              return (
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  key={idx}
                  className="relative pl-10 group"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-1 w-[15px] h-[15px] rounded-full bg-white border-2 border-gray-300 group-hover:border-accent transition-colors z-10" />

                  {/* Card */}
                  <div className="p-6 rounded-xl bg-[#FAFAFA] border border-gray-100 hover:border-gray-200 transition-all duration-300">
                    {/* Year & Type */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-accent bg-accent/10 px-2.5 py-1 rounded-full">
                        {item.year}
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
                        <Icon size={13} />
                        {isEducation ? 'Education' : 'Experience'}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <span className="text-sm font-medium text-gray-500 block mb-3">
                      {item.company}
                    </span>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
