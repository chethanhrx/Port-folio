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
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-500/30 text-blue-600 text-xs font-mono uppercase tracking-widest mb-6 shadow-sm">
          <BookOpen size={16} />
          <span className="font-extrabold">Knowledge & Architecture Notes</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-6">
          Featured Write-ups & <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Technical Resources</span>
        </h2>
        <p className="text-slate-500 max-w-xl text-base sm:text-lg leading-relaxed font-medium">
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
            className="p-8 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 hover:border-blue-500 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] group flex flex-col justify-between transform hover:-translate-y-2 space-y-6"
          >
            <div>
              <div className="flex items-center justify-between mb-5">
                <span className="px-3.5 py-1.5 rounded-xl bg-blue-50 text-blue-700 font-mono text-xs font-extrabold border border-blue-200 shadow-2xs">
                  {res.tag}
                </span>
                <FileText size={22} className="text-slate-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3 group-hover:text-blue-600 transition-colors leading-snug tracking-tight">
                {res.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed font-medium">
                {res.description}
              </p>
            </div>

            <div className="pt-5 border-t border-slate-100 flex items-center justify-between text-xs font-mono text-slate-500 font-extrabold group-hover:text-slate-900">
              <span>{res.type}</span>
              <div className="flex items-center gap-1.5 text-blue-600 group-hover:translate-x-1 transition-transform">
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
