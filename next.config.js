/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "media-exp1.licdn.com",
      "lh3.googleusercontent.com",
      "ik.imagekit.io",
    ],
  },
};

module.exports = nextConfig;
