import styled from 'styled-components'
import { devices } from '../../utilities/devices'
import { coral } from '../../utilities/colors'

export const Title = styled.p`
	color: ${coral};
	font-family: 'provicali';
	font-size: 30px;
	letter-spacing: 1px;
	text-transform: capitalize;
	white-space: nowrap;
	font-weight: bold;

	@media ${devices.tablet} { 
		font-size: 35px;
	}
`
