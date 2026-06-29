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
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white border border-blue-500/30 text-blue-600 text-xs font-mono uppercase tracking-widest mb-6 shadow-sm">
          <Activity size={16} />
          <span className="font-extrabold">Continuous Integration & Commits</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-slate-900 tracking-tight mb-6">
          GitHub Activity & <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 bg-clip-text text-transparent">Open Source Telemetry</span>
        </h2>
        <p className="text-slate-500 max-w-2xl text-base sm:text-lg leading-relaxed font-medium">
          Live commit velocity and top starred repositories auto-pulled directly from my GitHub developer profile.
        </p>
      </div>

      {/* Live Contribution Graph Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 mb-14 shadow-[0_10px_35px_rgba(0,0,0,0.04)] overflow-x-auto"
      >
        <div className="flex items-center justify-between mb-8 min-w-[600px]">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-600 shadow-sm">
              <Github size={24} />
            </div>
            <div>
              <h3 className="text-xl font-black text-slate-900">Live Contribution Graph</h3>
              <span className="text-xs font-mono text-blue-600 font-extrabold">@chethanhrx</span>
            </div>
          </div>
          <a
            href="https://github.com/chethanhrx"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono text-slate-700 hover:text-blue-600 hover:border-blue-500/50 transition-all flex items-center gap-1.5 font-bold shadow-2xs"
          >
            <span>View Full History</span>
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="w-full flex justify-center bg-slate-50 p-6 rounded-2xl border border-slate-200 min-w-[600px] shadow-inner">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=chethanhrx&bg_color=f8fafc&color=2563eb&line=3b82f6&point=0f172a&area=true&hide_border=true"
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
            className="p-8 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 hover:border-blue-500 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] group flex flex-col justify-between transform hover:-translate-y-2 space-y-6"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5 text-slate-900 font-black text-lg group-hover:text-blue-600 transition-colors tracking-tight">
                  <Github size={22} className="text-slate-600 group-hover:text-blue-600" />
                  <span>{repo.title}</span>
                </div>
                <div className="p-2.5 rounded-xl bg-slate-100 text-slate-600 group-hover:text-white group-hover:bg-blue-600 transition-all shadow-sm">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed font-medium">
                {repo.shortDescription}
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 text-xs font-mono text-slate-500 font-bold">
              <span className="flex items-center gap-2 text-blue-600 font-extrabold">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-ping" />
                {repo.stats?.language || 'Java'}
              </span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-amber-500 font-extrabold">
                  <Star size={15} className="fill-amber-400 text-amber-400" />
                  {repo.stats?.stars || 30}
                </span>
                <span className="flex items-center gap-1.5 text-slate-500 font-extrabold">
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
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-extrabold text-base shadow-glow-cyan transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1"
        >
          <Github size={20} />
          <span>View Full GitHub Profile (@chethanhrx)</span>
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
