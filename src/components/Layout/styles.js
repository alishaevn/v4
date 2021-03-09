import styled from 'styled-components'
import { devices } from '../../utilities/devices'

export const AppStyles = styled.div`
	margin: 0 auto;
	padding-bottom: 30px;
	max-width: 300px;

	a {
		text-decoration: none;
	}

	@media ${devices.tablet} {
		max-width: 425px;
	}

	@media ${devices.laptop} {
		max-width: 700px;
	}
`
