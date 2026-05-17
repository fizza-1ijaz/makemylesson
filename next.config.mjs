/** @type {import('next').NextConfig} */

const flutterHostingOrigin = (
  process.env.MML_FLUTTER_HOSTING_ORIGIN ||
  process.env.NEXT_PUBLIC_MML_FLUTTER_HOSTING_ORIGIN ||
  'https://makemylesson.app'
).replace(/\/$/, '')

const nextConfig = {
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  poweredByHeader: false,
  compress: true,
  generateEtags: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  async rewrites() {
    return [
      {
        source: '/app',
        destination: `${flutterHostingOrigin}/app`,
      },
      {
        source: '/app/:path*',
        destination: `${flutterHostingOrigin}/app/:path*`,
      },
    ]
  },
}

export default nextConfig
