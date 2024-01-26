/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cloudflare-ipfs.com","localhost","images.remotePatterns"],
  },
};

module.exports = nextConfig;
