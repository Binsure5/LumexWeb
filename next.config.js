/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/LumexWeb',
  assetPrefix: '/LumexWeb/',
}

module.exports = nextConfig 