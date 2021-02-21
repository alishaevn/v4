import styled from 'styled-components'
import { Link } from 'gatsby'
import { devices } from '../../utilities/devices'
import { coral, seaFoam, white } from '../../utilities/colors'

export const Excerpt = styled.p`
	color: ${white};
	font-family: 'quicksand';
	font-size: 16px;
	line-height: 18px;

	@media ${devices.laptop} {
		font-size: ${({ rightAligned }) => rightAligned ? `18px` : `24px`};
		line-height: ${({ rightAligned }) => rightAligned ? `26px` : `32px`};
	}
`

export const Meta = styled.p`
	color: ${white};
	font-family: 'quicksand';
	font-size: 14px;
	font-weight: 600;
	line-height: 18px;

	@media ${devices.tablet} {
		font-size: 16px;
		line-height: 26px;
	}

	@media ${devices.laptop} {
		font-size: ${({ rightAligned }) => rightAligned ? `16px` : `20px`};
		line-height: 26px;
	}
`

export const PostWrapper = styled.div`
	background: ${({ rightAligned }) => rightAligned ? `${coral}` : 'transparent'};
	padding: ${({ rightAligned }) => rightAligned ? '15px' : '0'};
	border-radius: 5px;
	margin: ${({ rightAligned }) => rightAligned ? '0 auto 20px' : '0 auto 60px'};

	@media ${devices.mobileL} {
		padding-left: 35px;
		padding-right: 35px;
	}

	@media ${devices.tablet} {
		width: ${({ rightAligned }) => rightAligned ? '38%' : '100%'};
		flex-shrink: 0;
		margin-left: 0;
		margin-right: 0;
	}

	@media ${devices.laptop} {
		flex-shrink: 0;
		margin: 0 0 25px;
		margin: ${({ rightAligned }) => rightAligned ? '0 0 25px' : '0 0 50px'};
		max-width: ${({ rightAligned }) => rightAligned ? '310px' : '520px'};
		margin-left: ${({ rightAligned }) => { if (!rightAligned) return 'auto' }};
		margin-right: ${({ rightAligned }) => { if (!rightAligned) return 'auto' }};
	}

	@media ${devices.laptopL} {
		width: ${({ rightAligned }) => rightAligned ? '29%' : '100%'};
	}
`

export const StyledLink = styled(Link)`
	text-decoration: none;
`

export const Title = styled.h1`
	color: ${({ rightAligned }) => rightAligned ? `${white}` : `${seaFoam}`};
	font-family: 'quicksand';
	font-size: 26px;
	line-height: 29px;
	letter-spacing: 0.5px;

	@media ${devices.tablet} {
		font-size: 31px;
	}

	@media ${devices.laptop} {
		font-size: ${({ rightAligned }) => rightAligned ? `32px` : `40px`};
		line-height: 35px;
	}
`
