'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, FileText, ArrowUpRight } from 'lucide-react';

export default function Resources() {
  const resources = [
    {
      title: 'NeuraMate Chess Bot System Design & Elo Calibration Guide',
      type: 'Architecture Write-up',
      description: 'An in-depth derivation of dual neural networks evaluating board positions and predicting opponent moves, tuned precisely to ~250 Elo thresholds.',
      link: 'https://github.com/chethanhrx/Neura-Mate',
      tag: 'AI Engineering',
    },
    {
      title: 'High-Throughput Threat Detection with Kafka & Elasticsearch',
      type: 'Case Study',
      description: 'How WatchTower processes high-volume telemetry packets with sub-second full text querying and Redis rate-limiting.',
      link: 'https://github.com/chethanhrx/Watch-Tower',
      tag: 'Microservices',
    },
    {
      title: 'Copy-on-Write Page Engine & ACID Snapshots for Relational Databases',
      type: 'Technical Note',
      description: 'How MergeBase brings Git-like branching, page-level deduplication, and zero-downtime rollbacks to MySQL and SQLite.',
      link: 'https://github.com/chethanhrx/mergebase',
      tag: 'Database Engine',
    }
  ];

  return (
    <section className="py-28 px-6 relative z-10 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16 relative border-b border-[#262223] pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-[#181617] border border-[#9BCEC1]/40 text-[#9BCEC1] text-xs font-mono uppercase tracking-widest font-black mb-6 shadow-sm">
          <BookOpen size={14} className="text-[#FFB6A6]" />
          <span>KNOWLEDGE BASE // ARCHITECTURE NOTES</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-[#FFEBD3] tracking-tight mb-6 uppercase">
          Featured Write-ups & <br />
          <span className="text-[#FFB6A6]">Technical Resources</span>
        </h2>
        <p className="text-[#FFEBD3]/75 max-w-xl text-base sm:text-lg leading-relaxed font-normal">
          Documenting software engineering decisions, algorithm derivations, and system design specifications.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((res, idx) => (
          <motion.a
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            key={idx}
            href={res.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-sm bg-[#181617] border border-[#262223] hover:border-[#FFB6A6] hover:bg-[#1C1A1B] transition-all duration-500 group flex flex-col justify-between shadow-2xl space-y-6"
          >
            <div>
              <div className="flex items-center justify-between mb-5 border-b border-[#262223] pb-4">
                <span className="px-3.5 py-1.5 rounded-sm bg-[#141213] text-[#9BCEC1] font-mono text-xs font-black uppercase tracking-wider border border-[#9BCEC1]/40">
                  {res.tag}
                </span>
                <FileText size={20} className="text-[#FFEBD3]/50 group-hover:text-[#FFB6A6] transition-colors" />
              </div>
              <h3 className="text-xl font-black text-[#FFEBD3] mb-3 group-hover:text-[#FFB6A6] transition-colors leading-snug tracking-tight uppercase">
                {res.title}
              </h3>
              <p className="text-[#FFEBD3]/80 text-sm leading-relaxed font-normal">
                {res.description}
              </p>
            </div>

            <div className="pt-5 border-t border-[#262223] flex items-center justify-between text-xs font-mono text-[#FFEBD3]/70 font-black uppercase tracking-wider">
              <span>[{res.type}]</span>
              <div className="flex items-center gap-1.5 text-[#67A2C5] group-hover:translate-x-1 transition-transform">
                <span>Read Document</span>
                <ArrowUpRight size={16} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
