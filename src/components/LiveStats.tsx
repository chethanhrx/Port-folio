'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Code2, Star, Users, Trophy, Terminal } from 'lucide-react';
import { GithubStats, LeetCodeStats } from '../types';

function AnimatedCounter({ value }: { value: number | string }) {
  const [count, setCount] = useState(0);
  const numericValue = typeof value === 'number' ? value : parseInt(value.toString().replace(/\D/g, '')) || 0;

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = numericValue / (duration / 16);
    let timer: NodeJS.Timeout;

    const updateCounter = () => {
      start += increment;
      if (start < numericValue) {
        setCount(Math.floor(start));
        timer = setTimeout(updateCounter, 16);
      } else {
        setCount(numericValue);
      }
    };

    updateCounter();
    return () => clearTimeout(timer);
  }, [numericValue]);

  return <span>{typeof value === 'string' && value.startsWith('#') ? `#${count.toLocaleString()}` : count.toLocaleString()}</span>;
}

export default function LiveStats() {
  const [githubStats, setGithubStats] = useState<GithubStats>({
    repos: 28,
    followers: 45,
    stars: 256,
    topLanguages: ['Java', 'TypeScript', 'Python', 'Spring Boot']
  });

  const [leetcodeStats, setLeetcodeStats] = useState<LeetCodeStats>({
    solved: 342,
    easy: 154,
    medium: 158,
    hard: 30,
    ranking: '#120,450'
  });

  useEffect(() => {
    async function fetchStats() {
      try {
        const [ghRes, lcRes] = await Promise.all([
          fetch('/api/github'),
          fetch('/api/leetcode')
        ]);
        if (ghRes.ok) {
          const ghData = await ghRes.json();
          setGithubStats(ghData);
        }
        if (lcRes.ok) {
          const lcData = await lcRes.json();
          setLeetcodeStats(lcData);
        }
      } catch (e) {
        // Fallbacks initialized
      }
    }
    fetchStats();
  }, []);

  return (
    <section className="py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10 justify-center">
          <div className="h-[1.5px] w-12 bg-slate-200" />
          <span className="px-5 py-2 rounded-full bg-white border border-blue-500/30 text-xs font-mono tracking-widest text-blue-600 flex items-center gap-2 font-extrabold shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
            Live Real-Time Telemetry (API Fetched)
          </span>
          <div className="h-[1.5px] w-12 bg-slate-200" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: GitHub Repos & Stars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 hover:border-blue-500/60 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:-translate-y-1.5 group"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-slate-400 font-mono text-xs font-extrabold uppercase tracking-wider">GitHub Repos</span>
              <div className="p-3.5 rounded-2xl bg-blue-50 text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                <Github size={20} />
              </div>
            </div>
            
            <div className="text-4xl font-black text-slate-900 mb-4 font-mono tracking-tight group-hover:text-blue-600 transition-colors">
              <AnimatedCounter value={githubStats.repos} />
            </div>
            
            <div className="flex items-center gap-4 text-xs text-slate-600 pt-3 border-t border-slate-100 font-mono font-bold">
              <span className="flex items-center gap-1.5 text-amber-500">
                <Star size={15} className="fill-amber-500" />
                <AnimatedCounter value={githubStats.stars} /> Stars
              </span>
              <span className="flex items-center gap-1.5 text-slate-500">
                <Users size={15} />
                <AnimatedCounter value={githubStats.followers} /> Followers
              </span>
            </div>
          </motion.div>

          {/* Card 2: Top Languages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-7 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 hover:border-blue-500/60 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:-translate-y-1.5 group"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-slate-400 font-mono text-xs font-extrabold uppercase tracking-wider">Tech Stack</span>
              <div className="p-3.5 rounded-2xl bg-indigo-50 text-indigo-600 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                <Terminal size={20} />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-3">
              {githubStats.topLanguages.slice(0, 4).map((lang, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-extrabold text-slate-700 group-hover:border-blue-500/40 group-hover:text-blue-600 group-hover:bg-blue-50/50 transition-all shadow-2xs"
                >
                  {lang}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: LeetCode Solved */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="p-7 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 hover:border-blue-500/60 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:-translate-y-1.5 group"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-slate-400 font-mono text-xs font-extrabold uppercase tracking-wider">LeetCode Solved</span>
              <div className="p-3.5 rounded-2xl bg-violet-50 text-violet-600 group-hover:scale-110 group-hover:bg-violet-600 group-hover:text-white transition-all shadow-sm">
                <Code2 size={20} />
              </div>
            </div>
            
            <div className="text-4xl font-black text-slate-900 mb-4 font-mono flex items-baseline gap-2 group-hover:text-blue-600 transition-colors">
              <AnimatedCounter value={leetcodeStats.solved} />
              <span className="text-xs text-slate-400 font-bold uppercase tracking-wider">Problems</span>
            </div>
            
            <div className="flex items-center justify-between gap-2 text-xs font-mono pt-3 border-t border-slate-100 font-bold">
              <span className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                E: {leetcodeStats.easy}
              </span>
              <span className="text-amber-700 bg-amber-50 px-2.5 py-1 rounded-lg border border-amber-200">
                M: {leetcodeStats.medium}
              </span>
              <span className="text-rose-700 bg-rose-50 px-2.5 py-1 rounded-lg border border-rose-200">
                H: {leetcodeStats.hard}
              </span>
            </div>
          </motion.div>

          {/* Card 4: LeetCode Ranking */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="p-7 rounded-3xl bg-white/90 backdrop-blur-xl border border-slate-200/80 hover:border-blue-500/60 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(37,99,235,0.12)] hover:-translate-y-1.5 group"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-slate-400 font-mono text-xs font-extrabold uppercase tracking-wider">Global Ranking</span>
              <div className="p-3.5 rounded-2xl bg-amber-50 text-amber-600 group-hover:scale-110 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-sm">
                <Trophy size={20} />
              </div>
            </div>
            
            <div className="text-3xl font-black text-slate-900 mb-4 font-mono truncate group-hover:text-blue-600 transition-colors">
              {leetcodeStats.ranking}
            </div>
            
            <div className="text-xs text-slate-500 flex items-center justify-between pt-3 border-t border-slate-100 font-mono font-bold">
              <span className="flex items-center gap-1.5 text-blue-600">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" /> Active Contender
              </span>
              <span>@chethank_hr</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
