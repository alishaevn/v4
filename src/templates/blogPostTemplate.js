import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Layout from '../components/Layout'

const Post = ({ data }) => {
	const { frontmatter, body } = data.mdx

	return (
		<Layout>
			<h1>{frontmatter.title}</h1>
			<p>{frontmatter.date}</p>
			<MDXRenderer>{body}</MDXRenderer>
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
				date(formatString: "YYYY MMMM Do")
			}
		}
	}
`