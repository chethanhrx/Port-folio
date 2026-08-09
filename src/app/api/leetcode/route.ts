import { NextRequest, NextResponse } from 'next/server';

export const revalidate = 1800;

export async function GET(request: NextRequest) {
  const username = request.nextUrl.searchParams.get('username') || 'chethank_hr';

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
      variables: { username }
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

        const solved = solvedObj?.count ?? 0;
        const easy = easyObj?.count ?? 0;
        const medium = medObj?.count ?? 0;
        const hard = hardObj?.count ?? 0;
        const rawRank = matchedUser.profile?.ranking;
        const ranking = rawRank ? `#${rawRank.toLocaleString()}` : null;

        return NextResponse.json({
          solved,
          easy,
          medium,
          hard,
          ranking,
          totalSubmissions: solved,
          easySubmissions: easy,
          mediumSubmissions: medium,
          hardSubmissions: hard
        });
      }
    }

    return new NextResponse('LeetCode API unavailable', { status: 503 });
  } catch {
    return new NextResponse('LeetCode API unavailable', { status: 503 });
  }
}
