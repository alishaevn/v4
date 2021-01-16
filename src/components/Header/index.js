import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const PostWrapper = styled.nav`
	display: flex;
	justify-content: space-between;
`

const Header = ({ siteTitle, siteDescription }) => (
	<PostWrapper>
		<Link to='/'>
			<h1>Home</h1>
		</Link>
		<Link to='/blog'>
			<h1>Blog</h1>
		</Link>
		{/* <p>{siteDescription}</p> */}
	</PostWrapper>
)

export default Header
