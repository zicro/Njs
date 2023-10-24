/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'pn-dfe.xyz',
        port: '',
        pathname: '/img/msq_02.ico/**',
      },
    ],
  },
}

module.exports = nextConfig
