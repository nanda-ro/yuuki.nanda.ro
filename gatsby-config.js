module.exports = {
    siteMetadata: {
      title: "YUUKI SAKAKIBARA",
      description: "",
    },
    plugins: [
      `gatsby-plugin-top-layout`,
      `gatsby-plugin-mui-emotion`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-sharp`,
      `gatsby-plugin-image`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `blog`,
          path: `${__dirname}/src/blog/`,
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
          gatsbyRemarkPlugins: [
            `gatsby-remark-prismjs`,
          ],
        },
      },
    ],
  };
  