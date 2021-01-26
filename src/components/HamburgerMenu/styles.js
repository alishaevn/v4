import styled from 'styled-components'
import { devices } from '../../utilities/devices'
import { golden } from '../../utilities/colors'

export const MenuIcon = styled.button`
	background: transparent;
	border: none;
	cursor: pointer;
	z-index: 5;
	padding: 0;

	div {
		width: 1.75rem;
		height: 0.2rem;
		background: ${golden};
		border-radius: 5px;
		transform-origin: 1px;
		position: relative;
		
		&:nth-child(2) {
			margin: 5px 0;
		}
	}

	@media ${devices.laptop} { 
		display: none;
	}
`