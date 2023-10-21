/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

const nextConfig = {
    output: 'export',
}

// module.exports = nextConfig
module.exports = withVideos(nextConfig)

