/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["cs"],
    defaultLocale: "cs",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "api.paylibo.com",
        port: "",
        pathname: "/paylibo/generator/**",
      },
    ],
  },
};

module.exports = nextConfig;
