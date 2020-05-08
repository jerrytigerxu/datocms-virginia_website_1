require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Virginia Hutchinson`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: '38e95b6e8ceada0e86772b369b0f18',
      },
    },
  ],
}
