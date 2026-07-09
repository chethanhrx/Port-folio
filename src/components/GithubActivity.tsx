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
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-20 relative border-b border-[#262223] pb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-[#181617] border border-[#9BCEC1]/40 text-[#9BCEC1] text-xs font-mono uppercase tracking-widest font-black mb-6 shadow-sm">
          <Activity size={14} className="text-[#FFB6A6]" />
          <span>OPEN SOURCE TELEMETRY // COMMITS</span>
        </div>
        <h2 className="text-4xl sm:text-6xl font-black text-[#FFEBD3] tracking-tight mb-6 uppercase">
          GitHub Activity & <br />
          <span className="text-[#FFB6A6]">Real-Time Velocity</span>
        </h2>
        <p className="text-[#FFEBD3]/75 max-w-2xl text-base sm:text-lg leading-relaxed font-normal">
          Live commit velocity and top starred repositories auto-pulled directly from my GitHub developer profile. Showing verified architectural telemetry.
        </p>
      </div>

      {/* Live Contribution Graph Card */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 rounded-sm bg-[#181617] border border-[#262223] mb-16 overflow-x-auto hover:border-[#FFB6A6] transition-all duration-500 shadow-2xl"
      >
        <div className="flex items-center justify-between mb-8 min-w-[600px] border-b border-[#262223] pb-6">
          <div className="flex items-center gap-4">
            <div className="p-3.5 rounded-sm bg-[#141213] border border-[#9BCEC1]/40 text-[#9BCEC1]">
              <Github size={22} />
            </div>
            <div>
              <h3 className="text-xl font-black text-[#FFEBD3] uppercase">Live Contribution Pipeline</h3>
              <span className="text-xs font-mono text-[#67A2C5] font-black uppercase tracking-widest">@chethanhrx</span>
            </div>
          </div>
          <a
            href="https://github.com/chethanhrx"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-sm bg-[#141213] border border-[#262223] text-xs font-mono text-[#FFEBD3]/80 hover:text-[#FFB6A6] hover:border-[#FFB6A6]/60 transition-all flex items-center gap-2 font-black uppercase tracking-wider"
          >
            <span>View Full History</span>
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="w-full flex justify-center bg-[#141213] p-6 rounded-sm border border-[#262223] min-w-[600px] shadow-inner">
          <img
            src="https://github-readme-activity-graph.vercel.app/graph?username=chethanhrx&bg_color=141213&color=FFB6A6&line=9BCEC1&point=FFEBD3&area=true&hide_border=true"
            alt="Chethan Kumar H R GitHub Activity Graph"
            className="w-full h-auto max-h-64 object-contain"
          />
        </div>
      </motion.div>

      {/* Pinned Repos Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {reposList.map((repo, idx) => (
          <motion.a
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            key={repo.id}
            href={repo.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-8 rounded-sm bg-[#181617] border border-[#262223] hover:border-[#FFB6A6] hover:bg-[#1C1A1B] transition-all duration-500 group flex flex-col justify-between relative overflow-hidden shadow-xl space-y-6"
          >
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#FFB6A6] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div>
              <div className="flex items-center justify-between mb-5 border-b border-[#262223] pb-4">
                <div className="flex items-center gap-2.5 text-[#FFEBD3] font-black text-lg group-hover:text-[#FFB6A6] transition-colors tracking-tight uppercase">
                  <Github size={20} className="text-[#9BCEC1]" />
                  <span>{repo.title}</span>
                </div>
                <div className="w-10 h-10 rounded-sm bg-[#141213] border border-[#262223] flex items-center justify-center text-[#FFEBD3]/70 group-hover:text-[#141213] group-hover:bg-[#FFB6A6] group-hover:border-[#FFB6A6] transition-all duration-300">
                  <ArrowUpRight size={17} />
                </div>
              </div>
              <p className="text-xs sm:text-sm text-[#FFEBD3]/80 line-clamp-3 leading-relaxed font-normal">
                {repo.shortDescription}
              </p>
            </div>

            <div className="flex items-center justify-between pt-5 border-t border-[#262223] text-xs font-mono text-[#FFEBD3]/70 font-bold uppercase tracking-wider">
              <span className="flex items-center gap-2 text-[#9BCEC1] font-black">
                <span className="w-2 h-2 rounded-full bg-[#9BCEC1] animate-pulse" />
                {repo.stats?.language || 'Java'}
              </span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-[#67A2C5] font-black bg-[#67A2C5]/15 px-2.5 py-1 rounded-sm border border-[#67A2C5]/40">
                  <Star size={13} className="fill-[#67A2C5] text-[#67A2C5]" />
                  {repo.stats?.stars || 0} Stars
                </span>
                <span className="flex items-center gap-1.5 text-[#FFEBD3]/70 font-black">
                  <GitFork size={13} />
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
          className="px-8 py-4.5 rounded-sm bg-[#FFB6A6] hover:bg-[#FFEBD3] text-[#141213] font-black text-sm uppercase tracking-wider shadow-xl shadow-[#FFB6A6]/20 transition-all duration-300 flex items-center gap-3 transform hover:-translate-y-0.5"
        >
          <Github size={18} />
          <span>View Master GitHub Repository (@chethanhrx)</span>
          <ArrowUpRight size={18} />
        </a>
      </div>
    </section>
  );
}
