import styled from 'styled-components'
import { golden } from '../../utilities/colors'
import { devices } from '../../utilities/devices'

export const NoteLink = styled.p`
    font-family: 'poppins';
	color: ${golden};
	font-size: 18px;
	font-weight: bold;
	margin-top: 25px;
	text-align: center;
`

export const Wrapper = styled.div`
	@media ${devices.medium} {
		display: flex;
		justify-content: space-between;
    }
`