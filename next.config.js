/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  images: {
    loader: 'custom',
  }
};

module.exports = nextConfig;
