import { Link } from 'gatsby'
import React from 'react'
import { H1, PostWrapper } from './styles'

const Header = () => (
	<PostWrapper>
		<Link to='/'>
			<H1>home</H1>
		</Link>
		<Link to='/about'>
			<H1>about</H1>
		</Link>
		<Link to='/posts'>
			<H1>posts</H1>
		</Link>
	</PostWrapper>
)

export default Header
