import styled from 'styled-components'
import { white } from '../../utilities/colors'
import { devices } from '../../utilities/devices'

const UnorderedList = styled.ul`
    font-family: 'poppins';
	color: ${white};
	font-size: 16px;

	li {
		margin-bottom: 10px;
	}

	@media ${devices.large} {
		font-size: 18px;
	}
`

export default UnorderedList
