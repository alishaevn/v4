import React from 'react'
import {
	Excerpt,
	Meta,
	PostWrapper,
	StyledLink,
	Thumbnail,
	Title,
} from './styles'

const BlogPost = ({ excerpt, fields, frontmatter, id }) => (
	<PostWrapper key={id}>
		<StyledLink to={fields.slug}>
			<Thumbnail />
			<Meta>
				{frontmatter.date}
			</Meta>
			<Title>
				{frontmatter.title}
			</Title>
			<Excerpt>
				{excerpt}
			</Excerpt>
		</StyledLink>
	</PostWrapper>
)

export default BlogPost
