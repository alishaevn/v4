import styled from 'styled-components'
import { devices } from '../../utilities/devices'
import { white } from '../../utilities/colors'

export const Text = styled.p`
	color: ${white};
	font-family: 'quicksand';
	font-size: 16px;
	line-height: 24px;
	max-width: 500px;
	margin-left: auto;
	margin-right: auto;

	@media ${devices.tablet} {
		max-width: inherit;
	}

	@media ${devices.laptop} {
		font-size: 26px;
		line-height: 38px;
		max-width: inherit;
	}
`
