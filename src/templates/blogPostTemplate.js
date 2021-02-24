import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import Header1 from '../components/markdown-styles/Header1'
import { Next, Previous } from '../components/markdown-styles/BottomNav'
import { Date } from '../components/markdown-styles/Paragraphs'
import Layout from '../components/Layout'

const Post = ({ data, pageContext }) => {
	const { frontmatter, body } = data.mdx
	const { previous, next } = pageContext

	return (
		<Layout>
			<Header1>{frontmatter.title}</Header1>
			<Date>{frontmatter.date}</Date>
			<MDXRenderer>{body}</MDXRenderer>
			{previous === false ? null : (
				<>
					{previous && (
						<Link to={previous.fields.slug}>
							<Previous>{`<< ${previous.frontmatter.title}`}</Previous>
						</Link>
					)}
				</>
			)}
			{next === false ? null : (
				<>
					{next && (
						<Link to={next.fields.slug}>
							<Next>{`${next.frontmatter.title} >>`}</Next>
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