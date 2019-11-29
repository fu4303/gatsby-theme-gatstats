const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Introducing GatStats',
    description:
      'GatStats is a dashboard for your tech blog, or a dashblog if you prefer? ',
    keywords: ['GatsbyJs', 'React', 'theme-ui'],
    siteURL: 'https://gatsby-theme-gatstats.netlify.com',
    siteImage: 'gatstats_1080x608.jpg',
    config: {
      headerHeight: 64,
      sideBarWidth: 240,
      twitter: 'pauliescanlon',
      github: 'pauliescanlon'
    }
  },
  plugins: ['@pauliescanlon/gatsby-theme-gatstats']
}
