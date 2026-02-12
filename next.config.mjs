/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure Next.js treats this project directory as the workspace root
  outputFileTracingRoot: process.cwd(),
  images: {
    // Allow external images in JSON-LD references if needed in the future
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
      },
      {
        protocol: "https",
        hostname: "www.slsbanquets.com",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/favicon.ico",
        destination: "/logo.png",
      },
    ];
  },
};

export default nextConfig;
