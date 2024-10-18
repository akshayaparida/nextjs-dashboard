/** /** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    // Add any valid experimental features here
    incrementalCacheHandlerPath: true, // Example of valid experimental feature
  },
  // You can also include other Next.js configurations here
  reactStrictMode: true,
  swcMinify: true,
};

export default nextConfig;
