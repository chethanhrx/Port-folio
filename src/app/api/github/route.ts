import { NextResponse } from 'next/server';

export async function GET() {
  const fallbackData = {
    repos: 28,
    followers: 45,
    stars: 256,
    topLanguages: ['Java', 'TypeScript', 'Python', 'JavaScript', 'Spring Boot', 'React']
  };

  try {
    const [userRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/users/chethanhrx', { next: { revalidate: 3600 } }),
      fetch('https://api.github.com/users/chethanhrx/repos?per_page=100', { next: { revalidate: 3600 } })
    ]);

    if (!userRes.ok || !reposRes.ok) {
      return NextResponse.json(fallbackData);
    }

    const userData = await userRes.json();
    const reposData = await reposRes.json();

    let totalStars = 0;
    const langCounts: Record<string, number> = {};

    if (Array.isArray(reposData)) {
      reposData.forEach((repo: any) => {
        totalStars += repo.stargazers_count || 0;
        if (repo.language) {
          langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
        }
      });
    }

    const sortedLanguages = Object.entries(langCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([lang]) => lang)
      .slice(0, 6);

    return NextResponse.json({
      repos: userData.public_repos || fallbackData.repos,
      followers: userData.followers || fallbackData.followers,
      stars: totalStars || fallbackData.stars,
      topLanguages: sortedLanguages.length > 0 ? sortedLanguages : fallbackData.topLanguages
    });
  } catch (error) {
    return NextResponse.json(fallbackData);
  }
}
