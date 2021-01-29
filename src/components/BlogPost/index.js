import React from 'react'
import {
	Excerpt,
	Meta,
	PostWrapper,
	StyledLink,
	Title,
} from './styles'

const BlogPost = ({ rightAligned, fields, frontmatter, id }) => (
	<PostWrapper rightAligned={rightAligned} key={id}>
		<StyledLink to={fields.slug}>
			<Title rightAligned={rightAligned}>
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
