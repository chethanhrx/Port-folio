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
      
      {/* Ambient nebula glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-purple-500/5 to-pink-500/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-purple-500/8 to-cyan-500/5 rounded-full blur-[150px] pointer-events-none" />

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
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/[0.04] border border-cyan-500/20 text-cyan-400 text-xs sm:text-sm font-bold mb-8 backdrop-blur-md"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            <Sparkles size={16} className="text-cyan-400" />
            <span className="tracking-wide text-white/80">Write code that speaks for itself.</span>
          </motion.div>

          {/* Clean Big Headline */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white leading-[1.05] mb-6"
          >
            Chethan Kumar <br />
            <span className="galaxy-text">H R</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.h2
            variants={itemVariants}
            className="text-lg sm:text-2xl font-bold text-white/50 max-w-2xl mb-8 leading-relaxed font-mono flex flex-wrap items-center gap-2.5"
          >
            <span>Java Full Stack Developer</span>
            <span className="text-cyan-400 font-extrabold">•</span>
            <span className="text-white font-extrabold">Spring Boot</span>
            <span className="text-cyan-400 font-extrabold">•</span>
            <span className="text-white/60">React & Microservices</span>
          </motion.h2>

          <motion.p variants={itemVariants} className="text-white/40 text-base sm:text-lg max-w-xl mb-10 leading-relaxed font-medium">
            Architecture-first engineer crafting high-throughput distributed systems, resilient messaging pipelines, and clean AI-integrated web applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-14">
            <a
              href="#projects"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-extrabold text-base shadow-glow-cyan transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1"
            >
              <span>Explore Featured Work</span>
              <ArrowDown size={18} />
            </a>
          </motion.div>

          {/* Social Icon Strip */}
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-white/30 font-mono font-extrabold mr-2">
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
                  className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/50 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300 transform hover:-translate-y-1"
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
            <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/20 animate-spin-slow group-hover:border-cyan-400/40 transition-colors" />
            
            {/* Circular Text SVG */}
            <svg className="w-full h-full animate-spin-slow p-3" viewBox="0 0 100 100">
              <path
                id="circlePath"
                d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                fill="none"
              />
              <text className="text-[9px] font-mono tracking-[0.28em] uppercase fill-white/30 font-extrabold group-hover:fill-cyan-400 transition-colors">
                <textPath xlinkHref="#circlePath">
                  Explore Projects • View Architecture • Chethan HR •
                </textPath>
              </text>
            </svg>

            {/* Center Glowing Icon */}
            <div className="absolute w-28 h-28 rounded-3xl bg-white/[0.05] border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-cyan-500 group-hover:to-purple-600 group-hover:text-white group-hover:shadow-glow-cyan transition-all duration-300">
              <ExternalLink size={32} />
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
}
