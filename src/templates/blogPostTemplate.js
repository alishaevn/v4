import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Header1 } from '../components/markdown-styles/Headers'
import { NoteLink, Wrapper } from '../components/markdown-styles/BottomNav'
import { Date } from '../components/markdown-styles/Paragraph'
import Layout from '../components/Layout'

const Post = ({ data, pageContext }) => {
	const { frontmatter, body } = data.mdx
	const { previous, next } = pageContext

	return (
		<Layout>
			<Header1>{frontmatter.title}</Header1>
			<Date>{frontmatter.date}</Date>
			<MDXRenderer>{body}</MDXRenderer>
			<Wrapper>
				{previous && (
					<Link to={previous.fields.slug}>
						<NoteLink>{`<< ${previous.frontmatter.title}`}</NoteLink>
					</Link>
				)}
				{next && (
					<Link to={next.fields.slug}>
						<NoteLink>{`${next.frontmatter.title} >>`}</NoteLink>
					</Link>
				)}
			</Wrapper>
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