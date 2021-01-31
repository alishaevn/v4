import styled from 'styled-components'

export const Img = styled.img`
	height: 145px;
	width: 145px;
	border-radius: 100px;
	margin-bottom: ${({ marginBottom }) => `${marginBottom}px`};
	margin-top: ${({ marginTop }) => `${marginTop}px`};
	margin-left: auto;
	margin-right: auto;
	display: block;
`
