import { NextResponse } from 'next/server';

export async function GET() {
  const fallbackData = {
    repos: 28,
    followers: 45,
    stars: 0,
    topLanguages: ['Java', 'TypeScript', 'Python', 'JavaScript', 'Spring Boot', 'React'],
    repoStats: {}
  };

  try {
    const [userRes, reposRes1, reposRes2, reposRes3] = await Promise.all([
      fetch('https://api.github.com/users/chethanhrx', { next: { revalidate: 1800 } }),
      fetch('https://api.github.com/users/chethanhrx/repos?per_page=100', { next: { revalidate: 1800 } }),
      fetch('https://api.github.com/repos/Harxshz7/ITC-bot', { next: { revalidate: 1800 } }),
      fetch('https://api.github.com/repos/OrtexDevs/Event-Bridge', { next: { revalidate: 1800 } })
    ]);

    let userData: any = {};
    if (userRes.ok) {
      userData = await userRes.json();
    }

    let totalStars = 0;
    const langCounts: Record<string, number> = {};
    const repoStats: Record<string, { stars: number; forks: number; language: string }> = {};

    if (reposRes1.ok) {
      const reposData = await reposRes1.json();
      if (Array.isArray(reposData)) {
        reposData.forEach((repo: any) => {
          const stars = repo.stargazers_count || 0;
          const forks = repo.forks_count || 0;
          totalStars += stars;
          if (repo.language) {
            langCounts[repo.language] = (langCounts[repo.language] || 0) + 1;
          }
          repoStats[repo.name.toLowerCase()] = {
            stars,
            forks,
            language: repo.language || 'Code'
          };
        });
      }
    }

    if (reposRes2.ok) {
      const r2 = await reposRes2.json();
      repoStats['itc-bot'] = {
        stars: r2.stargazers_count || 0,
        forks: r2.forks_count || 0,
        language: r2.language || 'Python'
      };
      totalStars += r2.stargazers_count || 0;
    }

    if (reposRes3.ok) {
      const r3 = await reposRes3.json();
      repoStats['event-bridge'] = {
        stars: r3.stargazers_count || 0,
        forks: r3.forks_count || 0,
        language: r3.language || 'TypeScript'
      };
      totalStars += r3.stargazers_count || 0;
    }

    const sortedLanguages = Object.entries(langCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([lang]) => lang)
      .slice(0, 6);

    return NextResponse.json({
      repos: userData.public_repos || 28,
      followers: userData.followers || 45,
      stars: totalStars,
      topLanguages: sortedLanguages.length > 0 ? sortedLanguages : fallbackData.topLanguages,
      repoStats
    });
  } catch (error) {
    return NextResponse.json(fallbackData);
  }
}
