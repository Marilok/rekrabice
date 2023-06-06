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
  experimental: {
    serverActions: true,
  }
};

module.exports = nextConfig;