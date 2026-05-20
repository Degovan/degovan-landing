const baseUrl = "https://degovan.com";

function buildSitemapXml() {
  const now = new Date().toISOString();

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${now}</lastmod>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/how-we-work</loc>
    <lastmod>${now}</lastmod>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>${baseUrl}/contributors</loc>
    <lastmod>${now}</lastmod>
    <priority>0.7</priority>
  </url>
</urlset>`;
}

export async function GET() {
  return new Response(buildSitemapXml(), {
    headers: {
      "content-type": "application/xml; charset=UTF-8",
    },
  });
}
