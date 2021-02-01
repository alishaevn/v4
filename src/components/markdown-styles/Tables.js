import styled from 'styled-components'
import { white } from '../../utilities/colors'
import { devices } from '../../utilities/devices'
import '@fontsource/poppins'

export const Table = styled.table`
    font-family: 'poppins';
	color: ${white};
	font-size: 16px;
	font-weight: bold;
`

export const TableData = styled.td`
	backgroundColor: 'lightgray';
`

export const TableHeader = styled.th`
	backgroundColor: 'lightgray';
	text-align: left;
`

export const TableRow = styled.tr`
	display: flex;
	flex-direction: column;

	th:nth-child(3) {
		display: none;
	}

	@media ${devices.laptopL} { 
		display: revert;

		td:nth-child(2),
		th:nth-child(2) {
			display: none;
		}

		th:nth-child(3) {
			display: initial;
		}

		th:nth-child(3),
		td:nth-child(3) > pre {
			margin-left: 15px;
		}
	}
`
