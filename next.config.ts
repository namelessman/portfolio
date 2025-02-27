import type { NextConfig } from "next";
import packageJson from "./package.json";

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.PAGES_BASE_PATH || `/${packageJson.name}`,
};

export default nextConfig;
