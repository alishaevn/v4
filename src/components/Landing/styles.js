import styled from 'styled-components'
import { devices } from '../../utilities/devices'
import { golden, seaFoam } from '../../utilities/colors'
import '../../utilities/typography.scss'

export const H1 = styled.h1`
	color: ${golden};
	font-family: 'hello';
	text-align: center;
	margin-bottom: 0px;
	font-size: 60px;
	line-height: 40px;
`

export const SocialIcon = styled.img`
	height: 15px;
`

export const SocialIconsWrapper = styled.nav`
	display: flex;
	justify-content: space-between;
	width: 155px;
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
	// justify-content: 'center';
	text-align: 'center';
`