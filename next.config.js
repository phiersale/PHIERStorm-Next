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
    ];
  },
  async redirects() {
    return [
      {
        source: '/prophecy',
        destination: '/Prophecy',
        permanent: true,
      },
      {
        source: '/prophecy/:path*',
        destination: '/Prophecy/:path*',
        permanent: true,
      },
      {
        source: '/prophesy',
        destination: '/Prophecy',
        permanent: true,
      },
      {
        source: '/prophesy/:path*',
        destination: '/Prophecy/:path*',
        permanent: true,
      },
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
