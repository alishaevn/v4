import React from 'react'
import NavBar from '../NavBar/index'
import { AppStyles } from '../../utilities/responsive'

const Layout = ({ children }) => (
	<AppStyles>
		<NavBar />
		{children}
	</AppStyles>
)

export default Layout
