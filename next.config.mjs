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
  // Tối ưu CSS để tránh render blocking (yêu cầu gói critters)
  experimental: {
    optimizeCss: true,
  },
  async redirects() {
    return [
      {
        source: '/tours/cambodias-lake-rivers-mountains/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/family-cruises/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cruises/gypsy/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cruises/the-jahan/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/what-countries-does-the-mekong-river-pass-through/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/deals/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/travel-insurance/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cruises/mekong-navigator/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/tours/family-adventure-holiday-vietnam/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cruises/family-adventure-holiday-vietnam/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cruises/stellar-of-the-seas/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cgi-sys/suspendedpage.cgi',
        destination: '/',
        permanent: true,
      },
      {
        source: '/charter-cruises/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/family-private-cruise.html',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
