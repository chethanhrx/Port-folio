'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Star, GitFork, ExternalLink, Activity, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data/projects';
import { Project } from '../types';

export default function GithubActivity() {
  const [reposList, setReposList] = useState<Project[]>(PROJECTS_DATA.slice(0, 3));

  useEffect(() => {
    fetch('/api/github')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.repoStats) {
          setReposList((prev) =>
            prev.map((p) => {
              const lookupKey = p.id === 'watchtower' ? 'watch-tower' : p.id === 'neuramate' ? 'neura-mate' : p.id;
              const liveStats = data.repoStats[lookupKey];
              if (liveStats) {
                return {
                  ...p,
                  stats: {
                    stars: liveStats.stars,
                    forks: liveStats.forks,
                    language: liveStats.language || p.stats?.language || 'Code'
                  }
                };
              }
              return p;
            })
          );
        }
      })
      .catch((err) => console.error('Error fetching live github stars for activity:', err));
  }, []);

  return (
    <section id="activity" className="py-32 px-6 relative z-10 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-20 relative">
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/[0.04] backdrop-blur-md border border-cyan-500/20 text-cyan-400 text-xs font-mono uppercase tracking-widest mb-6">
          <Activity size={16} />
          <span className="font-extrabold">Continuous Integration & Commits</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6">
          GitHub Activity & <br />
          <span className="galaxy-text">Open Source Telemetry</span>
        </h2>
        <p className="text-white/40 max-w-2xl text-base sm:text-lg leading-relaxed font-medium">
          Live commit velocity and top starred repositories auto-pulled directly from my GitHub developer profile. Showing verified real-time telemetry.
        </p>
      </div>

      {/* Live Contribution Graph Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 rounded-3xl glass-card mb-16 overflow-x-auto hover:border-cyan-500/20 transition-all duration-500"
      >
        <div className="flex items-center justify-between mb-8 min-w-[600px]">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
              <Github size={24} />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">Live Contribution Graph</h3>
              <span className="text-xs font-mono text-cyan-400 font-extrabold">@chethanhrx</span>
            </div>
          </div>
          <a
            href="https://github.com/chethanhrx"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-white/50 hover:text-cyan-400 hover:border-cyan-500/30 transition-all flex items-center gap-1.5 font-bold"
          >
            <span>View Full History</span>
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="w-full flex justify-center bg-black/30 p-6 rounded-2xl border border-white/5 min-w-[600px]">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=chethanhrx&bg_color=000000&color=00e5ff&line=00e5ff&point=ffffff&area=true&hide_border=true"
            alt="Chethan Kumar H R GitHub Activity Graph"
            className="w-full h-auto max-h-64 object-contain rounded"
          />
        </div>
      </motion.div>

      {/* Pinned Repos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {reposList.map((repo, idx) => (
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            key={repo.id}
            href={repo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-3xl glass-card glass-card-hover transition-all duration-500 group flex flex-col justify-between transform hover:-translate-y-2 relative overflow-hidden space-y-6"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2.5 text-white font-black text-lg group-hover:text-cyan-400 transition-colors tracking-tight">
                  <Github size={22} className="text-white/50 group-hover:text-cyan-400 transition-colors" />
                  <span>{repo.title}</span>
                </div>
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/50 group-hover:text-white group-hover:bg-cyan-500 group-hover:border-cyan-500 transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-white/40 line-clamp-3 leading-relaxed font-medium">
                {repo.shortDescription}
              </p>
            </div>

            <div className="flex items-center justify-between pt-5 border-t border-white/5 text-xs font-mono text-white/40 font-bold">
              <span className="flex items-center gap-2 text-white/60 font-extrabold">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                {repo.stats?.language || 'Java'}
              </span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-amber-400 font-extrabold bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                  <Star size={15} className="fill-amber-400 text-amber-400" />
                  {repo.stats?.stars || 0} Verified Stars
                </span>
                <span className="flex items-center gap-1.5 text-white/50 font-extrabold">
                  <GitFork size={15} />
                  {repo.stats?.forks || 0}
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
          className="px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-extrabold text-base shadow-glow-cyan transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-1"
        >
          <Github size={20} />
          <span>View Full GitHub Profile (@chethanhrx)</span>
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
