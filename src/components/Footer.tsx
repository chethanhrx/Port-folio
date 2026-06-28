'use client';

import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-14 px-6 relative z-10 bg-[#06080f] border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[#0f1423] border border-cyan-500/30 flex items-center justify-center text-accentCyan">
            <Terminal size={20} className="stroke-[2.5]" />
          </div>
          <div>
            <span className="font-extrabold text-white text-base tracking-tight block">
              Chethan Kumar H R
            </span>
            <span className="text-xs text-gray-500 font-mono">© {new Date().getFullYear()} • All Rights Reserved</span>
          </div>
        </div>

        <div className="text-xs font-mono text-gray-400 flex items-center gap-2 bg-[#0f1423] px-5 py-2.5 rounded-full border border-white/10 shadow-inner">
          <span>Engineered with Next.js & Three.js</span>
          <span className="text-accentCyan">•</span>
          <span className="text-white font-bold">Write code that speaks for itself.</span>
        </div>

        <button
          onClick={scrollToTop}
          className="p-3.5 rounded-xl bg-[#0f1423] border border-white/10 hover:border-accentCyan/50 hover:bg-[#161e33] text-gray-300 hover:text-accentCyan transition-all shadow-md group flex items-center gap-2 text-xs font-mono font-bold"
        >
          <span>Back to Top</span>
          <ArrowUp size={16} className="transform group-hover:-translate-y-1 transition-transform text-accentCyan" />
        </button>

      </div>
    </footer>
  );
}
