'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Code, Sparkles, ChevronDown } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#141213] pt-32 pb-20 md:py-0 flex items-center justify-center overflow-hidden bg-grain z-10"
    >
      {/* Editorial High-Craft Grid & Ambient Drifting Spheres */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffebd306_1px,transparent_1px),linear-gradient(to_bottom,#ffebd306_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)] pointer-events-none z-0" />
      <div className="absolute top-1/4 left-6 md:left-1/4 w-[420px] h-[420px] rounded-full bg-[#FFB6A6]/10 blur-[140px] pointer-events-none z-0" aria-hidden="true" />
      <div className="absolute bottom-1/3 right-6 md:right-1/4 w-[480px] h-[480px] rounded-full bg-[#9BCEC1]/10 blur-[160px] pointer-events-none z-0" aria-hidden="true" />

      {/* Technical Crosshairs */}
      <div className="absolute top-28 left-[12%] text-[#FFEBD3]/30 font-mono text-xl select-none pointer-events-none z-0 hidden md:block" aria-hidden="true">+</div>
      <div className="absolute top-1/3 right-[15%] text-[#FFB6A6]/50 font-mono text-2xl select-none pointer-events-none z-0 hidden md:block" aria-hidden="true">+</div>
      <div className="absolute bottom-1/4 left-[20%] text-[#67A2C5]/40 font-mono text-xl select-none pointer-events-none z-0 hidden md:block" aria-hidden="true">+</div>

      {/* Editorial Grid */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        
        {/* Left Column: Solid Editorial Typography & Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Subtle Studio Tagline Pill (Mint-Teal #9BCEC1 border & text) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#181617] border border-[#9BCEC1]/40 rounded-sm w-fit mb-6 shadow-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#FFB6A6]" />
            <span className="font-mono text-xs text-[#9BCEC1] tracking-widest uppercase font-extrabold">
              ENGINEERING ARCHITECT // JAVA FULL STACK
            </span>
          </motion.div>

          {/* Master Headline (Beige #FFEBD3 & Peach #FFB6A6 Contrast) */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
            className="font-black text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] leading-[0.9] tracking-tighter text-[#FFEBD3] mb-6 uppercase"
          >
            Systems That <br />
            <span className="text-[#FFB6A6] select-none hover:text-[#9BCEC1] transition-colors duration-300">Never Break</span> — <br />
            Built For Scale.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            className="text-[#FFEBD3]/85 text-lg md:text-xl font-normal leading-relaxed max-w-xl mb-10"
          >
            I architect fault-tolerant backend microservices, high-concurrency event streams, and reactive full-stack applications with absolute precision and zero runtime bloat.
          </motion.p>

          {/* Solid Rectangular Action Buttons (Ortex Studio Craft) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap items-center gap-5"
          >
            {/* Primary Solid Rectangular CTA (#FFB6A6 Peach block with dark text) */}
            <button
              onClick={() => handleScrollTo('projects')}
              className="group inline-flex items-center gap-2.5 px-8 py-4.5 bg-[#FFB6A6] hover:bg-[#FFEBD3] text-[#141213] font-black tracking-wider uppercase rounded-sm transition-all duration-300 transform hover:-translate-y-0.5 shadow-xl shadow-[#FFB6A6]/20 cursor-pointer text-sm"
            >
              Explore Featured Works
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </button>

            {/* Secondary Solid Outline CTA (#67A2C5 Blue outline) */}
            <button
              onClick={() => handleScrollTo('contact')}
              className="group inline-flex items-center gap-2.5 px-8 py-4.5 border border-[#67A2C5]/50 hover:border-[#67A2C5] hover:bg-[#67A2C5]/15 text-[#FFEBD3] font-black tracking-wider uppercase rounded-sm transition-all duration-300 cursor-pointer text-sm"
            >
              Start Engineering Dialogue
              <Code className="w-4 h-4 text-[#67A2C5]" />
            </button>
          </motion.div>

          {/* Editorial Specs Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-16 pt-8 border-t border-[#262223] grid grid-cols-3 gap-6"
          >
            <div>
              <span className="block font-mono text-[10px] text-[#FFB6A6] uppercase tracking-widest font-extrabold mb-1">// THROUGHPUT</span>
              <span className="font-black text-lg md:text-xl text-[#FFEBD3]">100k+ Req/Sec</span>
            </div>
            <div>
              <span className="block font-mono text-[10px] text-[#9BCEC1] uppercase tracking-widest font-extrabold mb-1">// LATENCY</span>
              <span className="font-black text-lg md:text-xl text-[#FFEBD3]">&lt; 12ms (p99)</span>
            </div>
            <div>
              <span className="block font-mono text-[10px] text-[#67A2C5] uppercase tracking-widest font-extrabold mb-1">// RELIABILITY</span>
              <span className="font-black text-lg md:text-xl text-[#FFEBD3]">99.99% Uptime</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Sculptural Peach Monogram Card Block (#FFB6A6 with dark #141213 typography) */}
        <div className="lg:col-span-5 h-[400px] lg:h-[550px] w-full relative flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94, rotate: 1.5 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: [-1, 0.5, -1],
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 1, delay: 0.2, ease: 'easeOut' },
              scale: { duration: 1, delay: 0.2, ease: 'easeOut' },
              rotate: { duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
              y: { duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1.2 },
            }}
            className="relative w-full h-full bg-[#FFB6A6] rounded-2xl p-8 flex flex-col justify-between shadow-2xl overflow-hidden bg-grain select-none group border border-[#FFEBD3]/50 text-[#141213]"
          >
            {/* Animated Light Sweep / Sheen */}
            <motion.div
              animate={{ x: ['-100%', '200%'] }}
              transition={{
                duration: 4.5,
                repeat: Infinity,
                repeatDelay: 5,
                ease: 'easeInOut',
              }}
              className="absolute top-0 bottom-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 pointer-events-none z-0"
            />

            {/* Design accents */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#FFEBD3]/20 rounded-full blur-2xl -mr-16 -mt-16 pointer-events-none" />

            {/* Top accent */}
            <div className="flex justify-between items-start z-10">
              <span className="font-mono text-xs text-[#141213] font-black uppercase tracking-wider">
                EST // 2026 • JAVA FULL STACK
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-[#141213] animate-pulse shadow-[0_0_10px_#141213]" />
            </div>

            {/* Giant Center Monogram Branding Display */}
            <div className="flex flex-col items-center justify-center py-10 z-10">
              <div className="w-36 h-36 rounded-3xl bg-[#141213] border-2 border-[#9BCEC1]/40 flex flex-col items-center justify-center shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <span className="font-mono font-black text-5xl tracking-tighter text-[#FFEBD3]">CH</span>
                <span className="font-mono text-[9px] text-[#FFB6A6] font-extrabold tracking-widest uppercase mt-1">
                  ARCHITECT
                </span>
              </div>
              <span className="font-mono text-xs text-[#141213] font-black tracking-[0.25em] uppercase mt-6 block">
                CHETHAN KUMAR H R
              </span>
              <span className="text-xs text-[#141213]/85 font-extrabold mt-1">
                High-Concurrency Backend Engineering
              </span>
            </div>

            {/* Solid Card Footer */}
            <div className="flex justify-between items-end border-t border-[#141213]/25 pt-4 z-10">
              <div>
                <span className="block text-[10px] font-mono text-[#141213]/70 uppercase tracking-widest font-black">
                  LOCATION
                </span>
                <span className="text-sm font-black text-[#141213]">
                  Bangalore // Remote
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[10px] font-mono text-[#141213]/70 uppercase tracking-widest font-black">
                  CORE SPECIALTY
                </span>
                <span className="text-sm font-black text-[#141213]">
                  Microservices & Kafka
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Decorative vertical coordinates */}
      <div className="absolute left-6 bottom-12 hidden xl:block font-mono text-xs text-[#FFEBD3]/40 tracking-widest font-bold [writing-mode:vertical-lr]">
        CO-ORDINATES: 12.9716° N, 77.5946° E
      </div>
      <div className="absolute right-6 bottom-12 hidden xl:block font-mono text-xs text-[#FFEBD3]/40 tracking-widest font-bold [writing-mode:vertical-lr]">
        ARCHITECTURE // VOL. I
      </div>

      {/* Arrow down page scroll suggestion */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => handleScrollTo('about')}
          className="p-2 text-[#FFEBD3] hover:text-[#FFB6A6] transition-colors duration-200"
          aria-label="Scroll Down"
        >
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
