import { Link } from 'gatsby'
import React from 'react'
import { H1, Logo, NavBar, NavLinks } from './styles'
import logo from '../../../assets/images/seafoam_horizontal.png'

const Header = () => (
	<NavBar>
		<Logo src={logo} />
		<NavLinks>
			<Link to='/'>
				<H1>home</H1>
			</Link>
			<Link to='/about'>
				<H1>about</H1>
			</Link>
			<Link to='/posts'>
				<H1>posts</H1>
			</Link>
		</NavLinks>
	</NavBar>
)

export default Header
