/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true },

  webpack: (config, { isServer }) => {
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

  async redirects() {
    return [
      // Normalize lowercase "prophecy" to the canonical route
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

      // Petition → external app
      {
        source: '/petition/:path*',
        destination: 'https://phiers-civic-engagem-vopm05.abacusai.app/petition/:path*',
        permanent: false,
      },

      // Survey → external app
      {
        source: '/survey',
        destination: 'https://phiers-civic-engagem-vopm05.abacusai.app/survey',
        permanent: false,
      },
    ];
  }
};

module.exports = nextConfig;
