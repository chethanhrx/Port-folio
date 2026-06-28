import { NextResponse } from 'next/server';

export async function GET() {
  const fallbackData = {
    solved: 342,
    easy: 154,
    medium: 158,
    hard: 30,
    ranking: 'Top 12%'
  };

  try {
    const res = await fetch('https://alfa-leetcode-api.onrender.com/chethank_hr', {
      next: { revalidate: 3600 }
    });

    if (!res.ok) {
      return NextResponse.json(fallbackData);
    }

    const data = await res.json();

    return NextResponse.json({
      solved: data.totalSolved || fallbackData.solved,
      easy: data.easySolved || fallbackData.easy,
      medium: data.mediumSolved || fallbackData.medium,
      hard: data.hardSolved || fallbackData.hard,
      ranking: data.ranking ? `#${data.ranking.toLocaleString()}` : fallbackData.ranking
    });
  } catch (error) {
    return NextResponse.json(fallbackData);
  }
}
