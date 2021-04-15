import { graphql, Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import SEO from 'react-seo-component'
import { getImage } from 'gatsby-plugin-image'
import React from 'react'
import useSiteMetadata from '../hooks/useSiteMetadata'
import { TitleImage } from '../components/markdown-styles/TitleImage'
import { NoteLink, Wrapper } from '../components/markdown-styles/BottomNav'
import { Date } from '../components/markdown-styles/Paragraph'
import Layout from '../components/Layout'

const Post = ({ data, pageContext }) => {
	const { body, fields, frontmatter } = data.mdx
	const { date, titleImage } = frontmatter
	const { previous, next } = pageContext
	const img = getImage(titleImage)

	const {
		authorName,
		description,
		title,
		image,
		siteUrl,
		siteLanguage,
		siteLocale,
		twitterUsername,
	} = useSiteMetadata()

	return (
		<Layout>
			<SEO
				title={title}
				description={description}
				image={
					titleImage === null
						? `${siteUrl}${image}`
						: `${siteUrl}${titleImage.publicURL}`
				}
				pathname={`${siteUrl}${fields.slug}`}
				siteLanguage={siteLanguage}
				siteLocale={siteLocale}
				twitterUsername={twitterUsername}
				author={authorName}
				article={true}
				publishedDate={date}
				// modifiedDate={new Date().toISOString()}
			/>
			<TitleImage image={img} alt='Title Image' />
			<Date>{date}</Date>
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
		mdx(fields: { slug: { eq: $path } }) {
			body
			fields {
				slug
			}
			frontmatter {
				title
				date(formatString: "MMMM DD, YYYY")
				titleImage {
					childImageSharp {
						gatsbyImageData(
							width: 200
							placeholder: BLURRED
							formats: [AUTO, WEBP, AVIF]
						)
					}
				}
			}
		}
	}
`