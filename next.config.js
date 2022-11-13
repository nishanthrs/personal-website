/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}
// Ref: https://www.npmjs.com/package/@next/mdx
const withMDX = require('@next/mdx')()

module.exports = nextConfig
module.exports = withMDX()
