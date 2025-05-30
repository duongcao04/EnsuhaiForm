import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [{ hostname: 'assets.aceternity.com' }],
    },
    /* config options here */
    allowedDevOrigins: ['172.18.224.1'],
    eslint: {
        // Tắt ESLint trong quá trình build
        ignoreDuringBuilds: true,
    },
    typescript: {
        // Tắt TypeScript type checking trong quá trình build
        ignoreBuildErrors: true,
    },
}

export default nextConfig
