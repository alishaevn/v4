import styled from 'styled-components'
import { devices } from '../../utilities/devices'
import { golden, seaFoam } from '../../utilities/colors'

export const H1 = styled.h1`
	color: ${golden};
	font-family: 'hello';
	text-align: center;
	margin-bottom: 0px;
	font-size: 60px;
	line-height: 45px;
`

export const LinkTo = styled.a``

export const SocialIconsWrapper = styled.div`
	display: flex;
	justify-content: space-between;
	width: 155px;
	margin: 35px auto 0;

	svg {
		height: 20px;
		width: 20px;
	}
`

export const Welcome = styled.p`
	color: ${seaFoam};
	font-family: 'provicali';
	letter-spacing: 2px;
	font-size: 20px;
	line-height: 24px;
	text-align: center;
`

export const Wrapper = styled.div`
	margin-top: 200px;
`
