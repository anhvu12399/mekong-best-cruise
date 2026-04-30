/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Tối ưu images: ưu tiên AVIF → WebP, cho phép ảnh từ Unsplash
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // Cache ảnh 1 năm
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Nén output để giảm bundle size
  compress: true,
  // Tắt X-Powered-By header (bảo mật + nhẹ hơn)
  poweredByHeader: false,
}

export default nextConfig
