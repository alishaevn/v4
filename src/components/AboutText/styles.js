import styled from 'styled-components'
import { devices } from '../../utilities/devices'
import { white } from '../../utilities/colors'

export const Text = styled.p`
	color: ${white};
	font-family: 'poppins';
	font-size: 16px;
	line-height: 30px;
	max-width: 500px;
	margin-bottom: 10px;

	@media ${devices.tablet} {
		max-width: inherit;
	}

	@media ${devices.laptop} {
		font-size: 20px;
		line-height: 40px;
	}
`
