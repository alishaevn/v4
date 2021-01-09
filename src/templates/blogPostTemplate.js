import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Layout from '../components/Layout'

const Post = ({ data, pageContext }) => {
	const { frontmatter, body } = data.mdx
	const { previous, next } = pageContext

	return (
		<Layout>
			<h1>{frontmatter.title}</h1>
			<p>{frontmatter.date}</p>
			<MDXRenderer>{body}</MDXRenderer>
			{previous === false ? null : (
				<>
					{previous && (
						<Link to={previous.fields.slug}>
							<p>{previous.frontmatter.title}</p>
						</Link>
					)}
				</>
			)}
			{next === false ? null : (
				<>
					{next && (
						<Link to={next.fields.slug}>
							<p>{next.frontmatter.title}</p>
						</Link>
					)}
				</>
			)}
		</Layout>
	)
}

export default Post

export const query = graphql`
	query PostByPath($path: String!) {
		mdx(fields: {slug: {eq: $path}}) {
			body
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
			}
		}
	}
`