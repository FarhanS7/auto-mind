/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsHmrCache: false, // Disable server components HMR cache
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "menkgddjxhdxdutndgyl.supabase.co",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "frame-src 'self' https://automind.created.app/",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
