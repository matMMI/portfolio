/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
  css: {
    loaderOptions: {
      minimize: true,
      sourceMap: true,
    },
    postcssOptions: {
      plugins: [require("autoprefixer")],
    },
  },
};

module.exports = nextConfig;
