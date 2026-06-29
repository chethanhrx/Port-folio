'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Code2, Send, Mail, Sparkles, ExternalLink } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-36 pb-24 px-6 overflow-hidden z-10">
      
      {/* Subtle ambient light luxury glow */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-violet-500/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Column - Main Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="lg:col-span-8 flex flex-col items-start text-left"
        >
          {/* Tagline Pill */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white border border-blue-500/30 text-blue-600 text-xs sm:text-sm font-bold mb-8 shadow-[0_4px_20px_rgba(37,99,235,0.08)] backdrop-blur-md"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
            <Sparkles size={16} className="text-blue-600" />
            <span className="tracking-wide text-slate-800">Write code that speaks for itself.</span>
          </motion.div>

          {/* Clean Big Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-slate-900 leading-[1.05] mb-6"
          >
            Chethan Kumar <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">H R</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-2xl font-bold text-slate-600 max-w-2xl mb-8 leading-relaxed font-mono flex flex-wrap items-center gap-2.5"
          >
            <span>Java Full Stack Developer</span>
            <span className="text-blue-600 font-extrabold">•</span>
            <span className="text-slate-900 font-extrabold">Spring Boot</span>
            <span className="text-blue-600 font-extrabold">•</span>
            <span className="text-slate-600">React & Microservices</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-slate-500 text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-medium">
            Architecture-first engineer crafting high-throughput distributed systems, resilient messaging pipelines, and clean AI-integrated web applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-base shadow-glow-cyan transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1"
            >
              <span>Explore Featured Work</span>
              <ArrowDown size={18} />
            </a>
          </motion.div>

          {/* Social Icon Strip */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-slate-400 font-mono font-extrabold mr-2">
              Connect:
            </span>
            {[
              { icon: Github, href: 'https://github.com/chethanhrx', label: 'GitHub' },
              { icon: Code2, href: 'https://leetcode.com/u/chethank_hr/', label: 'LeetCode' },
              { icon: Send, href: 'https://t.me/chethank_hr', label: 'Telegram' },
              { icon: Mail, href: 'mailto:chethankumarhr751@gmail.com', label: 'Email' }
            ].map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-2xl bg-white border border-slate-200/80 flex items-center justify-center text-slate-600 hover:text-blue-600 hover:border-blue-500/50 hover:bg-blue-50/50 transition-all duration-300 transform hover:-translate-y-1 shadow-[0_4px_15px_rgba(0,0,0,0.03)]"
                >
                  <Icon size={22} />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Right Column - Spinning Badge Element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="lg:col-span-4 flex items-center justify-center relative mt-12 lg:mt-0"
        >
          <a
            href="#projects"
            className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full flex items-center justify-center group cursor-pointer"
          >
            {/* Spinning Outer Ring */}
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-blue-400/40 animate-spin-slow group-hover:border-blue-600 transition-colors" />
            
            {/* Circular Text SVG */}
            <svg className="w-full h-full animate-spin-slow p-3" viewBox="0 0 100 100">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[9px] font-mono tracking-[0.28em] uppercase fill-slate-500 font-extrabold group-hover:fill-blue-600 transition-colors">
                <textPath xlinkHref="#circlePath">
                  Explore Projects • View Architecture • Chethan HR •
                </textPath>
              </text>
            </svg>

            {/* Center Glowing Icon */}
            <div className="absolute w-28 h-28 rounded-3xl bg-white border border-blue-500/40 flex items-center justify-center text-blue-600 shadow-glow-cyan group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 group-hover:text-white transition-all duration-300">
              <ExternalLink size={32} />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
