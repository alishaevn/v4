import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../../../assets/images/seafoam_ampersand.png'
import Logo from '../Logo'
import {
	// HamburgerMenu,
	// MenuIcon,
	Navigation,
	NavLinks,
} from './styles'

const NavBar = () => {
	const [menuOpen, toggleMenuOpen] = useState(false)

	return (
		<Navigation>
			<Link to='/'>
				<Logo src={logo} />
			</Link>
			{/* <HamburgerMenu>
				<MenuIcon
					menuOpen={menuOpen}
					onClick={() => toggleMenuOpen(!menuOpen)}
				>
					<div />
					<div />
					<div />
				</MenuIcon>
			</HamburgerMenu> */}
			<NavLinks menuOpen={menuOpen}>
				<Link
					to='/'
					onClick={() => toggleMenuOpen(!menuOpen)}
				>
					home
				</Link>
				{/* <Link
					to='/notes'
					onClick={() => toggleMenuOpen(!menuOpen)}
				>
					notes
				</Link> */}
			</NavLinks>
		</Navigation>
	)
}

export default NavBar
