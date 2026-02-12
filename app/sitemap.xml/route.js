import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://www.slsbanquets.com/";
  const today = new Date().toISOString().split("T")[0];

  const entries = [
    { loc: `${baseUrl}/`, lastmod: today, changefreq: "weekly", priority: "1.0" },
    { loc: `${baseUrl}/blog`, lastmod: today, changefreq: "weekly", priority: "0.8" },
    { loc: `${baseUrl}/blog/best-banquet-hall-vijayawada`, lastmod: today, changefreq: "monthly", priority: "0.9" },
    { loc: `${baseUrl}/blog/affordable-function-hall-vijayawada`, lastmod: today, changefreq: "monthly", priority: "0.9" },
    { loc: `${baseUrl}/blog/wedding-hall-kandrika-vijayawada`, lastmod: today, changefreq: "monthly", priority: "0.9" },
    { loc: `${baseUrl}/blog/mini-function-hall-vijayawada`, lastmod: today, changefreq: "monthly", priority: "0.9" },
    { loc: `${baseUrl}/blog/reception-hall-vijayawada`, lastmod: today, changefreq: "monthly", priority: "0.9" },
    { loc: `${baseUrl}/blog/birthday-party-hall-vijayawada`, lastmod: today, changefreq: "monthly", priority: "0.9" },
    { loc: `${baseUrl}/wedding-hall-vijayawada`, lastmod: today, changefreq: "monthly", priority: "0.9" },
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<?xml-stylesheet type="text/xsl" href="/sitemap.xsl"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${entries
    .map(
      (e) => `
  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
    ${e.loc === `${baseUrl}/` ? `
    <image:image>
      <image:loc>${baseUrl}/heroimg1.jpg</image:loc>
      <image:title>SLS Banquets Hall in Vijayawada</image:title>
      <image:caption>Premium mini function hall in Kandrika, Vijayawada</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/heroimg2.jpg</image:loc>
      <image:title>Wedding Hall in Vijayawada</image:title>
      <image:caption>Elegant wedding venue with modern amenities</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/heroimg3.jpg</image:loc>
      <image:title>Function Hall in Kandrika</image:title>
      <image:caption>Perfect for receptions and celebrations</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/galleryimg1.jpg</image:loc>
      <image:title>SLS Banquets Gallery</image:title>
      <image:caption>Beautiful event spaces and decorations</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/galleryimg2.jpg</image:loc>
      <image:title>Event Venue in Vijayawada</image:title>
      <image:caption>Professional event setup and facilities</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/galleryimg3.jpg</image:loc>
      <image:title>Banquet Hall Interior</image:title>
      <image:caption>Elegant interiors and modern amenities</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/galleryimg4.jpg</image:loc>
      <image:title>Party Hall in Vijayawada</image:title>
      <image:caption>Perfect for birthday parties and celebrations</image:caption>
    </image:image>
    <image:image>
      <image:loc>${baseUrl}/galleryimg5.jpg</image:loc>
      <image:title>Cultural Event Space</image:title>
      <image:caption>Ideal for cultural programs and community events</image:caption>
    </image:image>` : ''}
  </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}


