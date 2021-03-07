import styled from 'styled-components'
import { devices } from '../../utilities/devices'
import { golden, seaFoam } from '../../utilities/colors'

export const Copyright = styled.p`
	color: ${seaFoam};
	font-family: 'provicali';
	font-size: 18px;

	/* @media ${devices.tablet} { 
		font-size: 20px;
	} */
`

export const CTA = styled.p`
	color: ${golden};
	font-family: 'hello';
	font-size: 25px;
	letter-spacing: 1px;
	margin-bottom: 0;

	/* @media ${devices.tablet} { 
		font-size: 20px;
	} */
`

export const Inline = styled.div`
	/* display: flex; */

	@media ${devices.tablet} { 
		display: flex;
	}
`

export const Wrapper = styled.div`
	margin: 75px auto 0px;
	text-align: center;

	/* @media ${devices.tablet} { 
		font-size: 20px;
	} */
`
