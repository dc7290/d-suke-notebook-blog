module.exports = {
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200],
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/posts',
        permanent: true,
      },
    ]
  },
}
