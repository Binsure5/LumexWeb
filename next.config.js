/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/LumexWeb',
  assetPrefix: '/LumexWeb/',
  trailingSlash: true,
}

module.exports = nextConfig 