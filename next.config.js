/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["cs"],
    defaultLocale: "cs",
  },
  async redirects() {
    return [
      {
        source: "/impressum",
        destination: "/kontakt",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.paylibo.com',
        port: '',
        pathname: '/paylibo/generator/**',
      },
    ],
  },
  experimental: {
    serverActions: true,
  }
};

module.exports = nextConfig;