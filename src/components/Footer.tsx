'use client';

import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 relative z-10 bg-white border-t border-slate-200/80 overflow-hidden shadow-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-500/30 flex items-center justify-center text-blue-600 shadow-sm">
            <Terminal size={22} className="stroke-[2.5]" />
          </div>
          <div>
            <span className="font-black text-slate-900 text-base tracking-tight block">
              Chethan Kumar H R
            </span>
            <span className="text-xs text-slate-500 font-mono font-semibold">© {new Date().getFullYear()} • All Rights Reserved</span>
          </div>
        </div>

        <div className="text-xs font-mono text-slate-600 flex items-center gap-2 bg-slate-50 px-6 py-3 rounded-full border border-slate-200 shadow-2xs font-bold">
          <span>Engineered with Next.js & Three.js</span>
          <span className="text-blue-600">•</span>
          <span className="text-slate-900 font-extrabold">Write code that speaks for itself.</span>
        </div>

        <button
          onClick={scrollToTop}
          className="p-4 rounded-2xl bg-slate-100 border border-slate-200 hover:border-blue-500 hover:bg-blue-600 hover:text-white text-slate-700 transition-all shadow-sm group flex items-center gap-2 text-xs font-mono font-extrabold"
        >
          <span>Back to Top</span>
          <ArrowUp size={16} className="transform group-hover:-translate-y-1 transition-transform text-blue-600 group-hover:text-white" />
        </button>

      </div>
    </footer>
  );
}
