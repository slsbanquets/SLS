export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin/", "/api/", "/_next/", "/private/"],
        crawlDelay: 1,
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/admin/", "/api/", "/_next/", "/private/"],
        crawlDelay: 0,
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/admin/", "/api/", "/_next/", "/private/"],
        crawlDelay: 1,
      },
    ],
    sitemap: [
      "https://www.slsbanquets.com/sitemap.xml",
      "https://www.slsbanquets.com/sitemap-images.xml"
    ],
    host: "https://www.slsbanquets.com",
  };
}


