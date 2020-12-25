import { graphql, Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'

const App = ({ data }) => (
	<Layout>
		{data.allMdx.nodes.map(({ excerpt, fields, frontmatter, id }) => (
			<div key={id}>
				<Link to={fields.slug}>
					<h1>{frontmatter.title}</h1>
					<p>{frontmatter.date}</p>
					<p>{excerpt}</p>
				</Link>
			</div>
        ))}
	</Layout>
)

export default App

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
				frontmatter {
					title
					date
				}
				fields { slug }
			}
		}
	}
`