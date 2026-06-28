'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink, Activity, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';

export default function GithubActivity() {
  const topRepos = PROJECTS_DATA.slice(0, 3);

  return (
    <section id="activity" className="py-28 px-6 relative z-10 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f1423] border border-cyan-500/30 text-accentCyan text-xs font-mono uppercase tracking-widest mb-6 shadow-sm">
          <Activity size={15} />
          <span className="font-bold">Continuous Integration & Commits</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
          GitHub Activity & <br />
          <span className="text-accentCyan">Open Source Telemetry</span>
        </h2>
        <p className="text-gray-400 max-w-2xl text-base sm:text-lg leading-relaxed">
          Live commit velocity and top starred repositories auto-pulled directly from my GitHub developer profile.
        </p>
      </div>

      {/* Live Contribution Graph Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 rounded-2xl bg-[#0f1423] border border-white/10 mb-14 shadow-lg overflow-x-auto"
      >
        <div className="flex items-center justify-between mb-8 min-w-[600px]">
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-white">
              <Github size={24} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Live Contribution Graph</h3>
              <span className="text-xs font-mono text-accentCyan font-medium">@chethanhrx</span>
            </div>
          </div>
          <a
            href="https://github.com/chethanhrx"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-gray-300 hover:text-accentCyan hover:border-accentCyan/50 transition-all flex items-center gap-1.5 font-bold"
          >
            <span>View Full History</span>
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="w-full flex justify-center bg-[#06080f] p-5 rounded-xl border border-white/10 min-w-[600px] shadow-inner">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=chethanhrx&bg_color=06080f&color=00f2fe&line=38bdf8&point=ffffff&area=true&hide_border=true"
            alt="Chethan Kumar H R GitHub Activity Graph"
            className="w-full h-auto max-h-64 object-contain rounded"
          />
        </div>
      </motion.div>

      {/* Pinned Repos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
        {topRepos.map((repo, idx) => (
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            key={repo.id}
            href={repo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-7 rounded-2xl bg-[#0f1423] border border-white/10 hover:border-accentCyan/50 transition-all duration-300 shadow-lg group flex flex-col justify-between transform hover:-translate-y-1.5 space-y-6"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5 text-white font-bold text-lg group-hover:text-accentCyan transition-colors tracking-tight">
                  <Github size={20} />
                  <span>{repo.title}</span>
                </div>
                <div className="p-2 rounded-lg bg-white/5 text-gray-400 group-hover:text-white group-hover:bg-cyan-500/20 transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-300 line-clamp-3 leading-relaxed">
                {repo.shortDescription}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/5 text-xs font-mono text-gray-400 font-medium">
              <span className="flex items-center gap-2 text-accentCyan">
                <span className="w-2 h-2 rounded-full bg-accentCyan animate-ping" />
                {repo.stats?.language || 'Java'}
              </span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-yellow-400">
                  <Star size={15} className="fill-yellow-400" />
                  {repo.stats?.stars || 30}
                </span>
                <span className="flex items-center gap-1.5 text-gray-400">
                  <GitFork size={15} />
                  {repo.stats?.forks || 8}
                </span>
              </div>
            </div>
          </motion.a>
        ))}
      </div>

      {/* CTA */}
      <div className="flex justify-center">
        <a
          href="https://github.com/chethanhrx"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 rounded-xl bg-accentCyan hover:bg-cyan-300 text-black font-extrabold text-base shadow-glow-cyan transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-0.5"
        >
          <Github size={20} />
          <span>View Full GitHub Profile (@chethanhrx)</span>
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
