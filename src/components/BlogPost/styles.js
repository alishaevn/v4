import styled from 'styled-components'
import { Link } from 'gatsby'
import { devices } from '../../utilities/devices'
import { coral, seaFoam, white } from '../../utilities/colors'

export const Excerpt = styled.p`
	color: ${white};
	font-family: 'quicksand';
	font-size: 16px;
	line-height: 20px;

	@media ${devices.tablet} {
		font-size: 20px;
		line-height: 24px;
	}
`

export const Meta = styled.p`
	color: ${white};
	font-family: 'poppins';
	font-size: 16px;
	line-height: 18px;
	margin-top: 0;

	@media ${devices.tablet} {
		font-size: 20px;
		line-height: 26px;
	}
`

export const PostWrapper = styled.div`
	padding: 0;
	margin-bottom: 40px;
	border-bottom: 2px solid ${coral};

	@media ${devices.tablet} {
		width: 100%;
		flex-shrink: 0;
		margin-left: 0;
		margin-right: 0;
	}
`

export const StyledLink = styled(Link)`
	text-decoration: none;
`

export const Title = styled.h1`
	color: ${seaFoam};
	font-family: 'poppins';
	line-height: 28px;
	letter-spacing: 0.5px;
	margin-bottom: 10px;
	font-weight: 600;

	@media ${devices.tablet} {
		font-size: 36px;
		line-height: 40px;
	}
`
