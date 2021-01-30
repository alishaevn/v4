import styled from 'styled-components'
import { Link } from 'gatsby'
import { devices } from '../../utilities/devices'
import { coral, seaFoam, white } from '../../utilities/colors'
import '../../utilities/typography.scss'

export const Excerpt = styled.p`
	color: ${white};
	// font-family: 'poppins';
	font-size: 12px;
	line-height: 15px;
`

export const Meta = styled.p`
	color: ${white};
	// font-family: 'poppins';
	font-size: 12px;
	line-height: 15px;
`

export const PostWrapper = styled.div`
	background: ${({ rightAligned }) => rightAligned ? `${coral}` : 'transparent'};
	padding: ${({ rightAligned }) => rightAligned ? '5px 15px 20px' : '0'};
	border-radius: 5px;
	text-align: ${({ rightAligned }) => rightAligned ? 'right' : 'left'};
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
