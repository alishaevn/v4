import React from 'react'
import useSiteMetadata from '../../hooks/useSiteMetadata'
import Header from '../Header/index'

const Layout = ({ children }) => {
	const { title, description } = useSiteMetadata()

	return (
		<AppStyles>
			<Header siteTitle={title} siteDescription={description} />
			{children}
		</AppStyles>
	)
}

export default Layout
