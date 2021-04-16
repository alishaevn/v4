import React from 'react'
import {
	Blurb,
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
			<Blurb>
				{frontmatter.blurb}
			</Blurb>
		</StyledLink>
	</PostWrapper>
)

export default BlogPost
