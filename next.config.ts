import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/cicdproject",
  assetPrefix:"/cicdproject/",
  images: {
    unoptimized:true
  }
};

export default nextConfig;
