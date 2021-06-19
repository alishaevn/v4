import styled from 'styled-components'
import { white } from '../../utilities/colors'
import { devices } from '../../utilities/devices'

export const Table = styled.table`
    font-family: 'poppins';
	color: ${white};
	font-size: 18px;
	font-weight: bold;
`

export const TableData = styled.td`
	@media ${devices.large} {
		:nth-child(2) {
			font-size: 22px;
		}
	}

	@media ${devices.large} {
		max-width: 465px;
	}
`

export const TableHeader = styled.th`
	text-align: left;

	@media ${devices.large} {
		font-size: 22px;
	}
`

export const TableRow = styled.tr`
	display: flex;
	flex-direction: column;
	max-width: 88vw;

	th:nth-child(3) {
		display: none;
	}

	/* @media ${devices.mobileL} {
		width: 88vw;
		max-width: 500px;
	} */

	@media ${devices.medium} {
		width: 88vw;
		max-width: 800px;
	}

	@media ${devices.large} {
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
