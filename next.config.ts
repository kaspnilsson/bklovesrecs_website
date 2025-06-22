import type { NextConfig } from "next";
import { links } from "./src/lib/links";

const nextConfig: NextConfig = {
  async redirects() {
    return links.map((link) => ({
      source: `/${link.shortText}`,
      destination: link.href,
      permanent: true,
    }));
  },
};

export default nextConfig;
