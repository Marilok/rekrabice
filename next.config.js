/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async redirects() {
    return [
      {
        source: "/impressum",
        destination: "/kontakt",
        permanent: true,
      },
    ];
  },
  i18n: {
    locales: ["cs"],
    defaultLocale: "cs",
  },
};

module.exports = nextConfig;

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({});
