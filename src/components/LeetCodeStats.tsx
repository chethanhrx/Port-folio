'use client';

import { useEffect, useState } from 'react';

export default function LeetCodeStats({ username }: { username: string }) {
  const [solved, setSolved] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchStats = async () => {
      try {
        const response = await fetch(`/api/leetcode?username=${encodeURIComponent(username)}`);
        if (!response.ok) throw new Error('Failed to fetch');

        const data = await response.json();
        if (!cancelled) {
          if (typeof data.solved === 'number') {
            setSolved(data.solved);
          } else {
            setFailed(true);
          }
        }
      } catch {
        if (!cancelled) setFailed(true);
      } finally {
        if (!cancelled) setLoading(false);
      }
    };

    fetchStats();

    return () => {
      cancelled = true;
    };
  }, [username]);

  if (failed) return null;

  return (
    <div>
      <span className="flex items-center gap-2 text-2xl font-bold text-gray-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg"
          alt="LeetCode"
          width={24}
          height={24}
          className="w-6 h-6"
        />
        {loading ? '…' : solved}
      </span>
      <span className="text-sm text-gray-500">LeetCode Solved</span>
    </div>
  );
}
