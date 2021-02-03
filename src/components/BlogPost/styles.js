import styled from 'styled-components'
import { Link } from 'gatsby'
import { devices } from '../../utilities/devices'
import { coral, seaFoam, white } from '../../utilities/colors'
import '@fontsource/poppins'

export const Excerpt = styled.p`
	color: ${white};
	font-family: 'poppins';
	font-size: 12px;
	line-height: 15px;
`

export const Meta = styled.p`
	color: ${white};
	font-family: 'poppins';
	font-size: 12px;
	line-height: 15px;
`

export const PostWrapper = styled.div`
	background: ${({ rightAligned }) => rightAligned ? `${coral}` : 'transparent'};
	padding: ${({ rightAligned }) => rightAligned ? '5px 15px 20px' : '0'};
	border-radius: 5px;
	text-align: ${({ rightAligned }) => rightAligned ? 'right' : 'left'};
	margin: 0 auto 20px;
	max-width: 330px;

	@media ${devices.tablet} {
		width: 42%;
		flex-shrink: 0;
	}
`

export const StyledLink = styled(Link)`
	text-decoration: none;
`

export const Title = styled.h1`
	color: ${({ rightAligned }) => rightAligned ? `${white}` : `${seaFoam}`};
	font-family: 'provicali';
	font-size: 26px;
	line-height: 29px;
	letter-spacing: 0.5px;
`
