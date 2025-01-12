/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
    siteMetadata: {
        title: `Lanyon`,
        tagline: `A Gatsby Theme ported from the Jekyll Theme`,
        description: `Gatsby starter built on top of hello-world starter, design ported from Lanyon Jekyll theme`,
        url: `https://www.doe.com`,
        image: `/images/gatsby-icon.png`,
        twitterUsername: `@mediasittich`,
    },
    plugins: [
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `content`,
                path: `${__dirname}/content/`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-prismjs`,
                        options: {}
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 720,
                        }
                    },
                    {
                        resolve: "gatsby-remark-external-links",
                        options: {
                            target: "_blank",
                            rel: "nofollow noopener noreferrer"
                        }
                    }
                ]
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `gatsby-starter-lanyon`,
                short_name: `starter`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `minimal-ui`,
                icon: `src/images/gatsby-icon.png`,
            }
        },
        `gatsby-plugin-offline`,
    ],
}
