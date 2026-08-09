import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const aiCrawlers = [
    'GPTBot',
    'ChatGPT-User',
    'Google-Extended',
    'PerplexityBot',
    'ClaudeBot',
    'Claude-Web',
    'CCBot',
    'OmgiliBot',
    'anthropic-ai',
    'cohere-ai',
  ];

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      ...aiCrawlers.map((userAgent) => ({
        userAgent,
        allow: '/',
      })),
    ],
    sitemap: 'https://chethanhrx.netlify.app/sitemap.xml',
  };
}
