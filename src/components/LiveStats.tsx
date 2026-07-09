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
    repos: 0,
    followers: 0,
    stars: 0,
    topLanguages: ['Java', 'Spring Boot', 'React', 'Microservices']
  });

  const [leetcodeStats, setLeetcodeStats] = useState<LeetCodeStats>({
    solved: 0,
    easy: 0,
    medium: 0,
    hard: 0,
    ranking: 'Verifying Telemetry...',
    totalSubmissions: 0,
    easySubmissions: 0,
    mediumSubmissions: 0,
    hardSubmissions: 0,
    acceptanceRate: 0,
    streak: 0,
    contestRating: 0,
    contestGlobalRanking: 0,
    contestTopPercentage: 0,
    totalProblems: 0,
    recentActivity: []
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
          if (ghData && ghData.repos !== undefined) {
            setGithubStats(ghData);
          }
        }
        if (lcRes.ok) {
          const lcData = await lcRes.json();
          if (lcData && lcData.solved !== undefined) {
            setLeetcodeStats(lcData);
          }
        }
      } catch (e) {
        console.error('Telemetry Sync Error:', e);
      }
    }
    fetchStats();
  }, []);

  return (
    <section className="py-16 px-6 relative z-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-10 justify-center">
          <div className="section-divider w-16 bg-[#262223]" />
          <span className="px-5 py-2 rounded-sm bg-[#181617] text-xs font-mono tracking-widest text-[#9BCEC1] flex items-center gap-2 font-black shadow-sm border border-[#9BCEC1]/40 uppercase">
            <span className="w-2 h-2 rounded-full bg-[#FFB6A6] animate-pulse" />
            LIVE TELEMETRY // REAL-TIME SYNCHRONIZED
          </span>
          <div className="section-divider w-16 bg-[#262223]" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Card 1: GitHub Repos & Stars */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-7 rounded-sm bg-[#181617] border border-[#262223] hover:border-[#FFB6A6] hover:bg-[#1C1A1B] transition-all duration-500 group relative overflow-hidden shadow-xl flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-6 border-b border-[#262223] pb-4">
              <span className="text-[#FFEBD3]/70 font-mono text-xs font-black uppercase tracking-wider">Public Repositories</span>
              <div className="p-3 rounded-sm bg-[#141213] border border-[#9BCEC1]/40 text-[#9BCEC1] group-hover:bg-[#FFB6A6] group-hover:text-[#141213] group-hover:border-[#FFB6A6] transition-all duration-300">
                <Github size={18} />
              </div>
            </div>
            
            <div className="text-4xl font-black text-[#FFEBD3] mb-4 font-mono tracking-tight group-hover:text-[#FFB6A6] transition-colors">
              <AnimatedCounter value={githubStats.repos} />
            </div>
            
            <div className="flex items-center gap-4 text-xs text-[#FFEBD3]/80 pt-4 border-t border-[#262223] font-mono font-bold uppercase">
              <span className="flex items-center gap-1.5 text-[#FFB6A6]">
                <Star size={14} className="fill-[#FFB6A6]" />
                <AnimatedCounter value={githubStats.stars} /> Stars
              </span>
              <span className="flex items-center gap-1.5 text-[#67A2C5]">
                <Users size={14} />
                <AnimatedCounter value={githubStats.followers} /> Followers
              </span>
            </div>
          </motion.div>

          {/* Card 2: Top Languages */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="p-7 rounded-sm bg-[#181617] border border-[#262223] hover:border-[#FFB6A6] hover:bg-[#1C1A1B] transition-all duration-500 group relative overflow-hidden shadow-xl flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-6 border-b border-[#262223] pb-4">
              <span className="text-[#FFEBD3]/70 font-mono text-xs font-black uppercase tracking-wider">Tech Architecture</span>
              <div className="p-3 rounded-sm bg-[#141213] border border-[#67A2C5]/40 text-[#67A2C5] group-hover:bg-[#FFB6A6] group-hover:text-[#141213] group-hover:border-[#FFB6A6] transition-all duration-300">
                <Terminal size={18} />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 my-2">
              {githubStats.topLanguages.slice(0, 4).map((lang, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-sm bg-[#141213] border border-[#262223] text-xs font-mono font-bold text-[#FFEBD3]/90 group-hover:border-[#9BCEC1]/60 group-hover:text-[#9BCEC1] transition-all uppercase tracking-wider"
                >
                  {lang}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-[#262223] text-[11px] font-mono font-bold text-[#FFEBD3]/60 uppercase tracking-widest">
              CORE PRODUCTION STACK
            </div>
          </motion.div>

          {/* Card 3: LeetCode Solved */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-7 rounded-sm bg-[#181617] border border-[#262223] hover:border-[#FFB6A6] hover:bg-[#1C1A1B] transition-all duration-500 group relative overflow-hidden shadow-xl flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-6 border-b border-[#262223] pb-4">
              <span className="text-[#FFEBD3]/70 font-mono text-xs font-black uppercase tracking-wider">Algorithm Mastery</span>
              <div className="p-3 rounded-sm bg-[#141213] border border-[#FFB6A6]/40 text-[#FFB6A6] group-hover:bg-[#FFB6A6] group-hover:text-[#141213] transition-all duration-300">
                <Code2 size={18} />
              </div>
            </div>
            
            <div className="text-4xl font-black text-[#FFEBD3] mb-4 font-mono flex items-baseline gap-2 group-hover:text-[#FFB6A6] transition-colors">
              <AnimatedCounter value={leetcodeStats.solved} />
              <span className="text-xs text-[#9BCEC1] font-black uppercase tracking-widest">Verified</span>
            </div>
            
            <div className="flex items-center justify-between gap-2 text-xs font-mono pt-4 border-t border-[#262223] font-black uppercase">
              <span className="text-[#9BCEC1] bg-[#141213] px-2.5 py-1 rounded-sm border border-[#9BCEC1]/40">
                E: {leetcodeStats.easy}
              </span>
              <span className="text-[#FFEBD3] bg-[#141213] px-2.5 py-1 rounded-sm border border-[#FFEBD3]/40">
                M: {leetcodeStats.medium}
              </span>
              <span className="text-[#FFB6A6] bg-[#141213] px-2.5 py-1 rounded-sm border border-[#FFB6A6]/40">
                H: {leetcodeStats.hard}
              </span>
            </div>
          </motion.div>

          {/* Card 4: LeetCode Ranking */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-7 rounded-sm bg-[#181617] border border-[#262223] hover:border-[#FFB6A6] hover:bg-[#1C1A1B] transition-all duration-500 group relative overflow-hidden shadow-xl flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-6 border-b border-[#262223] pb-4">
              <span className="text-[#FFEBD3]/70 font-mono text-xs font-black uppercase tracking-wider">Global Standing</span>
              <div className="p-3 rounded-sm bg-[#141213] border border-[#FFEBD3]/40 text-[#FFEBD3] group-hover:bg-[#FFB6A6] group-hover:text-[#141213] group-hover:border-[#FFB6A6] transition-all duration-300">
                <Trophy size={18} />
              </div>
            </div>
            
            <div className="text-2xl sm:text-3xl font-black text-[#FFEBD3] mb-4 font-mono truncate group-hover:text-[#FFB6A6] transition-colors">
              {leetcodeStats.ranking}
            </div>
            
            <div className="text-xs text-[#FFEBD3]/80 flex items-center justify-between pt-4 border-t border-[#262223] font-mono font-bold uppercase">
              <span className="flex items-center gap-1.5 text-[#9BCEC1]">
                <span className="w-2 h-2 rounded-full bg-[#9BCEC1] animate-pulse" /> Live Telemetry
              </span>
              <span className="text-[#67A2C5]">@chethank_hr</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
