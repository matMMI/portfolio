const withPWA = require("next-pwa")({
  dest: "public",
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    unoptimized: true,
  },
};
module.exports = withPWA(nextConfig);
