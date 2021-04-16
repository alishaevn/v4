import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import SEO from 'react-seo-component'
import styled from 'styled-components'
import BlogPost from '../components/BlogPost'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Layout from '../components/Layout'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { devices } from '../utilities/devices'

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
			) {
				nodes {
					id
					excerpt(pruneLength: 200)
					fields { slug }
					frontmatter {
						title
						date(formatString: "MMMM DD, YYYY")
						blurb
						category
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
			<Header title='Blog' details={true} />
			<Wrapper>
				{notes.allMdx.nodes.map(({ fields, frontmatter, id }) => (
					<BlogPost
						fields={fields}
						frontmatter={frontmatter}
						id={id}
					/>
				))}
			</Wrapper>
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
