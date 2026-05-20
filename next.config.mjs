/** @type {import('next').NextConfig} */

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
  // /app/* is served by src/app/app/[[...path]]/page.jsx (Navbar + Flutter iframe).
  // Flutter static assets can still be loaded from the iframe origin directly.
}

export default nextConfig
