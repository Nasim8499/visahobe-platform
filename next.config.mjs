/** @type {import('next').NextConfig} */
const isExport = process.env.NEXT_EXPORT === "1";
const basePath = process.env.NEXT_BASE_PATH || "";

const nextConfig = {
  reactStrictMode: true,
  ...(isExport
    ? {
        output: "export",
        images: { unoptimized: true },
        trailingSlash: true,
        ...(basePath ? { basePath, assetPrefix: basePath } : {}),
      }
    : {
        images: { remotePatterns: [{ protocol: "https", hostname: "images.unsplash.com" }] },
      }),
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
