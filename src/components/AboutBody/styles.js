import styled from 'styled-components'
import { devices } from '../../utilities/devices'
import { white } from '../../utilities/colors'

export const ProfilePic = styled.img`
	width: 100vw;
	margin-top: 25px;
	margin-left: -30px;
	margin-bottom: 25px;
	display: block;
	object-fit: cover;
	height: 175px;
	object-position: 20% 25%;
`

export const Text = styled.p`
	color: ${white};
	font-family: 'poppins';
	font-size: 16px;
	line-height: 30px;
	max-width: 500px;
	margin-bottom: 10px;

	@media ${devices.medium} {
		max-width: inherit;
	}

	@media ${devices.large} {
		font-size: 20px;
		line-height: 40px;
	}
`
