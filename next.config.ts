import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Thai is the default language; English lives at /en.
  async redirects() {
    return [{ source: "/", destination: "/th", permanent: false }];
  },
};

export default nextConfig;
