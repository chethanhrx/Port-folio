'use client';

import React from 'react';
import { RefreshCw, AlertTriangle } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-[#141213] text-[#FFEBD3] font-sans flex items-center justify-center min-h-screen p-6">
        <div className="max-w-md w-full p-8 rounded-2xl bg-[#181617] border border-[#262223] text-center space-y-6 shadow-2xl">
          <div className="w-16 h-16 rounded-xl bg-[#FFB6A6]/15 border border-[#FFB6A6]/40 text-[#FFB6A6] mx-auto flex items-center justify-center">
            <AlertTriangle size={32} />
          </div>
          <div className="space-y-2">
            <span className="font-mono text-xs text-[#9BCEC1] uppercase tracking-widest font-extrabold">
              FATAL EXCEPTION
            </span>
            <h2 className="text-2xl font-black text-[#FFEBD3] uppercase">Root Application Error</h2>
            <p className="text-sm text-[#FFEBD3]/75">The application encountered a critical error during rendering.</p>
          </div>
          <button
            onClick={() => reset()}
            className="w-full py-4 rounded-sm bg-[#FFB6A6] hover:bg-[#FFEBD3] text-[#141213] font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-xl shadow-[#FFB6A6]/20 cursor-pointer"
          >
            <RefreshCw size={18} />
            <span>Restore Session Pipeline</span>
          </button>
        </div>
      </body>
    </html>
  );
}
