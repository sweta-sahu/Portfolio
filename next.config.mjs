/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    reactStrictMode: true,
    basePath: isProd ? '/Portfolio' : '',
    assetPrefix: isProd ? '/Portfolio/' : '',
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true,
    },
  };
  
  export default nextConfig;  
