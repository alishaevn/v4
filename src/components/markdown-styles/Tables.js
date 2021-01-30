import styled from 'styled-components'
import { white } from '../../utilities/colors'
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
`

export const TableRow = styled.tr`
	display: flex;
	flex-direction: column;
`
