import type { NextConfig } from "next";

// GitHub Pages serves a project site from /<repo>, so CI passes the repo name as the base path.
// Locally it stays empty and the site lives at the root.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  // Fully static output for GitHub Pages. The "/" -> "/th" redirect lives in app/(root)/page.tsx
  // because next.config redirects do not exist in a static export.
  output: "export",
  basePath,
  trailingSlash: true,
};

export default nextConfig;
