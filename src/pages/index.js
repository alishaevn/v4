import React from 'react'
import { Link } from 'gatsby'
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
import { coral, seaFoam } from '../utilities/colors'
import '@fontsource/montserrat'

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
			<Link to='/posts'>
				<Wrapper>
					<Title>all posts</Title>
					<Line />
					<Arrow />
				</Wrapper>
			</Link>
		</Layout>
	)
}

export default App

const Arrow = styled.div`
	border: solid ${seaFoam};
	border-width: 0 3px 3px 0;
	display: inline-block;
	padding: 3px;
	transform: rotate(-45deg);
	-webkit-transform: rotate(-45deg);
`

const Line = styled.div`
	background-color: ${seaFoam};
	height: 3px;
	width: 50px;
	margin-left: 10px;
`

const Title = styled.p`
	color: ${coral};
	font-family: 'montserrat';
	font-size: 20px;
	letter-spacing: 1px;
	text-transform: uppercase;
	white-space: nowrap;
	font-weight: bold;
`

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 20px 0;
	justify-content: flex-end;

	// background-color: transparent;
	// border: none;
`

/*
  Resources:
  - https://www.freecodecamp.org/news/build-a-developer-blog-from-scratch-with-gatsby-and-mdx/
 */
