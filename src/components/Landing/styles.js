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
	margin: 50px auto;

	@media ${devices.tablet} {
		font-size: 25px;
		max-width: inherit;
	}

	@media ${devices.laptop} {
		max-width: 700px;
	}
`

export const Wrapper = styled.div`
	margin: 115px 0;
`

export const poly = {
	display: 'flex',
	justifyContent: 'center',
	paddingTop: 50,
}
