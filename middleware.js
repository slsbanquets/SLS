import { NextResponse } from "next/server";

export function middleware(request) {
  const url = new URL(request.url);
  const host = request.headers.get("host") || "";

  const canonicalHost = "www.slsbanquets.com";

  // Redirect any vercel.app subdomain to canonical domain
  const isVercel = host.endsWith(".vercel.app");

  // Force www on apex and ensure canonical host
  const isApex = host === "slsbanquets.com";
  const isCanonical = host === canonicalHost;

  if (isVercel || isApex || !isCanonical) {
    url.protocol = "https:";
    url.host = canonicalHost;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Apply to all paths except internal assets and API routes that shouldn't redirect
    "/((?!_next/|favicon.ico|robots.txt|sitemap.xml|sitemap-images.xml|sitemap.xsl).*)",
  ],
};

