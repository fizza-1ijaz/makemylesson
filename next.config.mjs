/** @type {import('next').NextConfig} */

const flutterHostingOrigin = (
  process.env.MML_FLUTTER_HOSTING_ORIGIN ||
  process.env.NEXT_PUBLIC_MML_FLUTTER_HOSTING_ORIGIN ||
  'https://makemylesson.app'
).replace(/\/$/, '')

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.dicebear.com',
        pathname: '/**',
      },
    ],
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
