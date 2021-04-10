const { config } = require('./content/meta/config')
const emoji = require('remark-emoji')

module.exports = {
    siteMetadata: config,
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                extensions: ['.mdx', '.md'],
                remarkPlugins: [emoji],
                gatsbyRemarkPlugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: { maxWidth: 590 },
                    },
                ],
                plugins: [
                    {
                        resolve: 'gatsby-remark-images',
                        options: { maxWidth: 590 },
                    },
                ],
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: { path: `${__dirname}/notes`, name: 'notes' },
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /svg/
                }
            }
        }
    ],
}
