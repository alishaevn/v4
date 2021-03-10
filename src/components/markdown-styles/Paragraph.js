import styled from 'styled-components'
import { white } from '../../utilities/colors'
import { devices } from '../../utilities/devices'

export const Date = styled.p`
    font-family: 'quicksand';
	color: ${white};
	font-size: 18px;
	font-weight: bold;
	text-transform: uppercase;
`

export const Paragraph = styled.p`
    font-family: 'quicksand';
	color: ${white};
	font-size: 16px;
	line-height: 26px;

	/* @media ${devices.laptop} {
		font-size: 20px;
		line-height: 32px;
	} */
`

export const ParagraphWithInlineCode = styled.code`
	background-color: 'lightgray';
`
