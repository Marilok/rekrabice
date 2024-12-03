/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true, // TODO: change later
  },
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
      {
        protocol: "https",
        hostname: "vlzmneddlwojekmklqnf.supabase.co",
        port: "",
        pathname: "/storage/**",
      },
    ],
  },
};

module.exports = nextConfig;
