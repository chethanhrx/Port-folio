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
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden z-10">
      
      {/* Subtle ambient light glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />

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
            className="inline-flex items-center gap-2.5 px-4.5 py-2 rounded-full bg-[#0f1423] border border-cyan-500/30 text-accentCyan text-xs sm:text-sm font-medium mb-8 shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-accentCyan animate-ping" />
            <Sparkles size={15} />
            <span className="tracking-wide">Write code that speaks for itself.</span>
          </motion.div>

          {/* Clean Big Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-[1.05] mb-6"
          >
            Chethan Kumar <br />
            <span className="text-accentCyan">H R</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-2xl font-semibold text-gray-300 max-w-2xl mb-8 leading-relaxed font-mono flex flex-wrap items-center gap-2.5"
          >
            <span>Java Full Stack Developer</span>
            <span className="text-accentCyan font-bold">•</span>
            <span className="text-white font-bold">Spring Boot</span>
            <span className="text-accentCyan font-bold">•</span>
            <span className="text-gray-300">React & Microservices</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-gray-400 text-base sm:text-lg max-w-xl mb-10 leading-relaxed">
            Architecture-first engineer crafting high-throughput distributed systems, resilient messaging pipelines, and clean AI-integrated web applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href="#projects"
              className="px-8 py-4 rounded-xl bg-accentCyan hover:bg-cyan-300 text-black font-extrabold text-base shadow-glow-cyan transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-0.5"
            >
              <span>Explore Featured Work</span>
              <ArrowDown size={18} />
            </a>
          </motion.div>

          {/* Social Icon Strip */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-gray-500 font-mono font-bold mr-2">
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
                  className="w-11 h-11 rounded-xl bg-[#0f1423] border border-white/10 flex items-center justify-center text-gray-400 hover:text-accentCyan hover:border-accentCyan/50 transition-all duration-300 transform hover:-translate-y-1 shadow-sm"
                >
                  <Icon size={20} />
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
            className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full flex items-center justify-center group cursor-pointer"
          >
            {/* Spinning Outer Ring */}
            <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/30 animate-spin-slow group-hover:border-accentCyan transition-colors" />
            
            {/* Circular Text SVG */}
            <svg className="w-full h-full animate-spin-slow p-3" viewBox="0 0 100 100">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[9.5px] font-mono tracking-[0.28em] uppercase fill-gray-400 font-bold group-hover:fill-accentCyan transition-colors">
                <textPath xlinkHref="#circlePath">
                  Explore Projects • View Architecture • Chethan HR •
                </textPath>
              </text>
            </svg>

            {/* Center Glowing Icon */}
            <div className="absolute w-24 h-24 rounded-full bg-[#0f1423] border border-cyan-500/50 flex items-center justify-center text-accentCyan shadow-glow-cyan group-hover:scale-105 group-hover:bg-accentCyan group-hover:text-black transition-all duration-300">
              <ExternalLink size={28} />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
