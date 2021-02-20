import styled from 'styled-components'
import { devices } from '../../utilities/devices'
import { white } from '../../utilities/colors'

export const Text = styled.p`
	color: ${white};
	font-family: 'quicksand';
	font-size: 14px;
	line-height: 24px;
	max-width: 500px;
	margin-left: auto;
	margin-right: auto;

	@media ${devices.tablet} {
		font-size: 16px;
		line-height: 26px;
		max-width: inherit;
	}
`
