import { graphql, useStaticQuery } from 'gatsby'

// several of the metadata queries are specific to 'react-seo-component'
const useSiteMetadata = () => {
	const { site } = useStaticQuery(
		graphql`
			query SITE_METADATA_QUERY {
				site {
					siteMetadata {
						authorName
						siteLanguage
						siteLocale
						siteUrl
						title
						authorGithub
						authorTwitterUsername
						authorLinkedin
						description
						siteImage
					}
				}
			}
		`
	)

	return site.siteMetadata
}

export default useSiteMetadata