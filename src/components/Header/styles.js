import styled from 'styled-components'
import { devices } from '../../utilities/devices'
import { golden } from '../../utilities/colors'

export const H1 = styled.h1`
	color: ${golden};
`

export const Logo = styled.img`
	height: 25px;
`

export const NavBar = styled.nav`
	display: flex;
	justify-content: space-between;
`

export const NavLinks = styled.div`
	display: none;

	@media ${devices.laptop} { 
		display: initial;
	}
`