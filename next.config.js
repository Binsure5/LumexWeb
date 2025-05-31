/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // 커스텀 도메인을 사용할 때는 basePath와 assetPrefix가 필요하지 않습니다
  // basePath: '/LumexWeb',
  // assetPrefix: '/LumexWeb/',
  trailingSlash: true,
}

module.exports = nextConfig 