'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../data/skills';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white border-y border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-3 max-w-2xl">
            <span className="text-sm font-medium text-accent block">About Me</span>
            <time dateTime="2026-08-09" className="text-xs text-gray-400 font-medium">
              Last updated: August 2026
            </time>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-6">
            Chethan Kumar HR — Java Full Stack Developer.
          </h2>
          {/* AEO Direct Answer Block */}
          <p className="text-gray-900 font-medium max-w-2xl text-base sm:text-lg leading-relaxed mb-4">
            Chethan Kumar HR is a Java Full Stack Developer based in Bengaluru, India, and founder of the software agency PactViz.
          </p>
          <p className="text-gray-500 max-w-2xl text-base sm:text-lg leading-relaxed">
            I&apos;m a BCA graduate currently specializing in Java Full Stack Development at JSpiders, Bangalore. 
            With hands-on experience across backend microservices, distributed messaging, and reactive frontends, 
            I focus on writing clean, maintainable code that solves real problems.
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left: Bio details */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="space-y-5 text-gray-600 text-[15px] leading-relaxed">
              <p>
                My core expertise lies in <span className="text-gray-900 font-medium">Java, Spring Boot, REST APIs, and Microservices</span>, 
                complemented by frontend skills in <span className="text-gray-900 font-medium">React, Next.js, and TypeScript</span>.
              </p>
              <p>
                I work extensively with <span className="text-gray-900 font-medium">PostgreSQL, Kafka, Redis, and Elasticsearch</span> to 
                build backend systems designed for high throughput and low latency.
              </p>
              <p>
                As the founder of <span className="text-gray-900 font-medium">Ortex Studio</span>, I&apos;ve been freelancing since 2022, 
                delivering web applications and backend solutions for international clients with a focus on 
                clean architecture and long-term maintainability.
              </p>
            </div>

            {/* Key highlights */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-2xl font-bold text-gray-900 block">Java 21</span>
                <span className="text-sm text-gray-500">Primary Language</span>
              </div>
              <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                <span className="text-2xl font-bold text-gray-900 block">Spring Boot</span>
                <span className="text-sm text-gray-500">Core Framework</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Skills Grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {SKILL_CATEGORIES.map((category, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl bg-[#FAFAFA] border border-gray-100 hover:border-gray-200 transition-all duration-300"
                >
                  <h4 className="text-sm font-semibold text-gray-900 mb-4">
                    {category.title}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-xs font-medium text-gray-600 hover:text-accent hover:border-accent/30 transition-all"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
