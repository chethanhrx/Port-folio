// Google image sitemap — helps the profile photo get indexed in Google Images.
// https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps
export function GET() {
  const baseUrl = 'https://chethanhrx.netlify.app';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/</loc>
    <image:image>
      <image:loc>${baseUrl}/chethan-kumar-hr.jpg</image:loc>
      <image:title>Chethan Kumar H R — Java Full Stack Developer</image:title>
      <image:caption>Portrait of Chethan Kumar H R, Java Full Stack Developer and Architect based in Bengaluru, India.</image:caption>
    </image:image>
  </url>
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
}
