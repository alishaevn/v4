import styled from 'styled-components'

export const Pre = styled.pre`
	padding: 0.5em;
	overflow-x: auto;
	border-radius: 5px;
	max-width: 280px;

	& .token-line {
		line-height: 1.3em;
		height: 1.3em;
	}

	font-family: 'Courier New', Courier, monospace;
`

export const LineNo = styled.span`
	display: inline-block;
	width: 2em;
	user-select: none;
	opacity: 0.3;
`
