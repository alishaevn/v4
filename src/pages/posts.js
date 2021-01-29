import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import styled from 'styled-components'
import SEO from 'react-seo-component'
import Header from '../components/Header'
import Layout from '../components/Layout'
import useSiteMetadata from '../hooks/useSiteMetadata'

const IndexWrapper = styled.main``
const PostWrapper = styled.div``
const Image = styled(Img)`
  border-radius: 5px;
`

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
			<IndexWrapper>
				{data.allMdx.nodes.map(({ excerpt, fields, frontmatter, id }) => (
					<PostWrapper key={id}>
						<Link to={fields.slug}>
							{!!frontmatter.heroImage
								? <Image sizes={frontmatter.heroImage.childImageSharp.sizes} />
								: null
							}
							<h1>{frontmatter.title}</h1>
							{/* <p>{frontmatter.date}</p> */}
							{/* <p>{excerpt}</p> */}
						</Link>
					</PostWrapper>
				))}
			</IndexWrapper>
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
