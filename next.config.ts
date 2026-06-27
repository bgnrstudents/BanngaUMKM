import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Set empty turbopack config to silence "webpack config with no turbopack config" error.
  // The /_global-error prerender bug is a known Next.js 16 bug that only affects
  // production static generation, not the dev server.
  turbopack: {},
};

export default nextConfig;
