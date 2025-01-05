/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
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
    assetPrefix: isProd ? '/porfolio/' : '',
    basePath: isProd ? '/porfolio' : '',
    output: 'export'
  };
  
  export default nextConfig;  
