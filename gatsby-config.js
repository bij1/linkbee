require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `linkbee`,
    siteUrl: process.env.SITE_URL || process.env.URL || 'http://localhost:8000',
    user: {
      name: `@politiek_bij1`,
      link: `https://www.instagram.com/politiek_bij1/`,
      avatar: `avatar.png`
    }
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'Wings',
        fieldName: 'wings',
        url: process.env.GATSBY_WINGS_ENDPOINT || 'https://api.wings.dev',
        headers: {
          Authorization: `Bearer ${process.env.GATSBY_WINGS_APP_KEY}`,
          'X-Wings-Project': process.env.GATSBY_WINGS_PROJECT,
        },
      },
    },
  ],
}
