import { graphql } from 'gatsby'
import React from 'react'
import SEO from 'react-seo-component'
import BlogPost from '../components/BlogPost'
import Header from '../components/Header'
import Layout from '../components/Layout'
import useSiteMetadata from '../hooks/useSiteMetadata'

const Posts = ({ data }) => {
	const {
		description,
		title,
		image,
		siteUrl,
		siteLanguage,
		siteLocale,
		twitterUsername,
	} = useSiteMetadata()

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
			<Header title='blog posts' />
			<main>
				{data.allMdx.nodes.map(({ excerpt, fields, frontmatter, id }) => (
					<BlogPost
						rightAligned={true}
						excerpt={excerpt}
						fields={fields}
						frontmatter={frontmatter}
						id={id}
					/>
				))}
			</main>
		</Layout>
	)
}

export default Posts

export const query = graphql`
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
`
