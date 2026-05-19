/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },
  // Removed experimental settings to fix memory heap errors
  webpack: (config, { isServer }) => {
    // Optimize memory usage
    if (!isServer) {
      config.optimization = {
        ...config.optimization,
        splitChunks: {
          chunks: 'all',
          minSize: 20000,
          maxSize: 100000,
        },
      };
    }
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/petition',
        destination: '/Prophecy',
      },
      {
        source: '/Petition',
        destination: '/Prophecy',
      },
      {
        source: '/prophecy',
        destination: '/Prophecy',
      },
      {
        source: '/prophecy/:path*',
        destination: '/Prophecy/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/petition/:path*',
        destination: 'https://phiers-civic-engagem-vopm05.abacusai.app/petition/:path*',
        permanent: false,
      },
      {
        source: '/survey',
        destination: 'https://phiers-civic-engagem-vopm05.abacusai.app/survey',
        permanent: false,
      },
    ];
  }
};

module.exports = nextConfig;
