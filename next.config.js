// next.config.js
module.exports = {
  experimental: {
    async rewrites() {
      return [
        {
          source: '/s/:uid',
          destination: '/s'
        }
      ]
    }
  }
}
