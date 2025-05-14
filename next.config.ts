import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  devIndicators: false,
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/, // For files ending in svg
      issuer: /\.[jt]sx?$/, // Only applies to svgs that will be imported into JS/TS files
      use: [
        {
          loader: '@svgr/webpack', // use the SVGR loader
          options: {},
        },
      ],      
    });
    return config;
  },
};

export default nextConfig;
