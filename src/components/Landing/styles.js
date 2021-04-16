import styled from 'styled-components'
import { devices } from '../../utilities/devices'
import { golden, seaFoam } from '../../utilities/colors'
import '../../utilities/typography.css'

export const H1 = styled.h1`
	color: ${golden};
	font-family: 'hello';
	text-align: center;
	margin-bottom: 10px;
	font-size: 60px;
	line-height: 45px;

	@media ${devices.tablet} {
		font-size: 115px;
		padding-top: 120px;
	}
`

export const Welcome = styled.p`
	color: ${seaFoam};
	font-family: 'provicali';
	letter-spacing: 2px;
	font-size: 20px;
	line-height: 30px;
	text-align: center;
	max-width: 500px;
	margin: 0 auto;

	@media ${devices.tablet} {
		font-size: 25px;
		margin: 50px 0;
	}
`

export const Wrapper = styled.div`
	margin: 115px 0;
`
