import styled from 'styled-components'
import { devices } from '../../utilities/devices'
import { golden, seaFoam } from '../../utilities/colors'

export const H1 = styled.h1`
	color: ${golden};
	font-family: 'hello';
	text-align: center;
	margin-bottom: 10px;
	font-size: 60px;
	line-height: 45px;

	@media ${devices.tablet} { 
		font-size: 130px;
	}
`

export const LinkTo = styled.a``

export const SocialIconsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 185px;
	margin: 35px auto 0;

	svg {
		height: 30px;
		width: 30px;
	}

	@media ${devices.tablet} { 
		width: 310px;

		svg {
			height: 35px;
			width: 35px;
		}
	}
`

export const Welcome = styled.p`
	color: ${seaFoam};
	font-family: 'provicali';
	letter-spacing: 2px;
	font-size: 20px;
	line-height: 26px;
	text-align: center;

	@media ${devices.mobileL} {
		font-size: 26px;
		max-width: 400px;
		margin: 35px auto;
	}

	@media ${devices.tablet} {
		font-size: 35px;
		line-height: 40px;
		width: 550px;
		margin: 60px auto;
		max-width: initial;
	}

	@media ${devices.laptopM} {
		width: 750px;
	}
`

export const Wrapper = styled.div`
	margin-top: 150px;
`
