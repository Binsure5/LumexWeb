/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages 설정 제거
  // basePath: '/LumexWeb',
  // assetPrefix: '/LumexWeb/',
}

module.exports = nextConfig 