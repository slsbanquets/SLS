import { NextResponse } from "next/server";

export async function GET() {
  const baseUrl = "https://sls-banquets.vercel.app";
  const today = new Date().toISOString().split("T")[0];

  const images = [
    {
      loc: `${baseUrl}/heroimg1.jpg`,
      title: "SLS Banquets Hall in Vijayawada",
      caption: "Premium mini function hall in Kandrika, Vijayawada with modern amenities",
      license: `${baseUrl}/`,
    },
    
    {
      loc: `${baseUrl}/heroimg2.jpg`,
      title: "Wedding Hall in Vijayawada",
      caption: "Elegant wedding venue with professional stage setup and decorations",
      license: `${baseUrl}/`,
    },
    {
      loc: `${baseUrl}/heroimg3.jpg`,
      title: "Function Hall in Kandrika",
      caption: "Perfect venue for receptions, parties, and celebrations in Vijayawada",
      license: `${baseUrl}/`,
    },
    {
      loc: `${baseUrl}/galleryimg1.jpg`,
      title: "SLS Banquets Gallery - Event Space",
      caption: "Beautiful event spaces with elegant decorations and modern facilities",
      license: `${baseUrl}/`,
    },
    {
      loc: `${baseUrl}/galleryimg2.jpg`,
      title: "Event Venue in Vijayawada",
      caption: "Professional event setup with stage, lighting, and sound system",
      license: `${baseUrl}/`,
    },
    {
      loc: `${baseUrl}/galleryimg3.jpg`,
      title: "Banquet Hall Interior",
      caption: "Elegant interiors with air-conditioning and comfortable seating",
      license: `${baseUrl}/`,
    },
    {
      loc: `${baseUrl}/galleryimg4.jpg`,
      title: "Party Hall in Vijayawada",
      caption: "Perfect for birthday parties, anniversaries, and family celebrations",
      license: `${baseUrl}/`,
    },
    {
      loc: `${baseUrl}/galleryimg5.jpg`,
      title: "Cultural Event Space",
      caption: "Ideal venue for cultural programs, community events, and performances",
      license: `${baseUrl}/`,
    },
    {
      loc: `${baseUrl}/logo.png`,
      title: "SLS Banquets Logo",
      caption: "Official logo of SLS Banquets - Premium function hall in Vijayawada",
      license: `${baseUrl}/`,
    },
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    ${images
      .map(
        (img) => `
    <image:image>
      <image:loc>${img.loc}</image:loc>
      <image:title>${img.title}</image:title>
      <image:caption>${img.caption}</image:caption>
      <image:license>${img.license}</image:license>
    </image:image>`
      )
      .join("")}
  </url>
</urlset>`;

  return new NextResponse(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
}
