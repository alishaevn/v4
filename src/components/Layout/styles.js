import styled from 'styled-components'
import { devices } from '../../utilities/devices'

export const AppStyles = styled.main`
	margin: 0 auto;
	max-width: 1400px;

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
