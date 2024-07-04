// @ts-check


/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'd2seqvvyy3b8p2.cloudfront.net',
      //   port: ''
      //   // pathname: '/trefle/**',
      // },
      {
        protocol: 'https',
        hostname: 'perenual.com',
        port: '',
        pathname: '/storage/**'
      }
    ]
  }
};

export default nextConfig;