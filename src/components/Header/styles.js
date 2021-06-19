import styled from 'styled-components'
import { devices } from '../../utilities/devices'
import { coral } from '../../utilities/colors'
import '../../utilities/typography.css'

export const Details = styled.p`
	color: ${coral};
	font-family: 'poppins';
	margin-top: 0px;
	margin-bottom: 40px;

	@media ${devices.medium} {
		font-size: 20px;
	}
`

export const Title = styled.p`
	color: ${coral};
	font-family: 'provicali';
	font-size: 35px;
	text-transform: capitalize;
	white-space: nowrap;
	font-weight: bold;
	letter-spacing: 2px;
	margin-bottom: 0;

	@media ${devices.medium} {
		font-size: 45px;
	}
`
