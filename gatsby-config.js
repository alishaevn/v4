const { config } = require('./content/meta/config')
// const emoji = require('remark-emoji')
// import emoji from 'remark-emoji'

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
                // remarkPlugins: [emoji],
                gatsbyRemarkPlugins: [
                    // emoji,
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
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [{
                    resolve: 'gatsby-remark-emojis',
                    options: {
                        active: true, // Deactivate the plugin globally (default: true)
                        class: 'emoji-icon', // Add a custom css class
                        size: 16, // Select the size (available size: 16, 24, 32, 64)
                        styles: { // Add custom styles
                            display: 'inline',
                            margin: '0',
                            'margin-top' : '1px',
                            position: 'relative',
                            top: '5px',
                            width: '25px',
                        },
                    }
                }]
            }
        }
    ],
}
