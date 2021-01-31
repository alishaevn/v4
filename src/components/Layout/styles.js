import styled from 'styled-components'
import { devices } from '../../utilities/devices'

export const AppStyles = styled.div`
	margin: 0 auto;
	max-width: 1400px;
	padding-bottom: 30px;

	a {
		text-decoration: none;
	}

	@media ${devices.mobileM} { 
		width: 95%;
	}

	@media ${devices.tablet} { 
		width: 85%;
	}

	@media ${devices.laptop} { 
		width: 75%;
	}
`
