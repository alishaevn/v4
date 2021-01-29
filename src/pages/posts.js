import React from 'react'
import SEO from 'react-seo-component'
import BlogPost from '../components/BlogPost'
import Header from '../components/Header'
import Layout from '../components/Layout'
import useSiteMetadata from '../hooks/useSiteMetadata'

const Posts = ({ data }) => {
	const {
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
				image={`${siteUrl}${image}`}
				pathname={siteUrl}
				siteLanguage={siteLanguage}
				siteLocale={siteLocale}
				twitterUsername={twitterUsername}
			/>
			<Header title='blog posts' />
			<main>
				{data.allMdx.nodes.map(({ fields, frontmatter, id }) => (
					<BlogPost
						fields={fields}
						frontmatter={frontmatter}
						id={id}
					/>
				))}
			</main>
		</Layout>
	)
}

export default Posts
