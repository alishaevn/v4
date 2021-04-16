import styled from 'styled-components'
import { white } from '../../utilities/colors'
import { devices } from '../../utilities/devices'

export const Date = styled.p`
    font-family: 'quicksand';
	color: ${white};
	font-size: 16px;
	font-weight: bold;
	margin-top: -25px;
	padding-bottom: 15px;
`

export const Paragraph = styled.p`
    font-family: 'quicksand';
	color: ${white};
	font-size: 18px;
	line-height: 30px;

	@media ${devices.tablet} {
		font-size: 21px;
		line-height: 35px;
	}
`

export const ParagraphWithInlineCode = styled.code`
	background-color: rgb(80, 91, 112);
	padding: 5px;
`
