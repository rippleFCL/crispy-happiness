/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

const nextConfig = {
    output: 'export',
    reactStrictMode: true,
}

// module.exports = nextConfig
module.exports = withVideos(nextConfig)

