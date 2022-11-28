/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
  basePath: '/',
}
// Ref: https://www.npmjs.com/package/@next/mdx
const withMDX = require('@next/mdx')()

module.exports = nextConfig
module.exports = withMDX()
