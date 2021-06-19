import React from 'react'
import styled from 'styled-components'
import { devices } from '../../utilities/devices'

const Logo = ({ footer, src }) => (
	<Image footer={footer} src={src} />
)

export default Logo

const Image = styled.img`
	height: 30px;

	@media ${devices.medium} {
		height: 35px;
	}
`
