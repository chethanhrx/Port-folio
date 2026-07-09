'use client';

import React from 'react';
import { Terminal, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-16 px-6 relative z-10 bg-[#141213] border-t border-[#262223] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        
        <div className="flex items-center gap-3.5">
          <div className="w-11 h-11 rounded-sm bg-[#FFB6A6] text-[#141213] font-mono font-black text-base flex items-center justify-center border border-[#FFEBD3]">
            CH
          </div>
          <div>
            <span className="font-black text-[#FFEBD3] text-base tracking-tight block uppercase">
              Chethan Kumar H R
            </span>
            <span className="text-xs text-[#9BCEC1] font-mono font-bold uppercase tracking-wider">© {new Date().getFullYear()} • ORTEX FOUNDER & SYSTEM ARCHITECT</span>
          </div>
        </div>

        <div className="text-xs font-mono text-[#FFEBD3]/70 flex items-center gap-2.5 bg-[#181617] px-6 py-3 rounded-sm border border-[#262223] font-bold uppercase tracking-wider">
          <span>Engineered with Next.js & Framer Motion</span>
          <span className="text-[#FFB6A6]">•</span>
          <span className="text-[#FFEBD3] font-black">Architecture First. Zero Compromise.</span>
        </div>

        <button
          onClick={scrollToTop}
          className="px-6 py-3.5 rounded-sm bg-[#181617] border border-[#262223] hover:border-[#FFB6A6] hover:bg-[#FFB6A6] hover:text-[#141213] text-[#FFEBD3] transition-all duration-300 group flex items-center gap-2 text-xs font-mono font-black uppercase tracking-wider cursor-pointer shadow-md"
        >
          <span>Return To Master Top</span>
          <ArrowUp size={16} className="transform group-hover:-translate-y-0.5 transition-transform text-[#9BCEC1] group-hover:text-[#141213]" />
        </button>

      </div>
    </footer>
  );
}
