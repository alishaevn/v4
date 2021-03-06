import styled from 'styled-components'
import { devices } from '../../utilities/devices'
import { coral } from '../../utilities/colors'

export const Details = styled.p`
	color: ${coral};
	font-family: 'quicksand';
	margin-top: 0px;
	margin-bottom: 40px;

	@media ${devices.tablet} { 
		font-size: 20px;
	}
`

export const Title = styled.p`
	color: ${coral};
	font-family: 'provicali';
	font-size: 30px;
	text-transform: capitalize;
	white-space: nowrap;
	font-weight: bold;
	letter-spacing: 2px;
	margin-bottom: 0;

	@media ${devices.tablet} { 
		font-size: 45px;
	}
`
