'use client';

import React, { useEffect } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Next.js Client Runtime Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-[#141213] text-[#FFEBD3] relative z-50 bg-grain">
      <div className="max-w-md w-full p-8 rounded-2xl bg-[#181617] border border-[#262223] text-center space-y-6 shadow-2xl">
        <div className="w-16 h-16 rounded-xl bg-[#FFB6A6]/15 border border-[#FFB6A6]/40 text-[#FFB6A6] mx-auto flex items-center justify-center">
          <AlertTriangle size={32} />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs text-[#9BCEC1] uppercase tracking-widest font-extrabold">
            SYSTEM EXCEPTION // DETECTED
          </span>
          <h2 className="text-2xl font-black tracking-tight text-[#FFEBD3] uppercase">
            Runtime Architecture Error
          </h2>
          <p className="text-sm font-normal text-[#FFEBD3]/75 leading-relaxed">
            An unexpected error occurred while rendering this interface module. Please reload the runtime pipeline.
          </p>
        </div>

        <div className="p-3 rounded-lg bg-[#141213] border border-[#262223] text-left font-mono text-xs text-[#FFEBD3]/70 overflow-x-auto">
          <span className="text-[#FFB6A6] font-bold">Error: </span>
          {error.message || 'Unknown runtime exception'}
        </div>

        <button
          onClick={() => reset()}
          className="w-full py-4 rounded-sm bg-[#FFB6A6] hover:bg-[#FFEBD3] text-[#141213] font-black text-sm flex items-center justify-center gap-2 transition-all shadow-xl shadow-[#FFB6A6]/20 tracking-wider uppercase cursor-pointer"
        >
          <RefreshCw size={18} />
          <span>Reload Interface Pipeline</span>
        </button>
      </div>
    </div>
  );
}
