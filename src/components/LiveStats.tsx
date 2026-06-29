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
          <div className="section-divider w-12" />
          <span className="px-5 py-2 rounded-full bg-white/[0.04] border border-cyan-500/20 text-xs font-mono tracking-widest text-cyan-400 flex items-center gap-2 font-extrabold backdrop-blur-md">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
            Live Real-Time Telemetry (API Fetched)
          </span>
          <div className="section-divider w-12" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: GitHub Repos & Stars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-7 rounded-3xl glass-card glass-card-hover transition-all duration-500 hover:-translate-y-1.5 group"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-white/30 font-mono text-xs font-extrabold uppercase tracking-wider">GitHub Repos</span>
              <div className="p-3.5 rounded-2xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
                <Github size={20} />
              </div>
            </div>
            
            <div className="text-4xl font-black text-white mb-4 font-mono tracking-tight group-hover:text-cyan-400 transition-colors">
              <AnimatedCounter value={githubStats.repos} />
            </div>
            
            <div className="flex items-center gap-4 text-xs text-white/50 pt-3 border-t border-white/5 font-mono font-bold">
              <span className="flex items-center gap-1.5 text-amber-400">
                <Star size={15} className="fill-amber-400" />
                <AnimatedCounter value={githubStats.stars} /> Stars
              </span>
              <span className="flex items-center gap-1.5 text-white/40">
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
            className="p-7 rounded-3xl glass-card glass-card-hover transition-all duration-500 hover:-translate-y-1.5 group"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-white/30 font-mono text-xs font-extrabold uppercase tracking-wider">Tech Stack</span>
              <div className="p-3.5 rounded-2xl bg-purple-500/10 text-purple-400 group-hover:scale-110 group-hover:bg-purple-500/20 transition-all">
                <Terminal size={20} />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mt-3">
              {githubStats.topLanguages.slice(0, 4).map((lang, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-xs font-extrabold text-white/70 group-hover:border-cyan-500/30 group-hover:text-cyan-400 transition-all"
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
            className="p-7 rounded-3xl glass-card glass-card-hover transition-all duration-500 hover:-translate-y-1.5 group"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-white/30 font-mono text-xs font-extrabold uppercase tracking-wider">LeetCode Solved</span>
              <div className="p-3.5 rounded-2xl bg-pink-500/10 text-pink-400 group-hover:scale-110 group-hover:bg-pink-500/20 transition-all">
                <Code2 size={20} />
              </div>
            </div>
            
            <div className="text-4xl font-black text-white mb-4 font-mono flex items-baseline gap-2 group-hover:text-cyan-400 transition-colors">
              <AnimatedCounter value={leetcodeStats.solved} />
              <span className="text-xs text-white/30 font-bold uppercase tracking-wider">Problems</span>
            </div>
            
            <div className="flex items-center justify-between gap-2 text-xs font-mono pt-3 border-t border-white/5 font-bold">
              <span className="text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20">
                E: {leetcodeStats.easy}
              </span>
              <span className="text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                M: {leetcodeStats.medium}
              </span>
              <span className="text-rose-400 bg-rose-500/10 px-2.5 py-1 rounded-lg border border-rose-500/20">
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
            className="p-7 rounded-3xl glass-card glass-card-hover transition-all duration-500 hover:-translate-y-1.5 group"
          >
            <div className="flex items-center justify-between mb-5">
              <span className="text-white/30 font-mono text-xs font-extrabold uppercase tracking-wider">Global Ranking</span>
              <div className="p-3.5 rounded-2xl bg-amber-500/10 text-amber-400 group-hover:scale-110 group-hover:bg-amber-500/20 transition-all">
                <Trophy size={20} />
              </div>
            </div>
            
            <div className="text-3xl font-black text-white mb-4 font-mono truncate group-hover:text-cyan-400 transition-colors">
              {leetcodeStats.ranking}
            </div>
            
            <div className="text-xs text-white/40 flex items-center justify-between pt-3 border-t border-white/5 font-mono font-bold">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" /> Active Contender
              </span>
              <span>@chethank_hr</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
