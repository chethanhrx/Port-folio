'use client';

import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 relative z-10 bg-black/80 border-t border-white/5 overflow-hidden backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
            <Terminal size={22} className="stroke-[2.5]" />
          </div>
          <div>
            <span className="font-black text-white text-base tracking-tight block">
              Chethan Kumar H R
            </span>
            <span className="text-xs text-white/30 font-mono font-semibold">© {new Date().getFullYear()} • All Rights Reserved</span>
          </div>
        </div>

        <div className="text-xs font-mono text-white/40 flex items-center gap-2 bg-white/[0.03] px-6 py-3 rounded-full border border-white/[0.06] font-bold">
          <span>Engineered with Next.js & Three.js</span>
          <span className="text-cyan-400">•</span>
          <span className="text-white/60 font-extrabold">Write code that speaks for itself.</span>
        </div>

        <button
          onClick={scrollToTop}
          className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400 text-white/50 transition-all group flex items-center gap-2 text-xs font-mono font-extrabold"
        >
          <span>Back to Top</span>
          <ArrowUp size={16} className="transform group-hover:-translate-y-1 transition-transform text-cyan-400" />
        </button>

      </div>
    </footer>
  );
}
