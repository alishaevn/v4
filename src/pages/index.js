import React from 'react'
import { navigate } from 'gatsby'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from 'react-seo-component'
import styled from 'styled-components'
import BlogPost from '../components/BlogPost'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Layout from '../components/Layout'
import ProfilePic from '../components/ProfilePic'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { devices } from '../utilities/devices'
import { coral, seaFoam, white } from '../utilities/colors'

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

	const notes = useStaticQuery(graphql`
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
				limit: 3,
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
				marginBottom={75}
				marginTop={75}
			/>
			<Header title='my latest notes' />
			<Wrapper>
				{notes.allMdx.nodes.map(({ fields, frontmatter, id }) => (
					<BlogPost
						fields={fields}
						frontmatter={frontmatter}
						id={id}
					/>
				))}
			</Wrapper>
			<Button onClick={() => { navigate('/notes') }}>
				Blog
			</Button>
		</Layout>
	)
}

export default App

const Wrapper = styled.div`
	@media ${devices.tablet} { 
		display: flex;
		flex-wrap:  wrap;
		justify-content: space-between;
	}
`

const Button = styled.button`
	font-family: 'quicksand';
	color: ${white};
	background-color: ${coral};
	padding: 6px 10px;
	font-size: 20px;
	border: none;
	border-radius: 5px;
	float: right;
`

/*
	Resources:
	- https://www.freecodecamp.org/news/build-a-developer-blog-from-scratch-with-gatsby-and-mdx/
 */
