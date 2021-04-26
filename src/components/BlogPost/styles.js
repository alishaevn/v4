import styled from 'styled-components'
import { Link } from 'gatsby'
import { devices } from '../../utilities/devices'
import { eerieBlack, seaFoam, white } from '../../utilities/colors'

export const Blurb = styled.p`
	color: ${white};
	font-family: 'poppins';
	font-size: 15px;
	line-height: 20px;
	letter-spacing: 0.25px;
	height: 40px;
	margin: 0;

	@media ${devices.tablet} {
		font-size: 20px;
		line-height: 24px;
	}
`

export const Meta = styled.p`
	color: ${white};
	font-family: 'poppins';
	font-size: 12px;
	line-height: 15px;
	margin: 0;

	@media ${devices.tablet} {
		font-size: 20px;
		line-height: 26px;
	}
`

export const PostWrapper = styled.div`
	padding: 0;
	margin-bottom: 50px;

	@media ${devices.tablet} {
		width: 45%;
		flex-shrink: 0;
		margin-left: 0;
		margin-right: 0;
	}
`

export const StyledLink = styled(Link)`
	text-decoration: none;
`

export const Thumbnail = styled.div`
	background: linear-gradient(${seaFoam}, ${eerieBlack});
	height: 155px;
	width: 100%;
	margin-bottom: 25px;
	border-radius: 10px;
`

export const Title = styled.h1`
	color: ${seaFoam};
	font-family: 'poppins';
	font-size: 24px;
	font-weight: 600;
	line-height: 28px;
	margin: 10px 0;
	font-weight: 600;

	@media ${devices.tablet} {
		font-size: 36px;
		line-height: 40px;
	}
`
