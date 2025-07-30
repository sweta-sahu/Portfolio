const isProd = true;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/Portfolio' : '',
  assetPrefix: isProd ? '/Portfolio/' : '',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;