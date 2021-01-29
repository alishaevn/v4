import React from 'react'
import { Link } from 'gatsby'
import { PostWrapper } from './styles'

const BlogPost = ({ background, excerpt, fields, frontmatter, id }) => (
	<PostWrapper background={background} key={id}>
		<Link to={fields.slug}>
			<h1>{frontmatter.title}</h1>
			<p>{frontmatter.date}</p>
			<p>{excerpt}</p>
		</Link>
	</PostWrapper>
)

export default BlogPost
