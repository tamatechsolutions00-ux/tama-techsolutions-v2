import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["172.20.10.3"],

  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;