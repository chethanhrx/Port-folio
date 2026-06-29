'use client';

import React from 'react';
import { RefreshCw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html>
      <body className="bg-black text-white font-sans flex items-center justify-center min-h-screen p-6">
        <div className="max-w-md w-full p-8 rounded-3xl bg-white/[0.05] border border-white/10 text-center space-y-6">
          <h2 className="text-2xl font-black text-white">Root Application Error</h2>
          <p className="text-sm text-white/50">The application encountered a fatal error during rendering.</p>
          <button
            onClick={() => reset()}
            className="w-full py-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold flex items-center justify-center gap-2"
          >
            <RefreshCw size={18} />
            <span>Restore Session</span>
          </button>
        </div>
      </body>
    </html>
  );
}
