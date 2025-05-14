import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com'], // Add any image domains you need to use
  },
  // Enable experimental features as needed
  // experimental: {
  //   serverActions: true,
  // },
};

export default nextConfig;
