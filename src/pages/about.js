import React from 'react'
import SEO from 'react-seo-component'
import AboutText from '../components/AboutText'
import Header from '../components/Header'
import Layout from '../components/Layout'
import ProfilePic from '../components/ProfilePic'
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
			<ProfilePic
				marginBottom={50}
				marginTop={50}
			/>
			<Header title='about me' />
			<AboutText />
		</Layout>
	)
}

export default About
