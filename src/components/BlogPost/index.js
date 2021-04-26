import React from 'react'
import {
	Blurb,
	Meta,
	PostWrapper,
	StyledLink,
	Thumbnail,
	Title,
} from './styles'

const BlogPost = ({ fields, frontmatter, id }) => (
	<PostWrapper key={id}>

		<StyledLink to={fields.slug}>
			<Thumbnail />
			<Meta>
				{frontmatter.date} | {frontmatter.category}
			</Meta>
			<Title>
				{frontmatter.title}
			</Title>
			<Blurb>
				{frontmatter.blurb}
			</Blurb>
		</StyledLink>
	</PostWrapper>
)

export default BlogPost
