// installed esm to allow for the "import" keywords in the config and node files
// https://github.com/gatsbyjs/gatsby/issues/7810#issuecomment-646866945
import { config } from './content/meta/config'
import emoji from 'remark-emoji'

export default {
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
