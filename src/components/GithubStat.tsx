'use client';

import { useEffect, useState } from 'react';

export default function GithubStat() {
  const [repos, setRepos] = useState<number | null>(null);
  const [failed, setFailed] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    const fetchStats = async () => {
      try {
        const res = await fetch('/api/github');
        if (!res.ok) throw new Error('Failed to fetch');

        const data = await res.json();
        if (!cancelled) {
          if (typeof data.repos === 'number') {
            setRepos(data.repos);
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
  }, []);

  if (failed) return null;

  return (
    <div>
      <span className="block text-2xl font-bold text-gray-900">
        {loading ? '…' : `${repos}+`}
      </span>
      <span className="text-sm text-gray-500">Projects Built</span>
    </div>
  );
}
