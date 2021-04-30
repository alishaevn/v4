import styled from 'styled-components'
import { white } from '../../utilities/colors'
import { devices } from '../../utilities/devices'

export const Date = styled.p`
    font-family: 'poppins';
	color: ${white};
	font-size: 16px;
	margin-top: 60px;
	margin-bottom: 0;
`

export const Paragraph = styled.p`
    font-family: 'poppins';
	color: ${white};
	font-size: 15px;
	line-height: 25px;

	@media ${devices.tablet} {
		font-size: 21px;
		line-height: 35px;
	}
`

export const ParagraphWithInlineCode = styled.code`
	background-color: #5E6060;
	padding: 2px 5px;
`
