import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingIncludes: {
    "/*": ["./XHS/ResearchArchive/**/*"]
  }
};

export default nextConfig;
