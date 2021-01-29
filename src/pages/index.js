import React from 'react'
import SEO from 'react-seo-component'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Layout from '../components/Layout'
import useSiteMetadata from '../hooks/useSiteMetadata'

const App = () => {
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
			<Landing />
			<Header title='recent posts' />
		</Layout>
	)
}

export default App
