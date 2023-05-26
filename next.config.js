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
      },{
        source: "/obsluha",
        destination: "/obsluha/prijmout",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: process.env.ANALYZE === 'true',
// })
// module.exports = withBundleAnalyzer({});
