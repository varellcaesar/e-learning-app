import type { NextConfig } from "next";
import withBundleAnalyzer from "@next/bundle-analyzer";

const bundleAnalyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});
const nextConfig: NextConfig = {
  /* config options here */
  nx: {
    svgr: true,
  },
  images: {
    domains: ['images.unsplash.com'],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });
    return config;
  },
  reactStrictMode: true,
};

export default bundleAnalyzer(nextConfig);
