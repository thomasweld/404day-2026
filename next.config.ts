import type { NextConfig } from "next";

const isGithubPages = process.env.NEXT_PUBLIC_GITHUB_PAGES === "true";
const basePath = isGithubPages ? "/404day" : "";
const assetPrefix = isGithubPages ? "/404day/" : undefined;

const nextConfig: NextConfig = {
  ...(isGithubPages && { output: "export", trailingSlash: true }),
  basePath,
  ...(assetPrefix && { assetPrefix }),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
