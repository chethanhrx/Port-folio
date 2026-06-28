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
      <div className="flex flex-col items-center text-center mb-16 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f1423] border border-cyan-500/30 text-accentCyan text-xs font-mono uppercase tracking-widest mb-6 shadow-sm">
          <BookOpen size={15} />
          <span className="font-bold">Knowledge & Architecture Notes</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
          Featured Write-ups & <br />
          <span className="text-accentCyan">Technical Resources</span>
        </h2>
        <p className="text-gray-400 max-w-xl text-base sm:text-lg leading-relaxed">
          Documenting software engineering decisions, algorithm derivations, and system design explorations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {resources.map((res, idx) => (
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            key={idx}
            href={res.link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-2xl bg-[#0f1423] border border-white/10 hover:border-accentCyan/50 transition-all duration-300 shadow-lg group flex flex-col justify-between transform hover:-translate-y-1.5 space-y-6"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="px-3 py-1 rounded bg-white/5 text-accentCyan font-mono text-xs font-bold border border-white/10">
                  {res.tag}
                </span>
                <FileText size={20} className="text-gray-400 group-hover:text-accentCyan transition-colors" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accentCyan transition-colors leading-snug">
                {res.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {res.description}
              </p>
            </div>

            <div className="pt-5 border-t border-white/5 flex items-center justify-between text-xs font-mono text-gray-400 font-bold group-hover:text-white">
              <span>{res.type}</span>
              <div className="flex items-center gap-1.5 text-accentCyan">
                <span>Read Note</span>
                <ArrowUpRight size={16} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
