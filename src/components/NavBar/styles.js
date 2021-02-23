import styled from 'styled-components'
import { coral, eerieBlack, golden } from '../../utilities/colors'
import { devices } from '../../utilities/devices'

export const HamburgerMenu = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: center;

	@media ${devices.laptop} {
		display: none;
	}
`

export const Logo = styled.img`
	height: 25px;
`

export const Navigation = styled.header`
	display: flex;
	justify-content: space-between;
	align-items: center;
`

export const MenuIcon = styled.button`
	cursor: pointer;
	background: transparent;
	border: none;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	height: 2rem;
	outline: thin-dotted;
	z-index: 11;
	padding: 0;

	div {
		width: 2rem;
		height: 0.25rem;
		background: ${({ menuOpen }) => menuOpen ? `${coral}` : `${golden}`};
		border-radius: 10px;
		transform-origin: 1px;
		transition: opacity 300ms, transform 300ms;

		:first-child {
			transform: ${({ menuOpen }) => menuOpen ? 'rotate(45deg)' : 'rotate(0)'};
		}

		:nth-child(2) {
			opacity: ${({ menuOpen }) => (menuOpen ? '0' : '1')};
			transform: ${({ menuOpen }) => menuOpen ? 'translateX(-20px)' : 'translateX(0)'};
		}

		:nth-child(3) {
			transform: ${({ menuOpen }) => menuOpen ? 'rotate(-45deg)' : 'rotate(0)'};
		}
	}
`

export const NavLinks = styled.nav`
	font-family: 'provicali';
	letter-spacing: 1.5px;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
	width: 100%;
	justify-content: center;
	text-align: center;
	position: absolute;
	top: 0;
	right: 0;
	transition: transform 300ms;
	transform: ${({ menuOpen }) => menuOpen ? 'translateY(0)' : 'translateY(-100%)'};
	background-color: ${eerieBlack};

	a {
		color: ${golden};
		font-size: 30px;
		text-decoration: none;
		margin-bottom: 10px;

		:hover {
			color: ${coral};
			transition: color 300ms;
		}
	}

	@media ${devices.laptop} { 
		transform: translateY(0);
		font-size: 12px;
		flex-direction: row;
		width: 250px;
		justify-content: space-between;
		min-height: auto;
		position: initial;

		a {
			font-size: 20px;
			margin-bottom: 0;
		}
	}
`