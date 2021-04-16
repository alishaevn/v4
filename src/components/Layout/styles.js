import styled from 'styled-components'
import { devices } from '../../utilities/devices'

export const AppStyles = styled.div`
	margin: 0 auto;
	padding: 0px 5px 30px;

	a {
		text-decoration: none;
	}

	@media ${devices.tablet} {
		padding-left: 40px;
		padding-right: 40px;
	}

	@media ${devices.laptop} {
		max-width: 900px;
		padding-left: 80px;
		padding-right: 80px;
	}
`
