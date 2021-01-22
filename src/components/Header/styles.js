import styled from 'styled-components'
import { devices } from '../../utilities/devices'
import { golden } from '../../utilities/colors'

export const H1 = styled.h1`
	color: ${golden};
`

export const PostWrapper = styled.nav`
	// @media ${devices.laptop} { 
		display: flex;
		justify-content: space-between;
		width: 200px;
	// }
`