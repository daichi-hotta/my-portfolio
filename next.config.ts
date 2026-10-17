import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static HTML export to out/, served by Cloudflare Workers (wrangler.jsonc)
  output: 'export',
};

export default nextConfig;
