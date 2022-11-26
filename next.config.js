/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "upload.wikimedia.org",
      "cdn.cdnlogo.com",
      "scontent-lax3-2.xx.fbcdn.net",
      "images.pexels.com",
    ],
  },
};

module.exports = nextConfig;
