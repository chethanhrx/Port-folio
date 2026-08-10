'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Github, Mail, Linkedin } from 'lucide-react';
import LeetCodeStats from './LeetCodeStats';
import GithubStat from './GithubStat';

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
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden bg-[#FAFAFA]"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[120px] opacity-60 -mr-48 -mt-48 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[100px] opacity-50 -ml-48 -mb-48 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        <div className="lg:col-span-7">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-green-50 border border-green-200 rounded-full mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-medium text-green-700">
              Available for full-time opportunities
            </span>
          </motion.div>

          {/* Name & Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] tracking-tight mb-6 whitespace-nowrap"
          >
            Chethan Kumar H R
            <span className="text-accent">.</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-500 leading-relaxed max-w-2xl mb-10 font-normal"
          >
            Java Full Stack Developer & System Architect specializing in Spring Boot microservices, 
            high-concurrency backends, and scalable distributed systems. 
            Founder of <span className="text-gray-700 font-medium">PactViz</span>.
          </motion.h2>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => handleScrollTo('projects')}
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-lg transition-all cursor-pointer shadow-sm"
            >
              View My Work
              <ArrowDown size={15} />
            </button>

            <button
              onClick={() => handleScrollTo('contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-gray-300 hover:border-gray-400 bg-white hover:bg-gray-50 text-gray-700 text-sm font-medium rounded-lg transition-all cursor-pointer"
            >
              <Mail size={15} />
              Get In Touch
            </button>

            <a
              href="https://github.com/chethanhrx"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-gray-500 hover:text-gray-900 text-sm font-medium transition-colors"
            >
              <Github size={18} />
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/chethan-kumar-h-r-648bab33a"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 text-gray-500 hover:text-[#0A66C2] text-sm font-medium transition-colors"
            >
              <Linkedin size={18} />
              LinkedIn
            </a>
          </motion.div>

          {/* Quick summary stats — simple, no jargon */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-10 sm:mt-20 pt-8 border-t border-gray-200 flex flex-wrap gap-x-12 gap-y-8"
          >
            <GithubStat />
            <div>
              <span className="block text-2xl font-bold text-gray-900">3+</span>
              <span className="text-sm text-gray-500">Years Experience</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-gray-900">BCA</span>
              <span className="text-sm text-gray-500">Graduate</span>
            </div>
            <div>
              <span className="block text-2xl font-bold text-gray-900">Bangalore</span>
              <span className="text-sm text-gray-500">Based, Open to Remote</span>
            </div>
            <LeetCodeStats username="chethank_hr" />
          </motion.div>
        </div>

        {/* Right: Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="lg:col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-gray-100 shadow-xl">
              <Image
                src="/chethanimage.jpg"
                alt="Chethan Kumar H R"
                width={320}
                height={320}
                className="w-full h-full object-cover"
                priority
              />
            </div>
            {/* Subtle decorative ring */}
            <div className="absolute -inset-3 rounded-full border border-gray-200/60 pointer-events-none" />
          </div>
        </motion.div>
        </div>
      </div>
    </section>
  );
}
