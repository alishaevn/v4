import styled from 'styled-components'
import { devices } from '../../utilities/devices'
import { golden, seaFoam } from '../../utilities/colors'
import '../../utilities/typography.css'

export const Copyright = styled.p`
	color: ${seaFoam};
	font-family: 'provicali';
	font-size: 18px;
	margin-bottom: 5px;
	margin-top: 0px;

	@media ${devices.tablet} {
		margin-bottom: 0;
		margin-right: 6px;
	}
`

export const CTA = styled.p`
	color: ${golden};
	font-family: 'hello';
	font-size: 25px;
	letter-spacing: 1px;
	margin-bottom: 0;
`

export const Inline = styled.div`
	:nth-child(2) {
		margin-top: 20px;
	}

	@media ${devices.tablet} { 
		:nth-child(2) {
			display: flex;
		}
	}
`

export const Wrapper = styled.div`
	margin: 75px auto 0px;
`
