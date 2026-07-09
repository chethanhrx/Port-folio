import { NextResponse } from 'next/server';

export const revalidate = 1800;

export async function GET() {
  const fallbackData = {
    solved: 340,
    easy: 120,
    medium: 180,
    hard: 40,
    ranking: '#14,200',
    totalSubmissions: 340,
    easySubmissions: 120,
    mediumSubmissions: 180,
    hardSubmissions: 40,
    acceptanceRate: 82,
    streak: 15,
    contestRating: 1650,
    contestGlobalRanking: 14200,
    contestTopPercentage: 8,
    totalProblems: 340,
    recentActivity: []
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const graphqlQuery = {
      query: `
        query userProblemsSolved($username: String!) {
          allQuestionsCount {
            difficulty
            count
          }
          matchedUser(username: $username) {
            submitStatsGlobal {
              acSubmissionNum {
                difficulty
                count
              }
            }
            profile {
              ranking
            }
          }
        }
      `,
      variables: { username: 'chethank_hr' }
    };

    const res = await fetch('https://leetcode.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
      },
      body: JSON.stringify(graphqlQuery),
      signal: controller.signal,
      next: { revalidate: 1800 }
    }).catch(() => null);

    clearTimeout(timeoutId);

    if (res && res.ok) {
      const data = await res.json().catch(() => null);
      const matchedUser = data?.data?.matchedUser;
      if (matchedUser) {
        const stats = matchedUser.submitStatsGlobal?.acSubmissionNum || [];
        const solvedObj = stats.find((s: any) => s.difficulty === 'All');
        const easyObj = stats.find((s: any) => s.difficulty === 'Easy');
        const medObj = stats.find((s: any) => s.difficulty === 'Medium');
        const hardObj = stats.find((s: any) => s.difficulty === 'Hard');

        const solved = solvedObj?.count || fallbackData.solved;
        const easy = easyObj?.count || fallbackData.easy;
        const medium = medObj?.count || fallbackData.medium;
        const hard = hardObj?.count || fallbackData.hard;
        const rawRank = matchedUser.profile?.ranking;
        const ranking = rawRank ? `#${rawRank.toLocaleString()}` : fallbackData.ranking;

        return NextResponse.json({
          solved,
          easy,
          medium,
          hard,
          ranking,
          totalSubmissions: solved,
          easySubmissions: easy,
          mediumSubmissions: medium,
          hardSubmissions: hard,
          acceptanceRate: solved > 0 ? 82 : fallbackData.acceptanceRate,
          streak: fallbackData.streak,
          contestRating: fallbackData.contestRating,
          contestGlobalRanking: fallbackData.contestGlobalRanking,
          contestTopPercentage: fallbackData.contestTopPercentage,
          totalProblems: solved,
          recentActivity: []
        });
      }
    }

    const alfaController = new AbortController();
    const alfaTimeoutId = setTimeout(() => alfaController.abort(), 3000);
    const alfaRes = await fetch('https://alfa-leetcode-api.onrender.com/chethank_hr', { signal: alfaController.signal, next: { revalidate: 1800 } }).catch(() => null);
    clearTimeout(alfaTimeoutId);

    if (alfaRes && alfaRes.ok) {
      const alfaData = await alfaRes.json().catch(() => null);
      if (alfaData && alfaData.totalSolved !== undefined) {
        return NextResponse.json({
          solved: alfaData.totalSolved || fallbackData.solved,
          easy: alfaData.easySolved || fallbackData.easy,
          medium: alfaData.mediumSolved || fallbackData.medium,
          hard: alfaData.hardSolved || fallbackData.hard,
          ranking: alfaData.ranking ? `#${alfaData.ranking.toLocaleString()}` : fallbackData.ranking,
          totalSubmissions: alfaData.totalSolved || fallbackData.totalSubmissions,
          easySubmissions: alfaData.easySolved || fallbackData.easySubmissions,
          mediumSubmissions: alfaData.mediumSolved || fallbackData.mediumSubmissions,
          hardSubmissions: alfaData.hardSolved || fallbackData.hardSubmissions,
          acceptanceRate: 80,
          streak: fallbackData.streak,
          contestRating: fallbackData.contestRating,
          contestGlobalRanking: fallbackData.contestGlobalRanking,
          contestTopPercentage: fallbackData.contestTopPercentage,
          totalProblems: alfaData.totalSolved || fallbackData.totalProblems,
          recentActivity: []
        });
      }
    }

    return NextResponse.json(fallbackData);
  } catch (error) {
    return NextResponse.json(fallbackData);
  }
}
