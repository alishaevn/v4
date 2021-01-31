import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from 'react-seo-component'
import BlogPost from '../components/BlogPost'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Layout from '../components/Layout'
import ProfilePic from '../components/ProfilePic'
import useSiteMetadata from '../hooks/useSiteMetadata'

const App = () => {
	const {
		description,
		title,
		image,
		siteUrl,
		siteLanguage,
		siteLocale,
		twitterUsername,
	} = useSiteMetadata()

	const posts = useStaticQuery(graphql`
		query SITE_INDEX_QUERY {
			allMdx(
				sort: {
					fields: [ frontmatter___date ],
					order: DESC,
				},
				filter: {
					frontmatter: {
						published: { eq: true },
					},
				},
			) {
				nodes {
					id
					excerpt(pruneLength: 250)
					fields { slug }
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						blurb
						category
						heroImage {
							publicURL
							childImageSharp {
							sizes(maxWidth: 300, traceSVG: { color: "#639" }) {
								...GatsbyImageSharpSizes_tracedSVG
							}
							}
						}
					}
				}
			}
		}
	`)

	return (
		<Layout>
			<SEO
				title={title}
				description={description}
				image={`${siteUrl}${image}`}
				pathname={siteUrl}
				siteLanguage={siteLanguage}
				siteLocale={siteLocale}
				twitterUsername={twitterUsername}
			/>
			<Landing />
			<ProfilePic
				marginBottom={50}
				marginTop={130}
			/>
			<Header title='recent posts' />
			{posts.allMdx.nodes.map(({ fields, frontmatter, id }) => (
				<BlogPost
					rightAligned={true}
					fields={fields}
					frontmatter={frontmatter}
					id={id}
				/>
			))}
		</Layout>
	)
}

export default App

/*
  Resources:
  - https://www.freecodecamp.org/news/build-a-developer-blog-from-scratch-with-gatsby-and-mdx/
 */
