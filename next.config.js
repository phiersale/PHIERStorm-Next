/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
  // This is the secret weapon: it keeps the build from trying to do too much at once
  experimental: {
    workerThreads: false,
    cpus: 1
  }
};

module.exports = nextConfig;
