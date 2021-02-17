import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../../../assets/images/seafoam_horizontal.png'
import { HamburgerMenu, Logo, MenuIcon, Navigation, NavLinks } from './styles'

const NavBar = () => {
	const [menuOpen, toggleMenuOpen] = useState(false)

	return (
		<Navigation>
			<Logo src={logo} />
			<HamburgerMenu>
				<MenuIcon
					menuOpen={menuOpen}
					onClick={() => toggleMenuOpen(!menuOpen)}
				>
					<div />
					<div />
					<div />
				</MenuIcon>
			</HamburgerMenu>
			<NavLinks menuOpen={menuOpen}>
				<Link to='/'>home</Link>
				<Link to='/about'>about</Link>
				<Link to='/notes'>notes</Link>
			</NavLinks>
		</Navigation>
	)
}

export default NavBar
