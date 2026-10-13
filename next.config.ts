import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // GitHub Pages project sites are served from /<repository-name>/.
  output: "export",
  basePath: "/korkort-b",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
