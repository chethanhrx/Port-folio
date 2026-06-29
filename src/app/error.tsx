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
    <div className="min-h-screen w-full flex items-center justify-center p-6 bg-black text-white relative z-50">
      <div className="max-w-md w-full p-8 rounded-3xl glass-card text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 text-amber-400 mx-auto flex items-center justify-center">
          <AlertTriangle size={32} />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-black tracking-tight text-white">
            System Glitch Detected
          </h2>
          <p className="text-sm font-medium text-white/50 leading-relaxed">
            An unexpected error occurred while rendering the interface. This usually happens during active development reloads.
          </p>
        </div>

        <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 text-left font-mono text-xs text-white/40 overflow-x-auto">
          {error.message || 'Unknown runtime exception'}
        </div>

        <button
          onClick={() => reset()}
          className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-glow-cyan transform hover:-translate-y-0.5"
        >
          <RefreshCw size={18} />
          <span>Reload & Restore Interface</span>
        </button>
      </div>
    </div>
  );
}
