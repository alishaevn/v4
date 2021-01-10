import { graphql, useStaticQuery } from 'gatsby'

const useSiteMetadata = () => {
	const { site } = useStaticQuery(
		graphql`
			query SITE_METADATA_QUERY {
				site {
					siteMetadata {
						authorName
						description
						image
						siteLanguage
						siteLocale
						siteUrl
						title
						twitterUsername
					}
				}
			}
		`
	)

	return site.siteMetadata
}

export default useSiteMetadata