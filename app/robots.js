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
      "https://sls-banquets.vercel.app/sitemap.xml",
      "https://sls-banquets.vercel.app/sitemap-images.xml"
    ],
    host: "https://sls-banquets.vercel.app",
  };
}


