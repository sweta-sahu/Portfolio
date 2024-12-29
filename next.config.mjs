/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/:path*',
          destination: '/',
        },
      ];
    },
    reactStrictMode: true,
  };
  
  export default nextConfig;  
