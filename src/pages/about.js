import React from 'react'
import SEO from 'react-seo-component'
import Layout from '../components/Layout'
import useSiteMetadata from '../hooks/useSiteMetadata'

const About = () => {
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
		</Layout>
	)
}

export default About
