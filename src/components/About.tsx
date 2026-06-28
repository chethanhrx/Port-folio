'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, BookOpen, Terminal, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES, AI_TOOLS_LIST, CURRENTLY_LEARNING } from '../data/skills';

export default function About() {
  return (
    <section id="about" className="py-28 px-6 relative z-10 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4.5 py-1.5 rounded-full bg-[#0f1423] border border-cyan-500/30 text-accentCyan text-xs sm:text-sm font-mono font-bold mb-6 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-accentCyan animate-ping" />
          <span>Open to Full-time / Internship Opportunities</span>
        </motion.div>

        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
          Architecting Clean Systems <br />
          <span className="text-accentCyan">Before Writing Code</span>
        </h2>
        <p className="text-gray-400 max-w-2xl text-base sm:text-lg leading-relaxed">
          My engineering philosophy revolves around system architecture first—designing resilient pipelines, clear microservices boundaries, and robust data schemas before typing implementation code.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left Column: Bio & Philosophy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-5 flex flex-col gap-8"
        >
          <div className="p-8 rounded-2xl bg-[#0f1423] border border-white/10 hover:border-accentCyan/50 transition-all duration-300 shadow-lg space-y-6">
            {/* Avatar Header */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-accentCyan p-[1px] flex-shrink-0 shadow-glow-cyan">
                <div className="w-full h-full bg-[#06080f] rounded-[11px] flex items-center justify-center text-white font-black text-xl font-mono">
                  CH
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Chethan Kumar H R</h3>
                <p className="text-xs font-mono text-accentCyan font-semibold">Java Full Stack Engineer</p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
              I am a Bachelor of Computer Applications (BCA) graduate mastering high-concurrency Java Full Stack Development at <span className="text-white font-bold bg-white/5 px-2 py-0.5 rounded border border-white/10">JSpiders, Bangalore</span>.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              With deep specialization in <span className="text-white font-medium">Java, Spring Boot, REST APIs, Microservices, React, PostgreSQL, Kafka, Redis, and Elasticsearch</span>, I build systems designed to scale under load.
            </p>

            <div className="pt-6 border-t border-white/5 space-y-3">
              <div className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                <CheckCircle2 size={18} className="text-accentCyan flex-shrink-0" />
                <span>Architecture-First System Design</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                <CheckCircle2 size={18} className="text-accentCyan flex-shrink-0" />
                <span>Asynchronous Messaging & Low Latency Caching</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-300 font-medium">
                <CheckCircle2 size={18} className="text-accentCyan flex-shrink-0" />
                <span>Reactive Frontend & AI Model Integration</span>
              </div>
            </div>
          </div>

          {/* Currently Learning Banner */}
          <div className="p-6 rounded-2xl bg-[#0f1423] border border-white/10 flex items-center gap-4 shadow-md">
            <div className="p-3.5 rounded-xl bg-cyan-500/10 text-accentCyan flex-shrink-0">
              <BookOpen size={22} />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-accentCyan font-bold block mb-1">
                Currently Exploring & Deepening
              </span>
              <p className="text-sm font-bold text-white leading-snug">
                {CURRENTLY_LEARNING.join(' • ')}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Tech Stack Grid */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-[#0f1423] border border-white/10 hover:border-accentCyan/50 transition-all duration-300 shadow-lg flex flex-col justify-between"
            >
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider font-bold mb-5 flex items-center gap-2.5 text-accentCyan">
                  <Terminal size={18} />
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-medium text-gray-200 hover:border-cyan-500/30 hover:text-accentCyan transition-all cursor-default"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>

      {/* AI Tools Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 sm:p-10 rounded-2xl bg-[#0f1423] border border-white/10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-8"
      >
        <div className="flex items-center gap-5 text-center md:text-left">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-accentCyan flex-shrink-0">
            <Sparkles size={24} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-white mb-1">
              AI-Supercharged Development Workflow
            </h4>
            <p className="text-sm text-gray-400">
              Leveraging intelligent autonomous coding assistants for prototyping & code velocity.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {AI_TOOLS_LIST.map((tool, idx) => (
            <span
              key={idx}
              className="px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-sm font-bold text-gray-200 hover:border-accentCyan hover:text-accentCyan transition-all duration-300"
            >
              ⚡ {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
