import styled from 'styled-components'
import { devices } from '../../utilities/devices'

export const AppStyles = styled.main`
	width: 320px;
	margin: 0 auto;

	@media ${devices.mobileM} { 
		width: 345px;
	}

	@media ${devices.mobileL} { 
		width: 405px;
	}

	@media ${devices.tablet} { 
		width: 718px;
	}

	@media ${devices.laptop} { 
		width: 800px;
	}
	
	@media ${devices.desktop} {
		max-width: 1400px;
	}
`
