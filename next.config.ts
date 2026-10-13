import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/korkort-b",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
