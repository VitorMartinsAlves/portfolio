import type { NextConfig } from "next";

// GitHub Pages hosts project sites below /<repository-name>/.
// Keep local development at http://localhost:3000.
const isGitHubPages = process.env.GITHUB_PAGES === "true";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: isGitHubPages ? "/portfolio" : "",
  images: {
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
