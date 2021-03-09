import React from 'react'
import styled from 'styled-components'
import { devices } from '../../utilities/devices'

const Logo = ({ footer, src }) => (
	<Image footer={footer} src={src} />
)

export default Logo

const Image = styled.img`
	height: ${({ footer }) => footer ? `24px` : `30px`};

	@media ${devices.tablet} {
		height: ${({ footer }) => { if (!footer) return `35px` }};
	}

	@media ${devices.laptop} {
		height: ${({ footer }) => { if (!footer) return `45px` }};
	}
`
