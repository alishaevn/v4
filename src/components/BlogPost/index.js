import React from 'react'
import {
	Excerpt,
	Meta,
	PostWrapper,
	StyledLink,
	Title,
} from './styles'

const BlogPost = ({ fields, frontmatter, id }) => (
	<PostWrapper key={id}>
		<StyledLink to={fields.slug}>
			<Title>
				{frontmatter.title}
			</Title>
			<Meta>
				{frontmatter.date} | {frontmatter.category}
			</Meta>
			<Excerpt>
				{frontmatter.blurb}
			</Excerpt>
		</StyledLink>
	</PostWrapper>
)

export default BlogPost
