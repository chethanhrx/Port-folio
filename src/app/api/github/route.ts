import { NextResponse } from 'next/server';

export const revalidate = 1800;

export async function GET() {
  const fallbackData = {
    repos: 28,
    followers: 45,
    stars: 120,
    topLanguages: ['Java', 'Spring Boot', 'React', 'Microservices', 'TypeScript', 'Python'],
    repoStats: {},
    publicRepos: [] as Array<{ name: string; stars: number; forks: number; language: string; description: string; url: string; updatedAt: string }>
  };

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4000);

    const [userRes, reposRes] = await Promise.all([
      fetch('https://api.github.com/users/chethanhrx', { signal: controller.signal, next: { revalidate: 1800 } }).catch(() => null),
      fetch('https://api.github.com/users/chethanhrx/repos?per_page=100&type=public&sort=updated&direction=desc', { signal: controller.signal, next: { revalidate: 1800 } }).catch(() => null),
    ]);

    clearTimeout(timeoutId);

    let userData: any = {};
    if (userRes && userRes.ok) {
      userData = await userRes.json().catch(() => ({}));
    }

    let totalStars = 0;
    const langCounts: Record<string, number> = {};
    const repoStats: Record<string, { stars: number; forks: number; language: string }> = {};
    const publicRepos: Array<{ name: string; stars: number; forks: number; language: string; description: string; url: string; updatedAt: string }> = [];

    if (reposRes && reposRes.ok) {
      const reposData = await reposRes.json().catch(() => []);
      if (Array.isArray(reposData)) {
        reposData
          .filter((repo: any) => !repo.fork && repo.private === false)
          .forEach((repo: any) => {
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

            publicRepos.push({
              name: repo.name,
              stars,
              forks,
              language: repo.language || 'Code',
              description: repo.description || '',
              url: repo.html_url,
              updatedAt: repo.updated_at || ''
            });
          });
      }
    }

    const sortedLanguages = Object.entries(langCounts)
      .sort((a, b) => b[1] - a[1])
      .map(([lang]) => lang)
      .slice(0, 6);

    const publicRepoCount = publicRepos.length;

    return NextResponse.json({
      repos: publicRepoCount || userData.public_repos || fallbackData.repos,
      followers: userData.followers || fallbackData.followers,
      stars: totalStars || fallbackData.stars,
      topLanguages: sortedLanguages.length > 0 ? sortedLanguages : fallbackData.topLanguages,
      repoStats,
      publicRepos: publicRepos.slice(0, 20)
    });
  } catch (error) {
    return NextResponse.json(fallbackData);
  }
}
