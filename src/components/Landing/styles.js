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

	@media ${devices.medium} {
		font-size: 115px;
		padding-top: 120px;
	}

	@media ${devices.xlarge} {
		font-size: 150px;
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
	margin: 50px auto;

	@media ${devices.medium} {
		font-size: 25px;
		max-width: inherit;
	}

	@media ${devices.large} {
		max-width: 700px;
	}

	@media ${devices.xlarge} {
		max-width: 800px;
		font-size: 30px;
		line-height: 35px;
	}
`

export const Wrapper = styled.div`
	margin: 115px 0;

	@media ${devices.xlarge} {
		margin: 115px 0 175px
	}
`
