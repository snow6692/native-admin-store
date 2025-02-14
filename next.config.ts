import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "fagcpbdhiolbesxahstg.supabase.co",
        protocol: "https",
      },
    ],
  },
};

export default nextConfig;
