/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    basePath: '/github-pages',
}

// module.exports = nextConfig
module.exports = withVideos(nextConfig)

