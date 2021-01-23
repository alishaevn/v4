import styled from 'styled-components'
import { devices } from '../../utilities/devices'
import { golden, seaFoam } from '../../utilities/colors'

export const H1 = styled.h1`
	color: ${golden};
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
`

export const Wrapper = styled.div`
	// justify-content: 'center';
	text-align: 'center';
`