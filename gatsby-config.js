// Note to John: This gatsby-config file is often used to bring in useful plugins,
//    and in this case it's also exporting some site metadata that layout.js is pulling in with graphql.
//    I'm still new to graphql myself so we'll be ok ignoring for now
module.exports = {
  siteMetadata: {
    title: `Poker For Good`,
    description: `Something really impactful so SEO will like us`,
    author: `@johnrjacobs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
