import React from 'react'
import NavBar from '../NavBar/index'
import { AppStyles } from './styles'

const Layout = ({ children }) => (
	<AppStyles>
		<NavBar />
		{children}
	</AppStyles>
)

export default Layout
