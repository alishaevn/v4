import styled from 'styled-components'
import { devices } from '../../utilities/devices'

export const AppStyles = styled.div`
	margin: 0 auto;
	padding-bottom: 30px;

	a {
		text-decoration: none;
	}

	@media ${devices.mobileM} { 
		max-width: 500px;
	}

	@media ${devices.mobileL} {
		width: 88vw;
	}

	@media ${devices.tablet} { 
		width: 85%;
	}

	@media ${devices.laptop} { 
		width: 75%;
	}
`
