import { Link } from 'gatsby'
import React from 'react'

const Header = ({ siteTitle, siteDescription }) => (
	<div>
		<Link to='/'>
			<h1>{siteTitle}</h1>
		</Link>
		<p>{siteDescription}</p>
	</div>
)

export default Header
