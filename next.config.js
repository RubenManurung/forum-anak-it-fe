/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    // images: { layoutRaw: true },
    styledComponents: true,
  },
  cssLoaderOptions: {
    url: false,
  },
  images: {
    domains: ["lorempixel.com"],
  },

  rewrites: function () {
    return [
      {
        source: "/myimages",
        destination: `http://lorempixel.com`,
      },
    ];
  },
};

module.exports = nextConfig;
