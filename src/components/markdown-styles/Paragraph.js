import styled from 'styled-components'
import { white } from '../../utilities/colors'
import { devices } from '../../utilities/devices'

export const Date = styled.p`
    font-family: 'quicksand';
	color: ${white};
	font-size: 18px;
	font-weight: bold;
	margin-top: -25px;
`

export const Paragraph = styled.p`
    font-family: 'quicksand';
	color: ${white};
	font-size: 16px;
	line-height: 30px;

	/* @media ${devices.laptop} {
		font-size: 20px;
		line-height: 32px;
	} */
`

export const ParagraphWithInlineCode = styled.code`
	background-color: rgb(80, 91, 112);
	padding: 5px;
`
