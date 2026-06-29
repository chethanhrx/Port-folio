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
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-white border border-blue-500/30 text-blue-600 text-xs sm:text-sm font-mono font-extrabold mb-6 shadow-sm"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span>Open to Full-time / Internship Opportunities</span>
        </motion.div>

        <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-6">
          Architecting Clean Systems <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Before Writing Code</span>
        </h2>
        <p className="text-slate-500 max-w-2xl text-base sm:text-lg leading-relaxed font-medium">
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
          <div className="p-8 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 hover:border-blue-500/50 transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.04)] space-y-6">
            {/* Avatar Header */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 p-[2px] flex-shrink-0 shadow-md">
                <div className="w-full h-full bg-white rounded-[14px] flex items-center justify-center text-blue-600 font-black text-2xl font-mono">
                  CH
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-black text-slate-900 tracking-tight">Chethan Kumar H R</h3>
                <p className="text-xs font-mono text-blue-600 font-bold">Java Full Stack Engineer</p>
              </div>
            </div>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base font-medium">
              I am a Bachelor of Computer Applications (BCA) graduate mastering high-concurrency Java Full Stack Development at <span className="text-blue-700 font-extrabold bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200">JSpiders, Bangalore</span>.
            </p>
            <p className="text-slate-500 leading-relaxed text-sm sm:text-base font-medium">
              With deep specialization in <span className="text-slate-900 font-bold">Java, Spring Boot, REST APIs, Microservices, React, PostgreSQL, Kafka, Redis, and Elasticsearch</span>, I build systems designed to scale seamlessly under heavy enterprise load.
            </p>

            <div className="pt-6 border-t border-slate-100 space-y-3.5">
              <div className="flex items-center gap-3 text-sm text-slate-700 font-bold">
                <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" />
                <span>Architecture-First System Design</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700 font-bold">
                <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" />
                <span>Asynchronous Messaging & Low Latency Caching</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-700 font-bold">
                <CheckCircle2 size={18} className="text-blue-600 flex-shrink-0" />
                <span>Reactive Frontend & AI Model Integration</span>
              </div>
            </div>
          </div>

          {/* Currently Learning Banner */}
          <div className="p-7 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 flex items-center gap-4 shadow-sm hover:shadow-md transition-all">
            <div className="p-4 rounded-2xl bg-blue-50 text-blue-600 flex-shrink-0">
              <BookOpen size={24} />
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-extrabold block mb-1">
                Currently Exploring & Deepening
              </span>
              <p className="text-sm font-extrabold text-slate-900 leading-snug">
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
              className="p-7 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 hover:border-blue-500/50 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-md flex flex-col justify-between group transform hover:-translate-y-1"
            >
              <div>
                <h4 className="text-sm font-mono uppercase tracking-wider font-extrabold mb-5 flex items-center gap-2.5 text-blue-600">
                  <Terminal size={18} className="group-hover:scale-110 transition-transform" />
                  {category.title}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-3.5 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm font-bold text-slate-700 hover:border-blue-500/40 hover:text-blue-600 hover:bg-blue-50/50 transition-all cursor-default shadow-2xs"
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
        className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.3),transparent_50%)] pointer-events-none" />
        <div className="flex items-center gap-5 text-center md:text-left relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-blue-300 flex-shrink-0 shadow-inner">
            <Sparkles size={28} />
          </div>
          <div>
            <h4 className="text-2xl font-black text-white mb-1.5 tracking-tight">
              AI-Supercharged Development Workflow
            </h4>
            <p className="text-sm text-blue-200 font-medium">
              Leveraging intelligent autonomous coding assistants for prototyping & exponential code velocity.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2.5 relative z-10">
          {AI_TOOLS_LIST.map((tool, idx) => (
            <span
              key={idx}
              className="px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm font-extrabold text-white hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-sm"
            >
              ⚡ {tool}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
