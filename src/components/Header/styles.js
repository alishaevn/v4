import styled from 'styled-components'
import { devices } from '../../utilities/devices'
import { coral, seaFoam } from '../../utilities/colors'
import '../../utilities/typography.scss'

export const Divider = styled.div`
	background-color: ${seaFoam};
	height: 2px;
	width: 100vw;
	margin-right: 10px;
`

export const Title = styled.p`
	color: ${coral};
	font-family: 'montserrat';
	font-size: 20px;
	letter-spacing: 1px;
	text-transform: uppercase;
	white-space: nowrap;
`

export const Wrapper = styled.div`
	display: flex;
	align-items: center;
`
