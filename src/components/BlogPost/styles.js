import styled from 'styled-components'
import { Link } from 'gatsby'
import { devices } from '../../utilities/devices'
import { coral, white } from '../../utilities/colors'
import '../../utilities/typography.scss'

export const Excerpt = styled.p`
	color: ${white};
	font-family: 'poppins';
	font-size: 12px;
	line-height: 15px;
	text-align: right;
`

export const Meta = styled.p`
	color: ${white};
	font-family: 'poppins';
	font-size: 12px;
	line-height: 15px;
	text-align: right;
`

export const PostWrapper = styled.div`
	background: ${({ background }) => background ? `${coral}` : 'transparent'};
	padding: 5px 15px 20px;
    border-radius: 5px;
`

export const StyledLink = styled(Link)`
	text-decoration: none;
`

export const Title = styled.h1`
	color: ${white};
	font-family: 'provicali';
	font-size: 26px;
	line-height: 29px;
	text-align: right;
	letter-spacing: 0.5px;
`
