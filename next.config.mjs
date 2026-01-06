/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations
  compress: true, // Enable gzip compression
  
  experimental: {
    serverComponentsHmrCache: false, // Disable server components HMR cache
    // Increase body size limit for Server Actions (for image uploads)
    serverActions: {
      bodySizeLimit: '10mb', // Allow up to 10MB for car image uploads
    },
  },
  
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unmvwhunylxlhktwayrt.supabase.co",
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
