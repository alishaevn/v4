import React from 'react'
import { Link } from 'gatsby'
import { Image, PostWrapper } from './styles'

const BlogPost = ({ excerpt, fields, frontmatter, id }) => (
	<PostWrapper key={id}>
		<Link to={fields.slug}>
			{!!frontmatter.heroImage
				? <Image sizes={frontmatter.heroImage.childImageSharp.sizes} />
				: null
			}
			<h1>{frontmatter.title}</h1>
			{/* <p>{frontmatter.date}</p> */}
			{/* <p>{excerpt}</p> */}
		</Link>
	</PostWrapper>
)

export default BlogPost
