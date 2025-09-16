import type { NextConfig } from 'next';
import withSvgr from 'next-plugin-svgr';

const nextConfig: NextConfig = {
  /* config options here */
  output: 'standalone',
};

export default withSvgr(nextConfig);
