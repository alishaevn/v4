import styled from 'styled-components'
import { devices } from '../../utilities/devices'

export const MenuIcon = styled.button`
	position: fixed;
	top: 2rem;
	right: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-around
	width: 1.5rem;
	height: 1.5rem;
	background: transparent;
	border: none;
	cursor: pointer;
	z-index: 5;

	div {
		width: 1.5rem;
		height: 0.2rem;
		background: black;
		border-radius: 5px;
		transform-origin: 1px;
		position: relative;
	}

	@media ${devices.laptop} { 
		display: none;
	}
`