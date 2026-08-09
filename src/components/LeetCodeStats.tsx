'use client';

import { useEffect, useState } from 'react';

export default function LeetCodeStats({ username }: { username: string }) {
  const [solved, setSolved] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Using a public LeetCode API wrapper
        const response = await fetch(`https://alfa-leetcode-api.onrender.com/${username}/solved`);
        if (!response.ok) throw new Error('Failed to fetch');
        
        const data = await response.json();
        if (data && typeof data.solvedProblem === 'number') {
          setSolved(data.solvedProblem);
        } else {
          // Fallback to another API if the first fails
          const fallbackRes = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
          const fallbackData = await fallbackRes.json();
          if (fallbackData && typeof fallbackData.totalSolved === 'number') {
            setSolved(fallbackData.totalSolved);
          }
        }
      } catch (error) {
        console.error('Error fetching LeetCode stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  return (
    <div>
      <span className="flex items-center gap-2 text-2xl font-bold text-gray-900">
        <img 
          src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/leetcode/leetcode-original.svg" 
          alt="LeetCode" 
          className="w-6 h-6" 
        />
        {loading ? '...' : (solved ?? 51)}
      </span>
      <span className="text-sm text-gray-500">LeetCode Solved</span>
    </div>
  );
}
