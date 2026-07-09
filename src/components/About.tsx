'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, BookOpen, Terminal, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES, AI_TOOLS_LIST, CURRENTLY_LEARNING } from '../data/skills';
import GravityCard from './GravityCard';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative z-10 bg-[#FFEBD3] text-[#141213] border-y border-[#141213] overflow-hidden shadow-2xl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-20 relative border-b border-[#141213]/20 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-sm bg-[#141213] text-[#FFEBD3] text-xs font-mono font-black mb-6 uppercase tracking-widest shadow-lg border border-[#141213]"
          >
            <span className="w-2 h-2 rounded-full bg-[#FFB6A6] animate-pulse" />
            <span>OPEN TO FULL-TIME // ARCHITECTURE DEPLOYMENTS</span>
          </motion.div>

          <h2 className="text-4xl sm:text-6xl font-black text-[#141213] tracking-tight mb-6 uppercase">
            Architecting Clean Systems <br />
            <span className="bg-[#FFB6A6] text-[#141213] px-4 py-1 rounded-sm inline-block mt-2 shadow-md">Before Writing Code</span>
          </h2>
          <p className="text-[#141213]/85 max-w-2xl text-base sm:text-lg leading-relaxed font-bold">
            My engineering philosophy revolves around system architecture first—designing resilient pipelines, clear microservices boundaries, and high-concurrency event streams before typing implementation code.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Bio & Philosophy Card (Dark high contrast on Cream White) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="p-8 sm:p-10 rounded-sm bg-[#141213] text-[#FFEBD3] border border-[#262223] hover:border-[#FFB6A6] transition-all duration-500 space-y-6 shadow-2xl">
              {/* Avatar Header */}
              <div className="flex items-center gap-4 border-b border-[#262223] pb-6">
                <div className="w-16 h-16 rounded-sm bg-[#FFB6A6] p-[2px] flex-shrink-0 shadow-lg">
                  <div className="w-full h-full bg-[#141213] flex items-center justify-center text-[#FFEBD3] font-black text-2xl font-mono">
                    CH
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black text-[#FFEBD3] tracking-tight uppercase">Chethan Kumar H R</h3>
                  <p className="text-xs font-mono text-[#9BCEC1] font-black tracking-wider uppercase">Ortex Founder & System Architect</p>
                </div>
              </div>

              <p className="text-[#FFEBD3]/90 leading-relaxed text-sm sm:text-base font-normal">
                I am a Bachelor of Computer Applications (BCA) graduate specializing in high-concurrency Java Full Stack Engineering at <span className="text-[#141213] font-black bg-[#FFB6A6] px-2.5 py-1 rounded-sm">JSpiders, Bangalore</span> and Founder of <span className="text-[#141213] font-black bg-[#9BCEC1] px-2.5 py-1 rounded-sm">Ortex Studio</span>.
              </p>
              <p className="text-[#FFEBD3]/80 leading-relaxed text-sm sm:text-base font-normal">
                With deep expertise in <span className="text-[#FFEBD3] font-black underline decoration-[#FFB6A6]">Java, Spring Boot, REST APIs, Microservices, React, PostgreSQL, Kafka, Redis, and Elasticsearch</span>, I engineer backend ecosystems built to withstand heavy enterprise traffic.
              </p>

              <div className="pt-6 border-t border-[#262223] space-y-3.5 font-mono text-xs">
                <div className="flex items-center gap-3 text-[#FFEBD3] font-bold">
                  <CheckCircle2 size={16} className="text-[#9BCEC1] flex-shrink-0" />
                  <span>Architecture-First System Design</span>
                </div>
                <div className="flex items-center gap-3 text-[#FFEBD3] font-bold">
                  <CheckCircle2 size={16} className="text-[#FFB6A6] flex-shrink-0" />
                  <span>Asynchronous Messaging & Low Latency I/O</span>
                </div>
                <div className="flex items-center gap-3 text-[#FFEBD3] font-bold">
                  <CheckCircle2 size={16} className="text-[#67A2C5] flex-shrink-0" />
                  <span>Reactive Frontend & Autonomous Pipeline Integration</span>
                </div>
              </div>
            </div>

            {/* Currently Learning Banner */}
            <div className="p-7 rounded-sm bg-[#141213] text-[#FFEBD3] border border-[#262223] flex items-center gap-4 hover:border-[#FFB6A6] transition-all duration-300 shadow-2xl">
              <div className="p-3.5 rounded-sm bg-[#181617] border border-[#FFB6A6]/40 text-[#FFB6A6] flex-shrink-0">
                <BookOpen size={20} />
              </div>
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-[#FFB6A6] font-black block mb-1">
                  Currently Exploring & Deepening
                </span>
                <p className="text-sm font-bold text-[#FFEBD3] leading-snug">
                  {CURRENTLY_LEARNING.join(' • ')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Tech Stack Grid (Dark high contrast on Cream White) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {SKILL_CATEGORIES.map((category, idx) => (
              <GravityCard
                key={idx}
                className="p-7 rounded-sm bg-[#141213] text-[#FFEBD3] border border-[#262223] hover:border-[#FFB6A6] transition-all duration-500 flex flex-col justify-between group shadow-2xl"
              >
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-widest font-black mb-5 flex items-center gap-2.5 text-[#9BCEC1] border-b border-[#262223] pb-3">
                    <Terminal size={16} className="text-[#FFB6A6]" />
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-sm bg-[#181617] border border-[#262223] text-xs font-mono font-bold text-[#FFEBD3]/90 hover:border-[#FFB6A6] hover:text-[#FFB6A6] transition-all uppercase"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </GravityCard>
            ))}
          </motion.div>

        </div>

        {/* AI Tools Ribbon */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 sm:p-10 rounded-sm bg-[#141213] text-[#FFEBD3] border border-[#262223] hover:border-[#FFB6A6] flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden transition-all duration-500 shadow-2xl"
        >
          <div className="flex items-center gap-5 text-center md:text-left relative z-10">
            <div className="w-14 h-14 rounded-sm bg-[#181617] border border-[#FFB6A6]/60 flex items-center justify-center text-[#FFB6A6] flex-shrink-0">
              <Sparkles size={24} />
            </div>
            <div>
              <h4 className="text-2xl font-black text-[#FFEBD3] mb-1.5 tracking-tight uppercase">
                AI-Supercharged Development Workflow
              </h4>
              <p className="text-sm text-[#FFEBD3]/80 font-normal">
                Leveraging intelligent autonomous coding assistants for prototyping & exponential code velocity.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 relative z-10">
            {AI_TOOLS_LIST.map((tool, idx) => (
              <span
                key={idx}
                className="px-4 py-2.5 rounded-sm bg-[#181617] border border-[#262223] text-xs font-mono font-black text-[#FFEBD3] hover:border-[#FFB6A6] hover:text-[#FFB6A6] transition-all duration-300 uppercase tracking-wider shadow-md"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
