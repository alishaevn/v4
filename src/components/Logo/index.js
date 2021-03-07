import React from 'react'
import styled from 'styled-components'
import { devices } from '../../utilities/devices'

const Logo = ({ src }) => (
	<Image src={src} />
)

export default Logo

const Image = styled.img`
	height: 30px;

	@media ${devices.tablet} {
		height: 35px;
	}

	@media ${devices.laptop} {
		height: 45px;
	}
`
