'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, BookOpen, Terminal, Sparkles } from 'lucide-react';
import { SKILL_CATEGORIES, AI_TOOLS_LIST, CURRENTLY_LEARNING } from '../data/skills';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white/[0.04] backdrop-blur-md border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-mono font-extrabold mb-6"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Open to Full-time / Internship Opportunities</span>
        </motion.div>

        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
          Architecting Clean Systems <br />
          <span className="galaxy-text">Before Writing Code</span>
        </h2>
        <p className="text-white/40 max-w-2xl text-base sm:text-lg leading-relaxed font-medium">
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
          <div className="p-8 rounded-3xl glass-card backdrop-blur-2xl hover:border-cyan-500/20 transition-all duration-500 space-y-6">
            {/* Avatar Header */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-600 p-[2px] flex-shrink-0 shadow-glow-cyan">
                <div className="w-full h-full bg-black rounded-[14px] flex items-center justify-center text-cyan-400 font-black text-2xl font-mono">
                  CH
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-white tracking-tight">Chethan Kumar H R</h3>
                <p className="text-xs font-mono text-cyan-400 font-bold">Java Full Stack Engineer</p>
              </div>
            </div>

            <p className="text-white/70 leading-relaxed text-sm sm:text-base font-semibold">
              I am a Bachelor of Computer Applications (BCA) graduate mastering high-concurrency Java Full Stack Development at <span className="text-cyan-400 font-extrabold bg-cyan-500/10 px-2.5 py-1 rounded-lg border border-cyan-500/20">JSpiders, Bangalore</span>.
            </p>
            <p className="text-white/50 leading-relaxed text-sm sm:text-base font-medium">
              With deep specialization in <span className="text-white font-bold">Java, Spring Boot, REST APIs, Microservices, React, PostgreSQL, Kafka, Redis, and Elasticsearch</span>, I build systems designed to scale seamlessly under heavy enterprise load.
            </p>

            <div className="pt-6 border-t border-white/5 space-y-3.5">
              <div className="flex items-center gap-3 text-sm text-white/80 font-bold">
                <CheckCircle2 size={18} className="text-cyan-400 flex-shrink-0" />
                <span>Architecture-First System Design</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80 font-bold">
                <CheckCircle2 size={18} className="text-cyan-400 flex-shrink-0" />
                <span>Asynchronous Messaging & Low Latency Caching</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/80 font-bold">
                <CheckCircle2 size={18} className="text-cyan-400 flex-shrink-0" />
                <span>Reactive Frontend & AI Model Integration</span>
              </div>
            </div>
          </div>

          {/* Currently Learning Banner */}
          <div className="p-7 rounded-3xl glass-card flex items-center gap-4 hover:border-cyan-500/20 transition-all duration-300">
            <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-400 flex-shrink-0">
              <BookOpen size={24} />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-extrabold block mb-1">
                Currently Exploring & Deepening
              </span>
              <p className="text-sm font-extrabold text-white leading-snug">
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
              className="p-7 rounded-3xl glass-card glass-card-hover transition-all duration-500 flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider font-extrabold mb-5 flex items-center gap-2.5 text-cyan-400">
                  <Terminal size={18} className="group-hover:scale-110 transition-transform" />
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs sm:text-sm font-bold text-white/70 hover:border-cyan-500/30 hover:text-cyan-400 transition-all cursor-default"
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

      {/* AI Tools Glass Ribbon */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 sm:p-10 rounded-3xl glass-card border-cyan-500/10 hover:border-cyan-500/20 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden transition-all duration-500"
      >
        <div className="flex items-center gap-5 text-center md:text-left relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 flex-shrink-0">
            <Sparkles size={28} />
          </div>
          <div>
            <h4 className="text-2xl font-black text-white mb-1.5 tracking-tight">
              AI-Supercharged Development Workflow
            </h4>
            <p className="text-sm text-white/40 font-medium">
              Leveraging intelligent autonomous coding assistants for prototyping & exponential code velocity.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 relative z-10">
          {AI_TOOLS_LIST.map((tool, idx) => (
            <span
              key={idx}
              className="px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-xs sm:text-sm font-extrabold text-cyan-400 hover:bg-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300"
            >
              {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
