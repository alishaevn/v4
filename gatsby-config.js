const siteMetadata = {
	authorName: `Alisha Evans`,
	description: `Alisha Evans is a Software Engineer currently based in San Diego, CA.`,
	image: `/static/default-image.jpg`,
	siteLanguage: `en-us`,
	siteLocale: `en_us`,
	siteUrl: `https://thelocalhost.blog`,
	title: `My Blog`,
	twitterUsername: `@thatgirlt0nii`,
}

module.exports = {
	siteMetadata: siteMetadata,
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				extensions: [`.mdx`, `.md`],
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: { maxWidth: 590 },
					},
				],
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: { maxWidth: 590 },
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: { path: `${__dirname}/posts`, name: `posts` },
		},
	],
}
