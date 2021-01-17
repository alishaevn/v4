import styled from 'styled-components'

export const Pre = styled.pre`
	text-align: left;
	margin: 1em 0;
	padding: 0.5em;
	overflow-x: auto;
	border-radius: 3px;

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
