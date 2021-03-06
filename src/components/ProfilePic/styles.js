import styled from 'styled-components'
import { devices } from '../../utilities/devices'

export const Img = styled.img`
	height: 145px;
	width: 145px;
	border-radius: 100px;
	margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
	margin-top: ${({ marginTop }) => `${marginTop}px`};
	margin-left: auto;
	margin-right: auto;
	display: block;

	@media ${devices.tablet} { 
		height: 175px;
		width: 175px;
		margin-top: 110px;
		margin-bottom: 110px;
	}
`
