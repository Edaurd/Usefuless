module.exports = {
  siteMetadata: {
    title: "Usefuless",
    description:
      "A site about Useless Magikarp and Useful Gyarados Pokemon Card's",
    author: "@Edaurd",
    siteUrl: "https://cms.eduard.pw",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "http://main-usefuless.local/graphql",
      },
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#f3f1a8`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}