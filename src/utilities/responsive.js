import styled from 'styled-components'
import { devices } from './devices'
import { eerieBlack } from './colors'

export const AppStyles = styled.div`
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

export const Main = styled.main`
	background-color: ${eerieBlack};
	height: 100vh;
	width: 100vw;
	margin: -8px;
	padding: 20px;
	box-sizing: border-box;
`
