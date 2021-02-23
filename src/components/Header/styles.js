import styled from 'styled-components'
import { devices } from '../../utilities/devices'
import { coral, seaFoam } from '../../utilities/colors'
import '@fontsource/montserrat'

export const Arrow = styled.div`
	border: solid ${seaFoam};
	border-width: 0 3px 3px 0;
	display: inline-block;
	padding: 3px;
	transform: rotate(-45deg);
	-webkit-transform: rotate(-45deg);
`

export const Divider = styled.div`
	background-color: ${seaFoam};
	height: 2px;
	width: 100vw;
	margin-right: 10px;

	@media ${devices.tablet} { 
		height: 3px;
	}
`

export const Line = styled.div`
	background-color: ${seaFoam};
	height: 3px;
	width: 50px;
	margin-left: 10px;
`

export const Title = styled.p`
	color: ${coral};
	font-family: 'montserrat';
	font-size: 20px;
	letter-spacing: 1px;
	text-transform: uppercase;
	white-space: nowrap;
	font-weight: bold;

	@media ${devices.tablet} { 
		font-size: 35px;
	}
`

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
	margin: 20px 0;
	justify-content: ${({ arrow }) => arrow ? 'flex-end' : 'flex-start'};
`
