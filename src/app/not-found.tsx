'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-[#141213] text-[#FFEBD3] relative z-50 bg-grain">
      <div className="max-w-md w-full p-8 rounded-2xl bg-[#181617] border border-[#262223] text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-xl bg-[#FFB6A6]/15 border border-[#FFB6A6]/40 text-[#FFB6A6] mx-auto flex items-center justify-center font-mono font-black text-2xl">
          404
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-[#9BCEC1] uppercase tracking-widest font-extrabold">
            ROUTE NOT FOUND // INVALID PATH
          </span>
          <h2 className="text-2xl font-black tracking-tight text-[#FFEBD3] uppercase">
            Architecture Endpoint Missing
          </h2>
          <p className="text-sm font-normal text-[#FFEBD3]/75 leading-relaxed">
            The page or API resource you requested does not exist within this deployment system or has been moved.
          </p>
        </div>

        <Link
          href="/"
          className="w-full py-4 rounded-sm bg-[#FFB6A6] hover:bg-[#FFEBD3] text-[#141213] font-black text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#FFB6A6]/20 tracking-wider uppercase cursor-pointer block"
        >
          <ArrowLeft size={18} />
          <span>Return To Master Architecture</span>
        </Link>
      </div>
    </div>
  );
}
