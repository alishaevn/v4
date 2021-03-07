import React from 'react'
import Footer from '../Footer'
import NavBar from '../NavBar'
import { AppStyles } from './styles'

const Layout = ({ children }) => (
	<AppStyles>
		<NavBar />
		{children}
		<Footer />
	</AppStyles>
)

export default Layout
